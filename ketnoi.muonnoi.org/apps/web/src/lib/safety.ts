/**
 * Safety / Scam detection utilities for frontend
 */

const API_BASE = import.meta.env.PUBLIC_API_URL || 'https://ketnoi-muonnoi-api.tranhatam.workers.dev';

export interface SafetyCheckResult {
  safe: boolean;
  flags?: string[];
}

export async function checkMessageSafety(message: string): Promise<SafetyCheckResult> {
  const res = await fetch(`${API_BASE}/api/v1/safety/check`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    // Fallback: treat as safe if API fails
    return { safe: true };
  }

  const data = await res.json();
  return {
    safe: data.safe ?? true,
    flags: data.flags,
  };
}

export async function reportUser(reportedUserId: string, reason: string, details?: string): Promise<{ success: boolean; reportId?: string; error?: string }> {
  const token = localStorage.getItem('ketnoi_auth_token');
  const res = await fetch(`${API_BASE}/api/v1/safety/report`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify({ reportedUserId, reason, details }),
  });

  const data = await res.json();
  if (!res.ok) {
    return { success: false, error: data.error || 'Báo cáo thất bại' };
  }
  return { success: true, reportId: data.reportId };
}

export async function blockUser(blockedUserId: string, reason?: string): Promise<{ success: boolean; error?: string }> {
  const token = localStorage.getItem('ketnoi_auth_token');
  const res = await fetch(`${API_BASE}/api/v1/safety/block`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify({ blockedUserId, reason }),
  });

  const data = await res.json();
  if (!res.ok) {
    return { success: false, error: data.error || 'Chặn thất bại' };
  }
  return { success: true };
}
