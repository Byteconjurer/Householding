import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
/* import { useAuth } from './hooks/useAuth'; */
import RootStackNavigator from './navigators/RootStackNavigator';
import { AuthProvider } from './providers/AuthContextProvider';
import store from './store/store';
import LoginStackNavigator from './navigators/LoginStackNavigator';

function AppContent() {
 /*  const { userName } = useAuth(); */

  return (
    <NavigationContainer>
      {/* userName */ ? <RootStackNavigator /> : <LoginStackNavigator/>}
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
