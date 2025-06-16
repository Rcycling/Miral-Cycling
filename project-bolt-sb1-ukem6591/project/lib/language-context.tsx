'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

const translations = {
  fr: {
    home: 'Accueil',
    collections: 'Collections',
    about: 'À propos',
    contact: 'Contact',
    account: 'Mon compte'
  },
  en: {
    home: 'Home',
    collections: 'Collections',
    about: 'About',
    contact: 'Contact',
    account: 'Account'
  }
};

interface LanguageContextValue {
  lang: Language;
  t: typeof translations.fr;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fr');
  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null;
    if (stored) setLang(stored);
  }, []);
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
