import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  role: string;
  setRole: (r: string) => void;
  engineerName: string;
  team: string;
  cluster: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState('DATA_ENGINEER');
  return (
    <AuthContext.Provider value={{
      role,
      setRole,
      engineerName: 'Sophia Kowalski (Principal Data Architect)',
      team: 'Enterprise Lakehouse Core',
      cluster: 'prod-k8s-spark-cluster-us-east-1'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error('useAuth error');
  return c;
};
