import { Shield, Heart, Users, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white px-4 pb-16 pt-12 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800 dark:border-teal-900 dark:bg-teal-950 dark:text-teal-300">
          <Shield className="h-3.5 w-3.5" />
          Không gian kết nối đã xác minh
        </div>

        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          Gặp người thật.
          <br />
          Hiểu nhau thật.
          <br />
          <span className="text-teal-700 dark:text-teal-400">Tôn trọng ranh giới thật.</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Không swipe vô tận. Không fake profile. Không bán cô đơn.
          Chỉ có những kết nối nghiêm túc, an toàn, và có trách nhiệm.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-teal-700/30 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            <Heart className="h-4 w-4" />
            Bắt đầu ngay
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Tìm hiểu thêm
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: Shield, label: 'Xác minh danh tính', desc: 'Selfie + liveness' },
            { icon: Users, label: '5–12 gợi ý/ngày', desc: 'Không swipe vô tận' },
            { icon: Lock, label: 'An toàn mặc định', desc: 'Không tracking ads' },
            { icon: Heart, label: 'Kết nối ý nghĩa', desc: 'Intent-first matching' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center dark:border-slate-800 dark:bg-slate-900"
            >
              <item.icon className="mx-auto mb-2 h-5 w-5 text-teal-700 dark:text-teal-400" />
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
