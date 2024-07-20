import { getDefaultLocale, getSupportedLanguages } from "@/config";
import { getAppLocaleCookie } from "@/utils/locale";
import { cookies } from "next/headers";
import LanguageSwitcher from "./language-switcher";

const LanguageSwitcherWithCache = async () => {
  const languages = await getSupportedLanguages();
  const defaultLocale =
    cookies().get("app-locale")?.value || (await getDefaultLocale());
  console.log(languages, defaultLocale);
  console.log("LanguageSwitcherWithCache", getAppLocaleCookie());
  return (
    <LanguageSwitcher
      supportedLanguages={languages}
      defaultLocale={defaultLocale}
    />
  );
};

export default LanguageSwitcherWithCache;
