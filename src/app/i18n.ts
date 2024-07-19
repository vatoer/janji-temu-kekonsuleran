import { promises as fs } from "fs";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import path from "path";

// Default locale
export const DEFAULT_LOCALE = "id";
// Can be imported from a shared config
export const supportedLocales = ["en", "fr", "id"];

// Function to get the locale
const getLocale = (): string => {
  const cookieStore = cookies();
  let locale = DEFAULT_LOCALE;
  try {
    const userLocale = cookieStore.get("user-locale");
    if (userLocale) {
      locale = userLocale.value; // Extract the string value from the RequestCookie object
    }
  } catch (error) {
    console.error("Error retrieving user locale:", error);
  }

  if (locale && supportedLocales.includes(locale)) {
    return locale;
  } else return DEFAULT_LOCALE;
};

export default getRequestConfig(async () => {
  const locale = getLocale();
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
    const fallbackMessages = (
      await import(`../../messages/${DEFAULT_LOCALE}.json`)
    ).default;
    return {
      locale: DEFAULT_LOCALE,
      messages: fallbackMessages,
    };
  }

  // return {
  //   locale,
  //   messages: (await import(`../../messages/${locale}.json`)).default,
  // };
});
