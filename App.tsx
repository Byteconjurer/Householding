import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RootStackNavigator from './navigators/RootStackNavigator';
import { AuthProvider } from './providers/AuthContextProvider';
import { PaperProvider } from 'react-native-paper';
import { useAuth } from './hooks/useAuth';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';

function AppContent() {
  const { authState: isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <>
          <RootStackNavigator />
        </>
      ) : (
        <LoginScreen />
      )}
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
