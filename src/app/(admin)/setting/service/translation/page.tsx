import LanguageSelector from "@/components/language-switcher/language-selector";

const SettingServiceTranslation = () => {
  return (
    <div>
      <h1>Translation</h1>
      <div>
        <LanguageSelector
          supportedLanguages={["en", "id"]}
          defaultLocale="en"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div>kiri</div>
        <div>kanan</div>
      </div>
    </div>
  );
};

export default SettingServiceTranslation;
