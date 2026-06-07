import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getCurrentUser, clearStoredToken, type AuthSession } from '../lib/auth';

interface AuthContextType {
  user: AuthSession['user'] | null;
  loading: boolean;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: () => {},
  refreshUser: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthSession['user'] | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    const u = await getCurrentUser();
    setUser(u);
  };

  const handleLogout = () => {
    clearStoredToken();
    setUser(null);
    window.location.href = '/';
  };

  useEffect(() => {
    refreshUser().finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, logout: handleLogout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
