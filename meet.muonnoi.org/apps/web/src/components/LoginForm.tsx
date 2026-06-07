import { useState } from 'react';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';
import { requestMagicLink } from '../lib/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    setError('');
    try {
      const data = await requestMagicLink(email);
      if (data.success) {
        setStatus('sent');
      } else {
        setError(data.error || 'Failed to send link. Please try again.');
        setStatus('idle');
      }
    } catch {
      setError('Network error. Please try again.');
      setStatus('idle');
    }
  };

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-900 dark:bg-teal-950">
        <Mail className="mx-auto mb-3 h-8 w-8 text-teal-600" />
        <h3 className="mb-1 text-lg font-semibold text-teal-900 dark:text-teal-100">Check your inbox</h3>
        <p className="text-sm text-teal-700 dark:text-teal-400">
          We sent a secure magic link to <strong>{email}</strong>. Click it to log in.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-800 disabled:opacity-60 dark:bg-teal-600 dark:hover:bg-teal-500"
      >
        {status === 'loading' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Send magic link <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
