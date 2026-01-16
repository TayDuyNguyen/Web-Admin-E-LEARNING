
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  user: { name: string; role: string; avatar: string };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Simulate an authenticated user
  const [user] = useState({
    name: 'Quản trị hệ thống',
    role: 'Admin',
    avatar: 'https://picsum.photos/seed/admin/40/40'
  });

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProviders');
  return context;
};
