import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
/* import { useAuth } from './hooks/useAuth'; */
import { onAuthStateChanged } from 'firebase/auth';
import { User } from './data/types';
import { auth } from './firebase';
import LoginStackNavigator from './navigators/LoginStackNavigator';
import RootStackNavigator from './navigators/RootStackNavigator';
import { AuthProvider } from './providers/AuthContextProvider';
import { selectCurrentUser } from './store/sharedSelectors';
import store, { useAppDispatch, useAppSelector } from './store/store';
import { setUser } from './store/user/userSlice';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import merge from 'deepmerge';
import { ThemePreferencesContext } from './providers/ThemePreferencesContext';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, {
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    primary: '#2f9388',
    background: '#e8e8e8', 
    surface: '#FFFFFF',
    text: '#000000'
  },
});

const CombinedDarkTheme = merge(MD3DarkTheme, {
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    primary: '#2f9388',
  },
});

function AppContent({ theme }: { theme: any }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.toJSON() as User));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <NavigationContainer theme={theme}>
      {user?.uid ? <RootStackNavigator /> : <LoginStackNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <ThemePreferencesContext.Provider value={preferences}>
          <PaperProvider theme={theme}>
            <AppContent theme={theme} />
          </PaperProvider>
        </ThemePreferencesContext.Provider>
      </AuthProvider>
    </ReduxProvider>
  );
}
