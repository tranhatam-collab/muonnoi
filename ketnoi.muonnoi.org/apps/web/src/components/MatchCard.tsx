import { ShieldCheck, Heart, X, MessageCircle, MapPin } from 'lucide-react';
import { useState } from 'react';

interface Props {
  name: string;
  age: number;
  location: string;
  intent: string;
  bio: string;
  verified: boolean;
  compatibility: number;
  values: string[];
}

export default function MatchCard({ name, age, location, intent, bio, verified, compatibility, values }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex gap-4 p-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-slate-400">
            {name.charAt(0)}
          </div>
          {verified && (
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="truncate text-base font-semibold text-slate-900 dark:text-white">
              {name}, {age}
            </h3>
            {verified && (
              <span className="shrink-0 rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-medium text-teal-700 dark:bg-teal-950 dark:text-teal-400">
                Đã xác minh
              </span>
            )}
          </div>

          <div className="mb-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
            <MapPin className="h-3 w-3" />
            {location}
            <span className="mx-1">·</span>
            {intent}
          </div>

          <div className="mb-2 flex items-center gap-2">
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-teal-600"
                style={{ width: `${compatibility}%` }}
              />
            </div>
            <span className="text-xs font-medium text-teal-700 dark:text-teal-400">{compatibility}% phù hợp</span>
          </div>

          {expanded && (
            <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{bio}</p>
          )}

          <div className="flex flex-wrap gap-1.5">
            {values.map((v) => (
              <span
                key={v}
                className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3 dark:border-slate-800">
        <button
          onClick={() => setExpanded(!expanded)}
          className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          {expanded ? 'Thu gọn' : 'Xem thêm'}
        </button>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setLiked(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:border-slate-800 dark:hover:bg-red-950"
            aria-label="Bỏ qua"
          >
            <X className="h-4 w-4" />
          </button>
          <button
            onClick={() => setLiked(true)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              liked
                ? 'border-pink-200 bg-pink-50 text-pink-600 dark:border-pink-900 dark:bg-pink-950'
                : 'border-slate-200 text-slate-400 hover:bg-pink-50 hover:text-pink-500 dark:border-slate-800 dark:hover:bg-pink-950'
            }`}
            aria-label="Thích"
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-teal-700 transition-colors hover:bg-teal-100 dark:border-teal-900 dark:bg-teal-950 dark:text-teal-400 dark:hover:bg-teal-900"
            aria-label="Nhắn tin"
          >
            <MessageCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
