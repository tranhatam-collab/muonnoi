/**
 * ChatRoom Durable Object for real-time messaging
 */

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
}

export class ChatRoom {
  private sessions: Map<WebSocket, string> = new Map();
  private messages: ChatMessage[] = [];

  constructor(private state: DurableObjectState) {}

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/websocket') {
      const upgradeHeader = request.headers.get('Upgrade');
      if (upgradeHeader !== 'websocket') {
        return new Response('Expected websocket', { status: 400 });
      }

      const [client, server] = Object.values(new WebSocketPair());
      await this.handleSession(server, url.searchParams.get('userId') || 'anonymous');
      return new Response(null, { status: 101, webSocket: client });
    }

    if (url.pathname === '/messages' && request.method === 'GET') {
      return Response.json({ messages: this.messages });
    }

    if (url.pathname === '/messages' && request.method === 'POST') {
      const body = (await request.json()) as { senderId: string; text: string };
      const msg: ChatMessage = {
        id: crypto.randomUUID(),
        senderId: body.senderId,
        text: body.text,
        timestamp: Date.now(),
      };
      this.messages.push(msg);
      this.broadcast(JSON.stringify({ type: 'message', data: msg }));
      return Response.json({ success: true, message: msg });
    }

    return new Response('Not found', { status: 404 });
  }

  private async handleSession(ws: WebSocket, userId: string) {
    ws.accept();
    this.sessions.set(ws, userId);

    ws.addEventListener('message', async (event) => {
      try {
        const data = JSON.parse(event.data as string) as { text: string };
        const msg: ChatMessage = {
          id: crypto.randomUUID(),
          senderId: userId,
          text: data.text,
          timestamp: Date.now(),
        };
        this.messages.push(msg);
        this.broadcast(JSON.stringify({ type: 'message', data: msg }));
      } catch {
        ws.send(JSON.stringify({ type: 'error', message: 'Invalid message format' }));
      }
    });

    ws.addEventListener('close', () => {
      this.sessions.delete(ws);
    });

    // Send existing messages to new user
    ws.send(JSON.stringify({ type: 'history', data: this.messages }));
  }

  private broadcast(message: string) {
    for (const [ws] of this.sessions) {
      try {
        ws.send(message);
      } catch {
        this.sessions.delete(ws);
      }
    }
  }
}
