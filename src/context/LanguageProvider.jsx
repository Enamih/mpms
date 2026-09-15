import { useEffect, useMemo, useState } from "react";
import LanguageContext from "./LanguageContext";

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = window.localStorage.getItem("mpm-language");
    return saved === "en" ? "en" : "sr";
  });

  useEffect(() => {
    window.localStorage.setItem("mpm-language", language);
    document.documentElement.lang = language === "en" ? "en" : "sr";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isEnglish: language === "en",
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
