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
