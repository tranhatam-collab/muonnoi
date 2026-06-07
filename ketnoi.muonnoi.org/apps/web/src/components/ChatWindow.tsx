import { useState, useRef, useEffect } from 'react';
import { Send, AlertTriangle, Phone, ShieldCheck, Loader2 } from 'lucide-react';
import { checkMessageSafety } from '../lib/safety';

interface Message {
  id: string;
  sender: 'me' | 'them';
  text: string;
  timestamp: Date;
  warning?: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'them',
    text: 'Chào bạn! Mình thấy profile của bạn rất thú vị. Bạn có thích đi bộ đường dài không?',
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: '2',
    sender: 'me',
    text: 'Chào bạn! Có chứ, mình rất thích đi bộ đường dài. Gần đây mình đi Tam Đảo, phong cảnh đẹp lắm.',
    timestamp: new Date(Date.now() - 3000000),
  },
];

const WS_BASE = 'wss://ketnoi-muonnoi-api.tranhatam.workers.dev';

interface Props {
  roomId?: string;
  userId?: string;
}

export default function ChatWindow({ roomId = 'demo', userId = 'me' }: Props) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [wsStatus, setWsStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');
  const wsRef = useRef<WebSocket | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const ws = new WebSocket(`${WS_BASE}/ws/chat/${roomId}?userId=${userId}`);
    wsRef.current = ws;

    ws.onopen = () => setWsStatus('open');
    ws.onclose = () => setWsStatus('closed');
    ws.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data as string) as {
          type: string;
          data: { id: string; senderId: string; text: string; timestamp: number };
        };
        if (payload.type === 'message') {
          const msg: Message = {
            id: payload.data.id,
            sender: payload.data.senderId === userId ? 'me' : 'them',
            text: payload.data.text,
            timestamp: new Date(payload.data.timestamp),
          };
          setMessages((prev) => [...prev, msg]);
        }
      } catch {
        // ignore non-JSON
      }
    };

    return () => ws.close();
  }, [roomId, userId]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isChecking) return;

    setIsChecking(true);
    const safety = await checkMessageSafety(input);
    setIsChecking(false);

    const flagLabels: Record<string, string> = {
      'off-platform contact': 'Liên hệ ngoài nền tảng: Có thể chứa số điện thoại/Zalo/Telegram. Hãy cẩn thận.',
      'financial request': 'Yêu cầu tài chính: Tin nhắn có thể chứa yêu cầu chuyển tiền. Đừng gửi tiền cho người bạn chưa gặp.',
      'investment scam': 'Lừa đảo đầu tư: Có thể chứa đề xuất đầu tư/crypto. Hãy từ chối và báo cáo.',
    };

    const warning = safety.flags && safety.flags.length > 0
      ? safety.flags.map((f) => flagLabels[f] || 'Cảnh báo an toàn: Nội dung này có thể rủi ro.').join(' ')
      : undefined;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'me',
      text: input,
      timestamp: new Date(),
      warning,
    };

    // Send via WebSocket if connected
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ text: input }));
    } else {
      // Fallback: add locally if WS not available
      setMessages((prev) => [...prev, newMsg]);
    }

    setInput('');

    if (!safety.safe) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 6000);
    }
  };

  return (
    <div className="flex h-[70vh] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-950 dark:text-teal-400">
          M
        </div>
        <div className="flex-1">
          <div className="font-semibold text-slate-900 dark:text-white">Minh Anh</div>
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
            <ShieldCheck className="h-3 w-3 text-teal-600" />
            Đã xác minh
            <span className="mx-1">·</span>
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                wsStatus === 'open' ? 'bg-green-500' : wsStatus === 'connecting' ? 'bg-yellow-500' : 'bg-red-500'
              }`}
            />
            {wsStatus === 'open' ? 'Trực tuyến' : wsStatus === 'connecting' ? 'Đang kết nối...' : 'Ngoại tuyến'}
          </div>
        </div>
      </div>

      {/* Warning banner */}
      {showWarning && (
        <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 text-xs text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300">
          <AlertTriangle className="h-3.5 w-3.5" />
          <strong>Cảnh báo an toàn:</strong> Đừng chuyển tiền cho người bạn chưa gặp. Báo cáo nếu nghi ngờ.
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center text-xs text-blue-800 dark:bg-blue-950 dark:text-blue-300">
          <strong>Mẹo an toàn:</strong> Đừng chia sẻ thông tin cá nhân quá sớm. Gặp ở nơi công cộng nếu hẹn offline.
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                msg.sender === 'me'
                  ? 'bg-teal-700 text-white dark:bg-teal-600'
                  : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
              }`}
            >
              <p>{msg.text}</p>
              {msg.warning && (
                <div className="mt-2 rounded-lg border border-yellow-300 bg-yellow-50 p-2 text-xs text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-300">
                  <AlertTriangle className="mb-1 h-3 w-3" />
                  {msg.warning}
                </div>
              )}
              <div
                className={`mt-1 text-[10px] ${
                  msg.sender === 'me' ? 'text-teal-200' : 'text-slate-500 dark:text-slate-500'
                }`}
              >
                {msg.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {/* Off-platform warning */}
        <div className="flex items-start gap-2 rounded-xl border border-orange-200 bg-orange-50 p-3 text-xs text-orange-800 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-300">
          <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <div>
            <strong>Lưu ý:</strong> Nếu bạn chuyển sang Telegram/Zalo/WhatsApp, chúng tôi không thể bảo vệ bạn.
            Hãy ở lại đây cho đến khi bạn thực sự tin tưởng.
          </div>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="border-t border-slate-100 p-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhắn tin tử tế..."
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
          <button
            type="submit"
            disabled={!input.trim() || isChecking}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white transition-colors hover:bg-teal-800 disabled:opacity-40 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            {isChecking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </button>
        </div>
      </form>
    </div>
  );
}
