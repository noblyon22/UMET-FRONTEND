import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Category, PaymentMethod } from '@/types/category';
import { getCategories, getPaymentMethods } from '@/services/categoryService';
import { AuthContext } from '@/context/AuthContext';
import { getToken } from '@/utils/storage';

interface AppContextValue {
  categories: Category[];
  paymentMethods: PaymentMethod[];
  isLoadingMeta: boolean;
  refreshMeta: () => Promise<void>;
}

export const AppContext = createContext<AppContextValue>({} as AppContextValue);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [categories, setCategories] = useState<Category[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoadingMeta, setIsLoadingMeta] = useState<boolean>(false);

  const refreshMeta = useCallback(async () => {
    setIsLoadingMeta(true);
    try {
      const [cats, methods] = await Promise.all([getCategories(), getPaymentMethods()]);
      setCategories(cats);
      setPaymentMethods(methods);
    } finally {
      setIsLoadingMeta(false);
    }
  }, []);

  // On mount: if a token already exists in storage, fire the meta fetch
  // immediately — in parallel with AuthContext's getMe() call — instead of
  // waiting for isAuthenticated to flip to true (which would add a full
  // round-trip of latency before categories/paymentMethods start loading).
  useEffect(() => {
    if (getToken()) {
      refreshMeta();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally runs once on mount only

  // After a fresh sign-in / sign-up (isAuthenticated flips true but no token
  // existed at mount time), or after sign-out (clear stale data).
  useEffect(() => {
    if (isAuthenticated) {
      // Only re-fetch if we don't already have data (mount prefetch may have
      // already populated it).
      if (categories.length === 0 && paymentMethods.length === 0) {
        refreshMeta();
      }
    } else {
      setCategories([]);
      setPaymentMethods([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]); // refreshMeta is stable; categories/paymentMethods
                         // intentionally excluded to avoid re-fetch loops

  return (
    <AppContext.Provider value={{ categories, paymentMethods, isLoadingMeta, refreshMeta }}>
      {children}
    </AppContext.Provider>
  );
};
