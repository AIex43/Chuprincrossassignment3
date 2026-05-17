import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = {
    darkMode,

    colors: {
    
      background: darkMode ? '#2B2B2B' : '#FFF0E4', 

      
      text: darkMode ? '#FFFFFF' : '#4F2F00',

      
      primary: darkMode ? '#FFFBF5' : '#4F2F00', 

      
      card: darkMode ? '#3A3A3A' : '#FFFFFF',

      
      border: darkMode ? '#444444' : '#E7D2C4',

      
      inputBackground: darkMode ? '#3A3A3A' : '#FFFFFF',

      placeholder: darkMode ? '#AAAAAA' : '#8A6B5A',

      
      icon: darkMode ? '#FFFBF5' : '#4F2F00',

      
      danger: '#B00020',
      success: '#2E7D32',
    },
  };

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};