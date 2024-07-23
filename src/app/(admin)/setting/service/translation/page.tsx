import TranslationContainer from "@/app/(admin)/_components/translation-container";
import LanguageSelector from "@/components/language-switcher/language-selector";
import { getServiceWithTranslations } from "@/data/services";

const SettingServiceTranslation = async () => {
  const defaultTranslateTo = "en";
  const services = await getServiceWithTranslations("en");
  //  const services = await getServiceWithTranslationsByCategories("en", [
  //   "paspor",
  //   "legalisasi",
  // ]);
  return (
    <div className="p-4">
      <h1>Translation</h1>
      <div>
        <LanguageSelector
          supportedLanguages={["en", "fr"]}
          defaultLocale={defaultTranslateTo}
        />
      </div>
      <div>
        <TranslationContainer
          initialServiceWithTranslations={services}
          defaultTranslateTo={defaultTranslateTo}
        />
      </div>
    </div>
  );
};

export default SettingServiceTranslation;
