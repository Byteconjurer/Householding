import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { useAuth } from './hooks/useAuth';
import RootStackNavigator from './navigators/RootStackNavigator';
import { AuthProvider } from './providers/AuthContextProvider';

function AppContent() {
  const { authState: isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {/* {isAuthenticated ? (
        ) : (
          <LoginScreen />
        )} */}
      <>
        <RootStackNavigator />
      </>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <AppContent />
      </PaperProvider>
    </AuthProvider>
  );
}
