export interface Env {
  D1: D1Database;
  MAIL_IAI_ONE_TO?: string;
  MAIL_IAI_ONE_API_KEY?: string;
  VERIFY_IAI_ONE_API_KEY?: string;
}

interface InterestForm {
  fullName: string;
  email: string;
  phone?: string;
  country: string;
  investorType: string;
  projectInterest: string;
  amountRange?: string;
  riskAcknowledged: string;
  notTransactionAcknowledged: string;
  contactAllowed: string;
}

// Deploy timestamp: 2026-06-06
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const contentType = request.headers.get('content-type') || '';
  let body: Partial<InterestForm> = {};

  if (contentType.includes('application/json')) {
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else if (contentType.includes('application/x-www-form-urlencoded')) {
    const form = await request.formData();
    body = Object.fromEntries(form.entries()) as Partial<InterestForm>;
  } else {
    return new Response(JSON.stringify({ error: 'Unsupported content type' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { fullName, email, country, investorType, projectInterest } = body;

  if (!fullName || !email || !country || !investorType || !projectInterest) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email format' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Store in D1
  try {
    await env.D1.prepare(
      `INSERT INTO investor_interest (
        full_name, email, phone, country, investor_type,
        project_interest, amount_range, risk_acknowledged,
        not_transaction_acknowledged, contact_allowed, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      fullName,
      email,
      body.phone || null,
      country,
      investorType,
      projectInterest,
      body.amountRange || null,
      body.riskAcknowledged === 'on' || body.riskAcknowledged === 'true' ? 1 : 0,
      body.notTransactionAcknowledged === 'on' || body.notTransactionAcknowledged === 'true' ? 1 : 0,
      body.contactAllowed === 'on' || body.contactAllowed === 'true' ? 1 : 0,
      new Date().toISOString()
    ).run();
  } catch (err) {
    console.error('D1 insert error:', err);
    // Continue to try email even if D1 fails
  }

  // Send notification email via mail.iai.one
  if (env.MAIL_IAI_ONE_API_KEY && env.MAIL_IAI_ONE_TO) {
    try {
      await fetch('https://mail.iai.one/api/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.MAIL_IAI_ONE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'no-reply@dautu.muonnoi.org',
          to: env.MAIL_IAI_ONE_TO,
          subject: `[Đầu Tư Muôn Nơi] Quan tâm mới: ${fullName}`,
          text: `Nhà đầu tư mới bày tỏ quan tâm:

Họ tên: ${fullName}
Email: ${email}
Điện thoại: ${body.phone || '—'}
Quốc gia: ${country}
Loại: ${investorType}
Dự án: ${projectInterest}
Mức quan tâm: ${body.amountRange || '—'}

Thời gian: ${new Date().toISOString()}

—
Gửi qua mail.iai.one · Thanh toán xử lý qua pay.iai.one · Audit qua verify.iai.one
`,
        }),
      });
    } catch (err) {
      console.error('Email send error:', err);
    }
  }

  // Audit log via verify.iai.one (non-blocking)
  if (env.VERIFY_IAI_ONE_API_KEY) {
    try {
      await fetch('https://verify.iai.one/api/audit', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.VERIFY_IAI_ONE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'investor_interest_submitted',
          source: 'dautu.muonnoi.org',
          timestamp: new Date().toISOString(),
          data: {
            email,
            projectInterest,
            investorType,
            country,
          },
        }),
      });
    } catch (err) {
      console.error('Audit log error:', err);
    }
  }

  return new Response(JSON.stringify({ success: true, message: 'Interest recorded' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://dautu.muonnoi.org',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    },
  });
};

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://dautu.muonnoi.org',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
