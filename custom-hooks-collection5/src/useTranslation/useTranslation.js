/**
 * Custom useTranslation Hook
 */
import { useLocalStorage } from "../useStorage/useStorage";
import * as translations from "./translations";

// get nested value from an object
const getNestedTranslation = (language, keys) => {
  return keys.reduce((obj, key) => {
    return obj?.[key];
  }, translations[language]);
};

const useTranslation = () => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "en"
  );

  const translate = (key) => {
    const keys = key.split(".");

    // if current language key does not exist, we fall back to English
    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
};

export default useTranslation;
