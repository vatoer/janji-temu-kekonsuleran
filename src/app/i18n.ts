import { getDefaultLocale, getSupportedLanguages } from "@/config";
import { promises as fs } from "fs";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import path from "path";

// Default locale

const getLocale = async (): Promise<string> => {
  const cookieStore = cookies();
  let locale = await getDefaultLocale();
  const supportedLanguages = await getSupportedLanguages();
  try {
    const appLocale = cookieStore.get("app-locale");
    if (appLocale) {
      locale = appLocale.value; // Extract the string value from the RequestCookie object
    }
  } catch (error) {
    console.error("Error retrieving user locale:", error);
  }

  if (locale && supportedLanguages.includes(locale)) {
    return locale;
  } else return locale;
};

export default getRequestConfig(async () => {
  const locale = await getLocale();
  const messagesDir = path.resolve(process.cwd(), "messages");
  const messagesPath = path.join(messagesDir, `${locale}.json`);

  console.log(`[i18n] messagesPath: ${messagesPath}`);
  try {
    await fs.access(messagesPath);
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Error loading messages for locale '${locale}':`, error);
    // Optionally, you can return a fallback locale and messages here
    const fallbackMessages = (await import(`../../messages/${locale}.json`))
      .default;
    return {
      locale: locale,
      messages: fallbackMessages,
    };
  }

  // return {
  //   locale,
  //   messages: (await import(`../../messages/${locale}.json`)).default,
  // };
});
