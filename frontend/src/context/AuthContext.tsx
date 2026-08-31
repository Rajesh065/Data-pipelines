import React, { createContext, useContext, useState } from 'react';
import { UserRole } from '../types';

interface AuthContextType {
  role: UserRole;
  setRole: (r: UserRole) => void;
  userName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('DATA_ENGINEER');
  return (
    <AuthContext.Provider value={{ role, setRole, userName: 'Rohan Sharma (Lead Data Architect)' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error('useAuth error');
  return c;
};
