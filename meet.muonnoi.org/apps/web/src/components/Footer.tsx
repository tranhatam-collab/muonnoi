export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Muon Noi. Real people. Real trust.</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a href="/privacy" className="hover:text-teal-700 dark:hover:text-teal-400">Privacy</a>
          <a href="/terms" className="hover:text-teal-700 dark:hover:text-teal-400">Terms</a>
          <a href="/safety" className="hover:text-teal-700 dark:hover:text-teal-400">Safety</a>
        </div>
      </div>
    </footer>
  );
}
