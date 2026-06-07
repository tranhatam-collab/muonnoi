import { useState } from 'react';
import { Mail, KeyRound, ArrowRight, Loader2 } from 'lucide-react';
import { requestMagicLink } from '../lib/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError('');
    try {
      const result = await requestMagicLink(email);
      if (!result.success) {
        setError(result.error || 'Gửi magic link thất bại');
        setLoading(false);
        return;
      }
      setSent(true);
    } catch (err) {
      setError('Lỗi kết nối máy chủ. Vui lòng thử lại.');
    }
    setLoading(false);
  };

  const handlePasskey = async () => {
    // TODO: WebAuthn passkey authentication
    alert('Passkey authentication coming soon');
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-900 dark:bg-teal-950">
        <Mail className="mx-auto mb-3 h-8 w-8 text-teal-700 dark:text-teal-400" />
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">Magic link đã gửi!</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Kiểm tra hộp thư <strong>{email}</strong> và nhấp vào link để đăng nhập.
        </p>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
          Link có hiệu lực trong 15 phút.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}
      <form onSubmit={handleMagicLink} className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 disabled:opacity-60 dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
          Gửi magic link
        </button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-slate-500 dark:bg-slate-950 dark:text-slate-500">hoặc</span>
        </div>
      </div>

      <button
        onClick={handlePasskey}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <KeyRound className="h-4 w-4" />
        Đăng nhập bằng Passkey
      </button>
    </div>
  );
}
