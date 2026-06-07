/**
 * WebAuthn / Passkey utilities for Cloudflare Workers
 */

export interface PasskeyCredential {
  id: string;
  userId: string;
  publicKey: string;
  counter: number;
  deviceName?: string;
  createdAt: string;
}

export function base64UrlEncode(buffer: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

export function base64UrlDecode(str: string): Uint8Array {
  const padding = '='.repeat((4 - (str.length % 4)) % 4);
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/') + padding;
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export function generateChallenge(length = 32): string {
  const arr = new Uint8Array(length);
  crypto.getRandomValues(arr);
  return base64UrlEncode(arr.buffer);
}

export async function storeChallenge(
  kv: KVNamespace,
  userId: string,
  challenge: string,
  purpose: 'register' | 'authenticate',
  ttlSeconds = 120
): Promise<void> {
  await kv.put(`webauthn:challenge:${purpose}:${userId}`, challenge, { expirationTtl: ttlSeconds });
}

export async function verifyChallenge(
  kv: KVNamespace,
  userId: string,
  challenge: string,
  purpose: 'register' | 'authenticate'
): Promise<boolean> {
  const stored = await kv.get(`webauthn:challenge:${purpose}:${userId}`);
  if (!stored) return false;
  await kv.delete(`webauthn:challenge:${purpose}:${userId}`);
  return stored === challenge;
}

// ─── CBOR Decoder (minimal, WebAuthn-only) ───

function cborDecodeItem(data: Uint8Array, offset: { i: number }): unknown {
  const byte = data[offset.i++];
  const major = byte >> 5;
  const addInfo = byte & 0x1f;

  let length = 0;
  if (addInfo < 24) {
    length = addInfo;
  } else if (addInfo === 24) {
    length = data[offset.i++];
  } else if (addInfo === 25) {
    length = (data[offset.i++] << 8) | data[offset.i++];
  } else if (addInfo === 26) {
    offset.i += 4;
    length = 0; // float, not needed
  } else if (addInfo === 27) {
    offset.i += 8;
    length = 0; // float, not needed
  }

  switch (major) {
    case 0:
      return length;
    case 1:
      return -1 - length;
    case 2: {
      const slice = data.slice(offset.i, offset.i + length);
      offset.i += length;
      return slice;
    }
    case 3: {
      const slice = data.slice(offset.i, offset.i + length);
      offset.i += length;
      return new TextDecoder().decode(slice);
    }
    case 4: {
      const arr: unknown[] = [];
      for (let j = 0; j < length; j++) arr.push(cborDecodeItem(data, offset));
      return arr;
    }
    case 5: {
      const map = new Map<unknown, unknown>();
      for (let j = 0; j < length; j++) {
        const key = cborDecodeItem(data, offset);
        const val = cborDecodeItem(data, offset);
        map.set(key, val);
      }
      return map;
    }
    default:
      return undefined;
  }
}

export function cborDecode(data: Uint8Array): unknown {
  return cborDecodeItem(data, { i: 0 });
}

// ─── COSE / Public Key extraction ───

interface AuthData {
  rpIdHash: Uint8Array;
  flags: number;
  signCount: number;
  aaguid?: Uint8Array;
  credentialId?: Uint8Array;
  cosePublicKey?: Uint8Array;
}

export function parseAuthenticatorData(authData: Uint8Array): AuthData {
  let offset = 0;
  const rpIdHash = authData.slice(offset, offset + 32);
  offset += 32;

  const flags = authData[offset++];
  const signCount = (authData[offset++] << 24) | (authData[offset++] << 16) | (authData[offset++] << 8) | authData[offset++];

  const result: AuthData = { rpIdHash, flags, signCount };

  if (flags & 0x40) {
    result.aaguid = authData.slice(offset, offset + 16);
    offset += 16;
    const credIdLen = (authData[offset++] << 8) | authData[offset++];
    result.credentialId = authData.slice(offset, offset + credIdLen);
    offset += credIdLen;
    result.cosePublicKey = authData.slice(offset);
  }

  return result;
}

export function coseToRawPublicKey(coseKey: Uint8Array): Uint8Array {
  const map = cborDecode(coseKey) as Map<unknown, unknown>;
  const kty = map.get(1);
  if (kty !== 2) throw new Error('Only EC2 keys supported');

  const x = map.get(-2) as Uint8Array;
  const y = map.get(-3) as Uint8Array;

  // Uncompressed EC point: 0x04 || x || y
  const raw = new Uint8Array(1 + x.length + y.length);
  raw[0] = 0x04;
  raw.set(x, 1);
  raw.set(y, 1 + x.length);
  return raw;
}

// ─── Signature verification ───

export async function importEC2PublicKey(rawPublicKey: Uint8Array): Promise<CryptoKey> {
  // rawPublicKey = 0x04 || x(32 bytes) || y(32 bytes)
  const xArr = rawPublicKey.slice(1, 33);
  const yArr = rawPublicKey.slice(33, 65);

  return crypto.subtle.importKey(
    'jwk',
    {
      kty: 'EC',
      crv: 'P-256',
      x: base64UrlEncode(xArr.buffer),
      y: base64UrlEncode(yArr.buffer),
      ext: true,
    },
    { name: 'ECDSA', namedCurve: 'P-256' },
    true,
    ['verify']
  );
}

export async function verifyWebAuthnSignature(
  publicKey: CryptoKey,
  signature: Uint8Array,
  authenticatorData: Uint8Array,
  clientDataJSON: string
): Promise<boolean> {
  const clientDataHash = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientDataJSON)));

  const signedData = new Uint8Array(authenticatorData.length + clientDataHash.length);
  signedData.set(authenticatorData, 0);
  signedData.set(clientDataHash, authenticatorData.length);

  // DER signature might need conversion; Web Crypto expects raw r||s
  let rawSig = signature;
  if (signature[0] === 0x30) {
    rawSig = derToRawSignature(signature);
  }

  return crypto.subtle.verify(
    { name: 'ECDSA', hash: 'SHA-256' },
    publicKey,
    rawSig.buffer.slice(rawSig.byteOffset, rawSig.byteOffset + rawSig.byteLength) as ArrayBuffer,
    signedData.buffer.slice(signedData.byteOffset, signedData.byteOffset + signedData.byteLength) as ArrayBuffer
  );
}

function derToRawSignature(der: Uint8Array): Uint8Array {
  // Minimal DER parser for ECDSA signatures
  let offset = 2; // skip SEQUENCE header
  if (der[0] !== 0x30) return der;

  const rLen = der[offset + 1];
  const r = der.slice(offset + 2, offset + 2 + rLen);
  offset += 2 + rLen;
  const sLen = der[offset + 1];
  const s = der.slice(offset + 2, offset + 2 + sLen);

  const pad = (v: Uint8Array, len: number) => {
    if (v.length === len) return v;
    if (v.length > len) return v.slice(v.length - len);
    const p = new Uint8Array(len);
    p.set(v, len - v.length);
    return p;
  };

  const raw = new Uint8Array(64);
  raw.set(pad(r, 32), 0);
  raw.set(pad(s, 32), 32);
  return raw;
}
