export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              Kết Nối Muôn Nơi
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Gặp người thật. Hiểu nhau thật. Tôn trọng ranh giới thật.
            </p>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">Sản phẩm</div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="/" className="hover:text-teal-700 dark:hover:text-teal-400">Trang chủ</a></li>
              <li><a href="/guide" className="hover:text-teal-700 dark:hover:text-teal-400">Hướng dẫn</a></li>
              <li><a href="/safety" className="hover:text-teal-700 dark:hover:text-teal-400">An toàn</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">Pháp lý</div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="/terms" className="hover:text-teal-700 dark:hover:text-teal-400">Điều khoản</a></li>
              <li><a href="/privacy" className="hover:text-teal-700 dark:hover:text-teal-400">Chính sách riêng tư</a></li>
              <li><a href="/safety-policy" className="hover:text-teal-700 dark:hover:text-teal-400">Chính sách an toàn</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">Liên hệ</div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="mailto:support@muonnoi.org" className="hover:text-teal-700 dark:hover:text-teal-400">support@muonnoi.org</a></li>
              <li><a href="mailto:safety@muonnoi.org" className="hover:text-teal-700 dark:hover:text-teal-400">safety@muonnoi.org</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          © {new Date().getFullYear()} Muôn Nơi. Bảo lưu mọi quyền.
          <br />
          Công ty Cổ phần Giáo dục Hành Trình Kasan. VIET CAN NEW CORP.
        </div>
      </div>
    </footer>
  );
}
