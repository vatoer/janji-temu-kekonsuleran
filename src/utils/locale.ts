import Cookies from "js-cookie";

// Set user locale in local storage
export function setAppLocale(locale: string): void {
  localStorage.setItem("app-locale", locale);
}

// Get user locale from local storage
export function getAppLocale(): string | null {
  return localStorage.getItem("app-locale");
}

// Set user locale in cookies
export function setAppLocaleCookie(locale: string): void {
  Cookies.set("app-locale", locale, { expires: 365 });
}

// Get user locale from cookies
export function getAppLocaleCookie(): string | undefined {
  console.log(
    `[utils locale] User locale from getAppLocaleCookie : ${Cookies.get(
      "app-locale"
    )}`
  );
  console.log(Cookies.get());
  return Cookies.get("app-locale");
}
