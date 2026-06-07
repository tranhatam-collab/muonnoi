/**
 * verify.iai.one integration
 * Identity & Verification Infrastructure for the IAI.ONE ecosystem.
 *
 * Wraps verify.iai.one session flow for KYC tier 2+.
 */

export interface VerifyStartPayload {
  tenantCode: string;
  flowKey: string;
  subjectType: 'person' | 'organization';
  subjectId: string;
  email: string;
  callbackUrl?: string;
}

export interface VerifySession {
  id: string;
  status: string;
  url: string;
}

export async function startVerification(
  apiBaseUrl: string,
  payload: VerifyStartPayload
): Promise<{ success: boolean; session?: VerifySession; error?: string }> {
  try {
    const res = await fetch(`${apiBaseUrl}/api/verify/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const raw = await res.json().catch(() => ({}));
    const data = raw as Record<string, unknown>;

    if (!res.ok) {
      return { success: false, error: String(data.error || `Verify API error ${res.status}`) };
    }

    return {
      success: true,
      session: {
        id: String(data.session_id || data.id || ''),
        status: String(data.status || ''),
        url: String(data.url || `${apiBaseUrl}/start`),
      },
    };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function getVerificationStatus(
  apiBaseUrl: string,
  sessionId: string
): Promise<{ success: boolean; status?: string; tier?: string; error?: string }> {
  try {
    const res = await fetch(`${apiBaseUrl}/api/verify/session/${sessionId}/status`);
    const raw = await res.json().catch(() => ({}));
    const data = raw as Record<string, unknown>;

    if (!res.ok) {
      return { success: false, error: String(data.error || `Verify API error ${res.status}`) };
    }

    return {
      success: true,
      status: String(data.status || ''),
      tier: String(data.tier || data.verification_tier || ''),
    };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
