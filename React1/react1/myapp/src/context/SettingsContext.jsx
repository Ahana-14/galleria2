import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState('system');
  const [language, setLanguage] = useState('en');
  const [privacy, setPrivacy] = useState({
    analytics: false,
    personalization: true,
    marketing: false,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    // Load theme
    const savedTheme = localStorage.getItem('app_theme');
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Apply system theme if no saved theme
      applyTheme('system');
    }

    // Load language
    const savedLanguage = localStorage.getItem('app_language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    // Load privacy settings
    const savedPrivacy = localStorage.getItem('privacy_controls');
    if (savedPrivacy) {
      try {
        setPrivacy(JSON.parse(savedPrivacy));
      } catch (e) {
        console.error('Error parsing privacy settings:', e);
      }
    }
  }, []);

  // Apply theme to document
  const applyTheme = (themeValue) => {
    const root = document.documentElement;
    if (themeValue === 'dark') {
      root.classList.add('dark');
    } else if (themeValue === 'light') {
      root.classList.remove('dark');
    } else if (themeValue === 'system') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  // Update theme
  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('app_theme', newTheme);
    applyTheme(newTheme);
  };

  // Update language
  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('app_language', newLanguage);
  };

  // Update privacy settings
  const updatePrivacy = (newPrivacy) => {
    setPrivacy(newPrivacy);
    localStorage.setItem('privacy_controls', JSON.stringify(newPrivacy));
  };

  // Listen for system theme changes
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        applyTheme('system');
      };
      
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, [theme]);

  const value = {
    theme,
    language,
    privacy,
    updateTheme,
    updateLanguage,
    updatePrivacy,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

