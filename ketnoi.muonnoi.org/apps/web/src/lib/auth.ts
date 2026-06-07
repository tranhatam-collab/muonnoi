/**
 * Auth utilities for frontend
 * Handles API calls, token storage, and session management
 */

const API_BASE = import.meta.env.PUBLIC_API_URL || 'https://ketnoi-muonnoi-api.tranhatam.workers.dev';

const TOKEN_KEY = 'ketnoi_auth_token';

export interface AuthSession {
  token: string;
  expiresAt: string;
  user: {
    id: string;
    email: string;
    nickname: string;
    verificationTier: string;
    status: string;
    avatarUrl?: string;
  };
}

export function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
}

export function isTokenExpired(expiresAt: string): boolean {
  return new Date(expiresAt) <= new Date();
}

export async function requestMagicLink(email: string): Promise<{ success: boolean; error?: string }> {
  const res = await fetch(`${API_BASE}/api/v1/auth/magic-link`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) {
    return { success: false, error: data.error || 'Gửi magic link thất bại' };
  }
  return { success: true };
}

export async function verifyMagicLink(token: string): Promise<{ success: boolean; session?: AuthSession; error?: string }> {
  const res = await fetch(`${API_BASE}/api/v1/auth/verify-magic-link`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    return { success: false, error: data.error || 'Xác minh thất bại' };
  }
  const session: AuthSession = {
    token: data.token,
    expiresAt: data.expiresAt,
    user: data.user,
  };
  setStoredToken(session.token);
  return { success: true, session };
}

export async function getCurrentUser(): Promise<AuthSession['user'] | null> {
  const token = getStoredToken();
  if (!token) return null;

  const res = await fetch(`${API_BASE}/api/v1/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    if (res.status === 401) {
      clearStoredToken();
    }
    return null;
  }
  const data = await res.json();
  return data.data || null;
}

export async function logout(): Promise<void> {
  const token = getStoredToken();
  if (token) {
    await fetch(`${API_BASE}/api/v1/auth/logout`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }).catch(() => {});
  }
  clearStoredToken();
}
