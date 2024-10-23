import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
/* import { useAuth } from './hooks/useAuth'; */
import { onAuthStateChanged } from 'firebase/auth';
import { User } from './data/types';
import { auth } from './firebase';
import LoginStackNavigator from './navigators/LoginStackNavigator';
import RootStackNavigator from './navigators/RootStackNavigator';
import { AuthProvider } from './providers/AuthContextProvider';
import { selectLoggedInUserId } from './store/household/householdSelectors';
import store, { useAppDispatch, useAppSelector } from './store/store';
import { setUser } from './store/user/userSlice';

function AppContent() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectLoggedInUserId);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.toJSON() as User));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {userId ? <RootStackNavigator /> : <LoginStackNavigator />}
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
