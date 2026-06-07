import { useState, useEffect } from 'react';
import { Menu, X, Shield, LogOut, User } from 'lucide-react';
import { getStoredToken, clearStoredToken } from '../lib/auth';

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'An toàn', href: '/safety' },
  { label: 'Hướng dẫn', href: '/guide' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getStoredToken());
  }, []);

  const handleLogout = () => {
    clearStoredToken();
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2 text-teal-700 dark:text-teal-400">
          <Shield className="h-6 w-6" />
          <span className="text-lg font-bold tracking-tight">Kết Nối Muôn Nơi</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
            >
              {item.label}
            </a>
          ))}
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <a
                href="/profile"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
              >
                <User className="h-4 w-4" />
                Hồ sơ
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <LogOut className="h-4 w-4" />
                Đăng xuất
              </button>
            </div>
          ) : (
            <a
              href="/login"
              className="rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              Đăng nhập
            </a>
          )}
        </nav>

        <button
          className="rounded-md p-2 text-slate-600 md:hidden dark:text-slate-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {isLoggedIn ? (
              <>
                <a
                  href="/profile"
                  className="text-sm font-medium text-slate-600 dark:text-slate-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hồ sơ
                </a>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleLogout(); }}
                  className="mt-2 rounded-full bg-slate-100 px-4 py-2 text-center text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <a
                href="/login"
                className="mt-2 rounded-full bg-teal-700 px-4 py-2 text-center text-sm font-medium text-white dark:bg-teal-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Đăng nhập
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
