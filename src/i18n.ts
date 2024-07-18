import { getRequestConfig } from "next-intl/server";

// Default locale
const DEFAULT_LOCALE = "id";
// Can be imported from a shared config
const supportedLocales = ["en", "fr", "id"];

// In-memory cache object
const cache: { [key: string]: any } = {};

// Function to set the locale in the cache
function setLocale(locale: string) {
  cache["locale"] = locale;
}

// Function to read the locale from the cache
function getLocale(): string {
  let locale = cache["locale"];

  // Check if the locale is set in the cache
  if (!locale) {
    console.warn("Locale not found in cache. Using default locale.");
    locale = DEFAULT_LOCALE;
  }

  // Validate the locale
  if (!supportedLocales.includes(locale)) {
    console.error(
      `Invalid locale '${locale}' found in cache. Using default locale.`
    );
    locale = DEFAULT_LOCALE;
  }

  return locale;
}

export default getRequestConfig(async () => {
  // Validate that the incoming `locale` parameter is valid

  const locale = getLocale();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
