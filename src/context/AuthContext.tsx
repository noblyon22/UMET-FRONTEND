import React, { createContext, useCallback, useEffect, useState } from 'react';
import { User } from '@/types/user';
import { getMe, login, logout, register } from '@/services/authService';
import { LoginPayload, RegisterPayload } from '@/types/auth';
import { getToken, removeToken, setToken } from '@/utils/storage';

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (payload: LoginPayload) => Promise<void>;
  signUp: (payload: RegisterPayload) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Restore session on mount if a token is present
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsLoading(false);
      return;
    }
    getMe()
      .then((me) => setUser(me))
      .catch(() => removeToken())
      .finally(() => setIsLoading(false));
  }, []);

  const signIn = useCallback(async (payload: LoginPayload) => {
    const { access_token, user } = await login(payload);
    setToken(access_token);
    setUser(user);
  }, []);

  const signUp = useCallback(async (payload: RegisterPayload) => {
    const { access_token, user } = await register(payload);
    setToken(access_token);
    setUser(user);
  }, []);

  const signOut = useCallback(async () => {
    await logout().catch(() => {});
    removeToken();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
