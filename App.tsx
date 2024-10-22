import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
/* import { useAuth } from './hooks/useAuth'; */
import { onAuthStateChanged } from 'firebase/auth';
import { User } from './data/types';
import { auth } from './firebase';
import LoginStackNavigator from './navigators/LoginStackNavigator';
import RootStackNavigator from './navigators/RootStackNavigator';
import { AuthProvider } from './providers/AuthContextProvider';
import store from './store/store';

function AppContent() {
  const [user, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {user ? <RootStackNavigator /> : <LoginStackNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <PaperProvider>
          <AppContent />
        </PaperProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}
