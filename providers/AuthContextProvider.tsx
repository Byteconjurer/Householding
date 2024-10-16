import React, { createContext, useState } from 'react';

type AuthContextType = {
  userName: string;
  setUserName: (userName: string) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [userName, setUserName] = useState<string>('');

  return (
    <AuthContext.Provider value={{  userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
}
