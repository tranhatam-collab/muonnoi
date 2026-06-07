/**
 * mail.iai.one integration
 * Unified outbound email relay for the IAI.ONE ecosystem.
 *
 * In dev: falls back to console.log if MAIL_API_URL is not set.
 * In prod: calls mail.iai.one /api/v1/send
 */

export interface MailPayload {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  replyTo?: string;
  tags?: string[];
}

export async function sendMail(
  apiBaseUrl: string,
  apiKey: string,
  payload: MailPayload
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const isDev = !apiBaseUrl || apiBaseUrl.includes('localhost');

  if (isDev) {
    console.log('[MAIL DEV]', payload);
    return { success: true, messageId: `dev-${Date.now()}` };
  }

  try {
    const res = await fetch(`${apiBaseUrl}/api/v1/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({})) as Record<string, unknown>;

    if (!res.ok) {
      return {
        success: false,
        error: (data.error as string) || `Mail API error ${res.status}`,
      };
    }

    return { success: true, messageId: data.messageId as string };
  } catch (err) {
    return {
      success: false,
      error: (err as Error).message,
    };
  }
}

// Convenience: send magic link email
export async function sendMagicLinkEmail(
  apiBaseUrl: string,
  apiKey: string,
  to: string,
  token: string,
  appOrigin: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const link = `${appOrigin}/login?token=${encodeURIComponent(token)}`;

  return sendMail(apiBaseUrl, apiKey, {
    to,
    subject: 'Đăng nhập vào Kết Nối Muôn Nơi',
    text: `Nhấn vào link để đăng nhập (có hiệu lực 15 phút):\n\n${link}\n\nNếu không phải bạn, hãy bỏ qua email này.`,
    html: `<p>Nhấn vào link để đăng nhập (có hiệu lực 15 phút):</p><p><a href="${link}">${link}</a></p><p>Nếu không phải bạn, hãy bỏ qua email này.</p>`,
    tags: ['magic-link', 'auth'],
  });
}
