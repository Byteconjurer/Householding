import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import RootStackNavigator from './navigators/RootStackNavigator';
import { AuthProvider } from './providers/AuthContextProvider';
import LoginScreen from './screens/LoginScreen';
import store from './store/store';

function AppContent() {
  const { authState: isAuthenticated } = useAuth(); // user: User | null

  return (
    <NavigationContainer>
      {isAuthenticated ? <RootStackNavigator /> : <LoginScreen />}
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
