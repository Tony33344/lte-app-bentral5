import { createContext, useContext, useState, useCallback } from 'react';
import { en } from './en';
import { de } from './de';
import { sl } from './sl';
import { hr } from './hr';

export type Lang = 'en' | 'de' | 'sl' | 'hr';

export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, de, sl, hr };

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: en,
});

export function useI18n() {
  return useContext(I18nContext);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lte-lang') as Lang;
    return saved && translations[saved] ? saved : 'en';
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('lte-lang', l);
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export const langLabels: Record<Lang, string> = {
  en: 'EN',
  de: 'DE',
  sl: 'SI',
  hr: 'HR',
};
