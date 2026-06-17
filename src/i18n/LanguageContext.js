import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import translations from './translations';

const STORAGE_KEY = 'site-lang';
const DEFAULT_LANG = 'zh';

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  toggleLang: () => {},
  t: key => key,
  // eslint-disable-next-line no-unused-vars
  tr: (en, zh) => en,
});

const getInitialLang = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANG;
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') {
      return stored;
    }
  } catch (e) {
    // ignore
  }
  return DEFAULT_LANG;
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }
  }, [lang]);

  const setLang = useCallback(next => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  }, [lang, setLang]);

  const t = useCallback(
    key => {
      const entry = translations[key];
      if (!entry) {
        return key;
      }
      return entry[lang] ?? entry.en ?? key;
    },
    [lang],
  );

  const tr = useCallback((en, zh) => (lang === 'zh' ? zh ?? en : en), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
