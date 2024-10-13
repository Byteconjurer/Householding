import React, { createContext, useState } from 'react';

type AuthContextType = {
  authState: boolean;
  setAuthState: (state: boolean) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: {children:React.ReactNode}) {
  const [authState, setAuthState] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};