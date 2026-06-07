import { useAuth } from './AuthProvider';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal-600 border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <p className="mb-4 text-slate-600 dark:text-slate-400">
          Bạn cần đăng nhập để truy cập trang này.
        </p>
        <a
          href="/login"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          Đăng nhập
        </a>
      </div>
    );
  }

  return <>{children}</>;
}
