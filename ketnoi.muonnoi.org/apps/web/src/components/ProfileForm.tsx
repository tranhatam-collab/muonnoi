import { useState } from 'react';
import { Camera, Heart, Shield, Loader2, CheckCircle } from 'lucide-react';

const intents = [
  'Tìm hiểu nghiêm túc',
  'Tìm bạn đời',
  'Tìm bạn đồng hành',
  'Tìm bạn đi cùng / travel companion',
  'Tìm bạn học / phát triển bản thân',
  'Chưa chắc, muốn trò chuyện tử tế',
];

const values = [
  'Gia đình',
  'Sự nghiệp',
  'Học tập',
  'Sức khỏe',
  'Tâm linh / Tôn giáo',
  'Du lịch',
  'Nghệ thuật',
  'Cộng đồng',
];

export default function ProfileForm() {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    displayName: '',
    bio: '',
    intent: '',
    readyForDate: '',
    pace: '',
    values: [] as string[],
    boundaries: '',
    dealbreakers: '',
    morningOrNight: '',
    homebodyOrOutgoing: '',
    travelFrequency: '',
    communicationStyle: '',
    photoUrl: '',
  });

  const update = (field: string, value: string | string[]) => {
    setProfile((p) => ({ ...p, [field]: value }));
    setSaved(false);
  };

  const toggleValue = (v: string) => {
    setProfile((p) => ({
      ...p,
      values: p.values.includes(v) ? p.values.filter((x) => x !== v) : [...p.values, v],
    }));
    setSaved(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/users/me', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          bio: profile.bio,
          intent: profile.intent,
          values: JSON.stringify(profile.values),
          boundaries: profile.boundaries,
          dealbreakers: profile.dealbreakers,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || 'Lưu hồ sơ thất bại');
        setLoading(false);
        return;
      }
      setSaved(true);
    } catch (err) {
      alert('Lỗi kết nối máy chủ. Vui lòng thử lại.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8">
      {/* Identity */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
          <Camera className="h-5 w-5 text-teal-700 dark:text-teal-400" />
          Ảnh đại diện
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            {profile.photoUrl ? (
              <img src={profile.photoUrl} alt="avatar" className="h-20 w-20 rounded-full object-cover" />
            ) : (
              <Camera className="h-8 w-8 text-slate-400" />
            )}
          </div>
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tải lên ít nhất 1 ảnh mặt rõ. Ảnh sẽ được kiểm tra liveness.
            </p>
            <button
              type="button"
              className="mt-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Tải ảnh lên
            </button>
          </div>
        </div>
      </section>

      {/* Intent */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
          <Heart className="h-5 w-5 text-teal-700 dark:text-teal-400" />
          Mục tiêu quan hệ
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {intents.map((i) => (
            <label
              key={i}
              className={`cursor-pointer rounded-xl border px-4 py-3 text-sm transition-all ${
                profile.intent === i
                  ? 'border-teal-500 bg-teal-50 text-teal-800 dark:border-teal-500 dark:bg-teal-950 dark:text-teal-300'
                  : 'border-slate-200 text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <input
                type="radio"
                name="intent"
                value={i}
                checked={profile.intent === i}
                onChange={() => update('intent', i)}
                className="sr-only"
              />
              {i}
            </label>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Bạn sẵn sàng hẹn hò chưa?
            </label>
            <select
              value={profile.readyForDate}
              onChange={(e) => update('readyForDate', e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="">Chọn...</option>
              <option value="ready">Đã sẵn sàng</option>
              <option value="soon">Sắp sẵn sàng</option>
              <option value="chat">Muốn trò chuyện trước</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Bạn muốn tiến nhanh hay chậm?
            </label>
            <select
              value={profile.pace}
              onChange={(e) => update('pace', e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="">Chọn...</option>
              <option value="slow">Chậm và chắc</option>
              <option value="medium">Vừa phải</option>
              <option value="open">Tùy cảm xúc</option>
            </select>
          </div>
        </div>
      </section>

      {/* Values & Lifestyle */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
          <Shield className="h-5 w-5 text-teal-700 dark:text-teal-400" />
          Giá trị & Lối sống
        </h2>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Giá trị quan trọng với bạn (chọn nhiều)
          </label>
          <div className="flex flex-wrap gap-2">
            {values.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => toggleValue(v)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  profile.values.includes(v)
                    ? 'bg-teal-700 text-white dark:bg-teal-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Bạn là người sáng hay tối?</label>
            <select value={profile.morningOrNight} onChange={(e) => update('morningOrNight', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white">
              <option value="">Chọn...</option>
              <option value="morning">Sáng sớm</option>
              <option value="night">Đêm khuya</option>
              <option value="both">Linh hoạt</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Thích ở nhà hay ra ngoài?</label>
            <select value={profile.homebodyOrOutgoing} onChange={(e) => update('homebodyOrOutgoing', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white">
              <option value="">Chọn...</option>
              <option value="home">Ở nhà</option>
              <option value="out">Ra ngoài</option>
              <option value="balance">Cân bằng</option>
            </select>
          </div>
        </div>
      </section>

      {/* Boundaries */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Ranh giới cá nhân</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Những ranh giới bạn muốn được tôn trọng
            </label>
            <textarea
              value={profile.boundaries}
              onChange={(e) => update('boundaries', e.target.value)}
              placeholder="Ví dụ: Tôi không muốn bị hỏi về thu nhập ngay lần đầu trò chuyện..."
              rows={3}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Điều bạn không chấp nhận
            </label>
            <textarea
              value={profile.dealbreakers}
              onChange={(e) => update('dealbreakers', e.target.value)}
              placeholder="Ví dụ: Không trung thực, thiếu tôn trọng, ép buộc..."
              rows={2}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
        </div>
      </section>

      {saved && (
        <div className="flex items-center gap-2 rounded-xl bg-teal-50 p-3 text-sm text-teal-800 dark:bg-teal-950 dark:text-teal-300">
          <CheckCircle className="h-4 w-4" />
          Hồ sơ đã được lưu!
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 disabled:opacity-60 dark:bg-teal-600 dark:hover:bg-teal-500"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Lưu hồ sơ
      </button>
    </form>
  );
}
