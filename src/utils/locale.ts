import Cookies from "js-cookie";

// Set user locale in local storage
export function setUserLocale(locale: string): void {
  localStorage.setItem("user-locale", locale);
}

// Get user locale from local storage
export function getUserLocale(): string | null {
  return localStorage.getItem("user-locale");
}

// Set user locale in cookies
export function setUserLocaleCookie(locale: string): void {
  Cookies.set("user-locale", locale, { expires: 365 });
}

// Get user locale from cookies
export function getUserLocaleCookie(): string | undefined {
  console.log(
    `[utils locale] User locale from getUserLocaleCookie : ${Cookies.get(
      "user-locale"
    )}`
  );
  console.log(Cookies.get());
  return Cookies.get("user-locale");
}
