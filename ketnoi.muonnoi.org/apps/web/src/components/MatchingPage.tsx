import { useState, useEffect } from 'react';
import { Loader2, RefreshCw } from 'lucide-react';
import MatchCard from './MatchCard';

interface MatchSuggestion {
  id: string;
  userId: string;
  nickname: string;
  compatibility: number;
  sharedValues: string[];
  photoUrl?: string;
  age?: number;
  location?: string;
  intent?: string;
  bio?: string;
  verified?: boolean;
}

const API_BASE = import.meta.env.PUBLIC_API_URL || 'https://ketnoi-muonnoi-api.tranhatam.workers.dev';

export default function MatchingPage() {
  const [suggestions, setSuggestions] = useState<MatchSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchSuggestions = async () => {
    try {
      const token = localStorage.getItem('ketnoi_auth_token');
      const res = await fetch(`${API_BASE}/api/v1/match/suggestions`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.success) {
        setSuggestions(data.data || []);
        setError('');
      } else {
        setError(data.error || 'Không thể tải gợi ý');
      }
    } catch {
      setError('Lỗi kết nối. Vui lòng thử lại.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchSuggestions();
  };

  const handleLike = async (userId: string) => {
    try {
      const token = localStorage.getItem('ketnoi_auth_token');
      const res = await fetch(`${API_BASE}/api/v1/match/${userId}/like`, {
        method: 'POST',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.isMutual) {
        alert('Bạn và người này đã thích nhau! Hãy bắt đầu trò chuyện.');
      }
      setSuggestions((prev) => prev.filter((s) => s.userId !== userId));
    } catch {
      // ignore
    }
  };

  const handlePass = async (userId: string) => {
    try {
      const token = localStorage.getItem('ketnoi_auth_token');
      await fetch(`${API_BASE}/api/v1/match/${userId}/pass`, {
        method: 'POST',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setSuggestions((prev) => prev.filter((s) => s.userId !== userId));
    } catch {
      // ignore
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900 dark:bg-red-950">
        <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        <button
          onClick={handleRefresh}
          className="mt-3 inline-flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300"
        >
          <RefreshCw className="h-3 w-3" /> Thử lại
        </button>
      </div>
    );
  }

  if (suggestions.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Chưa có gợi ý nào hôm nay. Quay lại sau nhé!
        </p>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="mt-3 inline-flex items-center gap-1 rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 hover:bg-teal-100 dark:bg-teal-950 dark:text-teal-300"
        >
          <RefreshCw className={`h-3 w-3 ${refreshing ? 'animate-spin' : ''}`} /> Làm mới
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {suggestions.map((s) => (
        <div key={s.id} className="relative">
          <MatchCard
            name={s.nickname}
            age={s.age || 0}
            location={s.location || 'Việt Nam'}
            intent={s.intent || 'Tìm hiểu'}
            bio={s.bio || ''}
            verified={s.verified || false}
            compatibility={s.compatibility}
            values={s.sharedValues}
          />
          <div className="mt-2 flex items-center gap-2">
            <button
              onClick={() => handlePass(s.userId)}
              className="flex-1 rounded-lg border border-slate-200 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              Bỏ qua
            </button>
            <button
              onClick={() => handleLike(s.userId)}
              className="flex-1 rounded-lg bg-teal-700 py-2 text-xs font-medium text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              Thích
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
