"use client";
import { setUserLocale, setUserLocaleCookie } from "@/utils/locale";

const ToggleLocal = () => {
  const handleChangeLocale = (locale: string) => {
    // set cache locale
    // Update local storage
    setUserLocale(locale);
    setUserLocaleCookie(locale);
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
