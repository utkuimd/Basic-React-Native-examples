import React, {useState} from 'react';
import {ThemeContext} from '../contexts/theme';
import darkTheme from '../constants/dark';
import lightTheme from '../constants/light';

const ThemeProvider = ({children}) => {
  const [themeState, setThemeState] = useState(lightTheme);

  const handleLightTheme = () => {
    if (themeState.type === 'dark') {
      setThemeState(lightTheme);
    }
  };

  const handleDarkTheme = () => {
    if (themeState.type === 'light') {
      setThemeState(darkTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        setTheme: setThemeState,
        setLightTheme: handleLightTheme,
        setDarkTheme: handleDarkTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
