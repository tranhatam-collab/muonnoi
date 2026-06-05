import { useState } from 'react';
import { Loader2, ArrowRight, AlertCircle } from 'lucide-react';

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    email: '',
    nickname: '',
    age: '',
    gender: '',
    city: '',
    agreeTerms: false,
    agreeAge: false,
  });

  const update = (field: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
    setError('');
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (step === 1) {
      if (!form.email || !form.nickname || !form.age) {
        setError('Vui lòng điền đầy đủ thông tin');
        return;
      }
      if (parseInt(form.age) < 18) {
        setError('Bạn phải từ 18 tuổi trở lên');
        return;
      }
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!form.gender || !form.city) {
        setError('Vui lòng chọn giới tính và thành phố');
        return;
      }
      setStep(3);
      return;
    }

    if (step === 3) {
      if (!form.agreeTerms || !form.agreeAge) {
        setError('Bạn phải đồng ý với điều khoản và xác nhận đủ 18 tuổi');
        return;
      }
      setLoading(true);
      // TODO: call API /api/auth/register
      await new Promise((r) => setTimeout(r, 2000));
      setLoading(false);
      setStep(4);
    }
  };

  if (step === 4) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-900 dark:bg-teal-950">
        <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Đăng ký thành công!</h3>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          Magic link đã gửi đến <strong>{form.email}</strong>. Vui lòng kiểm tra hộp thư.
        </p>
        <a
          href="/login"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          Đến trang đăng nhập
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleNext} className="space-y-5">
      {step === 1 && (
        <>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Nickname</label>
            <input
              type="text"
              required
              value={form.nickname}
              onChange={(e) => update('nickname', e.target.value)}
              placeholder="Tên hiển thị"
              maxLength={30}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Tuổi</label>
            <input
              type="number"
              required
              min={18}
              max={100}
              value={form.age}
              onChange={(e) => update('age', e.target.value)}
              placeholder="18+"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Giới tính</label>
            <select
              required
              value={form.gender}
              onChange={(e) => update('gender', e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Thành phố / Vùng</label>
            <input
              type="text"
              required
              value={form.city}
              onChange={(e) => update('city', e.target.value)}
              placeholder="Ví dụ: Hà Nội, TP.HCM, Đà Nẵng"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <p className="mb-2 font-medium">Tóm tắt thông tin:</p>
            <ul className="space-y-1 text-slate-600 dark:text-slate-400">
              <li>Email: {form.email}</li>
              <li>Nickname: {form.nickname}</li>
              <li>Tuổi: {form.age}</li>
              <li>Giới tính: {form.gender}</li>
              <li>Thành phố: {form.city}</li>
            </ul>
          </div>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={form.agreeTerms}
              onChange={(e) => update('agreeTerms', e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-500"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Tôi đồng ý với{' '}
              <a href="/terms" className="text-teal-700 hover:underline dark:text-teal-400">
                Điều khoản sử dụng
              </a>{' '}
              và{' '}
              <a href="/privacy" className="text-teal-700 hover:underline dark:text-teal-400">
                Chính sách riêng tư
              </a>
            </span>
          </label>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={form.agreeAge}
              onChange={(e) => update('agreeAge', e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-500"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Tôi xác nhận tôi từ 18 tuổi trở lên và hiểu rằng nền tảng này không dành cho trẻ vị thành niên.
            </span>
          </label>
        </>
      )}

      {error && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 disabled:opacity-60 dark:bg-teal-600 dark:hover:bg-teal-500"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {step === 3 ? 'Hoàn tất đăng ký' : 'Tiếp theo'}
      </button>

      {step > 1 && (
        <button
          type="button"
          onClick={() => setStep((s) => s - 1)}
          className="w-full text-center text-sm text-slate-500 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
        >
          Quay lại
        </button>
      )}
    </form>
  );
}
