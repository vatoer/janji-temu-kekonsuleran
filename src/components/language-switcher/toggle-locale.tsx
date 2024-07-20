"use client";
import { setAppLocale, setAppLocaleCookie } from "@/utils/locale";

const ToggleLocal = () => {
  const handleChangeLocale = (locale: string) => {
    // set cache locale
    // Update local storage
    setAppLocale(locale);
    setAppLocaleCookie(locale);
    window.location.reload();
  };
  return (
    <div>
      <button
        onClick={() => {
          handleChangeLocale("en");
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          handleChangeLocale("id");
        }}
      >
        Bahasa
      </button>
      <button
        onClick={() => {
          handleChangeLocale("fr");
        }}
      >
        French
      </button>
    </div>
  );
};

export default ToggleLocal;
