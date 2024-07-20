"use server";

export const getSupportedLanguages = async () => {
  const SUPPORTED_LANGUAGES = (process.env.SUPPORTED_LANGUAGES ?? "id").split(
    ","
  );
  return SUPPORTED_LANGUAGES;
};

export const getDefaultLocale = async () => {
  const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE ?? "id";
  return DEFAULT_LOCALE;
};
