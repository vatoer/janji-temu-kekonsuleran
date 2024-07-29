import LanguageSelector from "@/components/language-switcher/language-selector";
import { getServiceWithTranslations } from "@/data/services";
import ServicesContainer from "../../_components/services-container";

const SettingServicePage = async () => {
  const defaultTranslateTo = "en";
  const services = await getServiceWithTranslations("en");
  //  const services = await getServiceWithTranslationsByCategories("en", [
  //   "paspor",
  //   "legalisasi",
  // ]);
  return (
    <div className="p-4">
      <h1>Layanan</h1>
      <div>
        <LanguageSelector
          supportedLanguages={["en", "fr"]}
          defaultLocale={defaultTranslateTo}
        />
      </div>
      <div>
        <ServicesContainer
          initialServiceWithTranslations={services}
          defaultTranslateTo={defaultTranslateTo}
        />
      </div>
    </div>
  );
};

export default SettingServicePage;
