// Cloudflare Pages middleware receives a SINGLE context arg; call context.next().
// Previous version used onRequest(context, next) — `next` was undefined → threw on
// every request (incl. static assets) → Worker error 1101 shadowed the whole site.
export async function onRequest(context: any) {
  try {
    return await context.next();
  } catch (err) {
    // fail-open: serve a safe response instead of crashing the whole site.
    return new Response("Service temporarily unavailable", {
      status: 503,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
}
