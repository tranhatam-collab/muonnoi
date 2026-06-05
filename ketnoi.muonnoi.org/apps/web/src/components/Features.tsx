import { ShieldCheck, MessageSquareWarning, MapPin, Video, Gift, Scale } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Xác minh nhiều tầng',
    description:
      'Email, số điện thoại, selfie/liveness, và tùy chọn ID. Không deepfake. Không AI persona.',
  },
  {
    icon: MessageSquareWarning,
    title: 'An toàn trong chat',
    description:
      'Money Request Shield phát hiện scam. Cảnh báo khi kéo sang nền tảng khác quá sớm.',
  },
  {
    icon: MapPin,
    title: 'Safe Date Mode',
    description:
      'Lên kế hoạch hẹn, chia sẻ với người thân, check-in/check-out, và nút khẩn cấp.',
  },
  {
    icon: Video,
    title: 'Video intro',
    description:
      'Quay video 10–20 giây để người khác thấy con người thật của bạn, không chỉ ảnh.',
  },
  {
    icon: Gift,
    title: 'Quà tặng ý nghĩa',
    description:
      '99 món quà theo 9 khía cạnh cuộc sống. Thể hiện sự quan tâm, không mua tình cảm.',
  },
  {
    icon: Scale,
    title: 'Minh bạch & kháng cáo',
    description:
      'Lý do ban/suspend rõ ràng. Appeal form. Review SLA. Không ban mù mờ.',
  },
];

export default function Features() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white">
            Không chỉ là hẹn hò
          </h2>
          <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-400">
            Mỗi tính năng được thiết kế để bảo vệ bạn và tôn trọng ranh giới.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
            >
              <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 dark:bg-teal-950">
                <f.icon className="h-6 w-6 text-teal-700 dark:text-teal-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
