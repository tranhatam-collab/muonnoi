const API_BASE = import.meta.env.PUBLIC_API_URL || 'https://ketnoi-muonnoi-api.tranhatam.workers.dev';
const TOKEN_KEY = 'meet_auth_token';

export async function requestMagicLink(email: string) {
  const res = await fetch(`${API_BASE}/api/v1/auth/magic-link`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  return res.json();
}

export async function verifyMagicLink(token: string) {
  const res = await fetch(`${API_BASE}/api/v1/auth/verify-magic-link`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  if (data.success && data.token) {
    localStorage.setItem(TOKEN_KEY, data.token);
  }
  return data;
}

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function clearStoredToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function getCurrentUser() {
  const token = getStoredToken();
  if (!token) return null;
  const res = await fetch(`${API_BASE}/api/v1/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  return res.json();
}
