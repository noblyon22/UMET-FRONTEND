import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { AppProvider } from '@/context/AppContext';
import AppRoutes from '@/routes/AppRoutes';
import '@/styles/index.css';

const App: React.FC = () => (
  <AuthProvider>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </AuthProvider>
);

export default App;
