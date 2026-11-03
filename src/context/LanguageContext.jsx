import { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import am from '../locales/am.json';

const translations = { en, am };

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (keyPath, fallback = '') => fallback,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('feleke_portfolio_lang');
      return saved === 'am' ? 'am' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('feleke_portfolio_lang', language);
      document.documentElement.lang = language;
    } catch {
      // ignore
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const t = (keyPath, fallback = '') => {
    const keys = keyPath.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English if missing in Amharic
        let enCurrent = translations.en;
        for (const enKey of keys) {
          if (enCurrent && typeof enCurrent === 'object' && enKey in enCurrent) {
            enCurrent = enCurrent[enKey];
          } else {
            return fallback || keyPath;
          }
        }
        return enCurrent ?? fallback ?? keyPath;
      }
    }
    return current ?? fallback ?? keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
