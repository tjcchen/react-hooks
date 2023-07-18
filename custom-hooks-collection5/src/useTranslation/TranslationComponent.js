import useTranslation from "./useTranslation";

const TranslationComponent = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  return (
    <>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <div>{t("empty")}</div>
      <button onClick={() => setLanguage("sp")}>Change to Spanish</button>
      <button onClick={() => setLanguage("en")}>Change to English</button>
      <button onClick={() => setFallbackLanguage("sp")}>Change FB Language</button>
    </>
  );
};

export default TranslationComponent;
