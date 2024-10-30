import React from 'react';

export const ThemePreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
