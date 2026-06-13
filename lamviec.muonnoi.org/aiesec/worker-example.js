/**
 * Cloudflare Worker example for real backend gate.
 * This is a skeleton for dev team, not wired into static HTML by default.
 * Bindings suggested:
 * - AIESEC_ACCESS_KEY as secret
 * - AIESEC_LEADS as D1 database or replace with fetch to CRM/Sheet webhook
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/api/aiesec-access') {
      const body = await request.json().catch(() => null);
      if (!body) return json({ ok: false, error: 'INVALID_JSON' }, 400);
      const required = ['accessKey', 'fullName', 'phone', 'email'];
      for (const k of required) {
        if (!String(body[k] || '').trim()) return json({ ok: false, error: `MISSING_${k}` }, 400);
      }
      if (String(body.accessKey) !== env.AIESEC_ACCESS_KEY) {
        return json({ ok: false, error: 'INVALID_KEY' }, 401);
      }
      // Example D1 insert. Create table separately:
      // CREATE TABLE aiesec_leads (id INTEGER PRIMARY KEY AUTOINCREMENT, full_name TEXT, phone TEXT, email TEXT, organization TEXT, source TEXT, created_at TEXT);
      if (env.AIESEC_LEADS) {
        await env.AIESEC_LEADS.prepare(
          'INSERT INTO aiesec_leads (full_name, phone, email, organization, source, created_at) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(body.fullName, body.phone, body.email, body.organization || '', body.source || '', new Date().toISOString()).run();
      }
      return json({ ok: true });
    }
    return json({ ok: false, error: 'NOT_FOUND' }, 404);
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });
}
