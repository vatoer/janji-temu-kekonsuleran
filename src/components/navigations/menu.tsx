import { useTranslations } from "next-intl";

export const Menu = () => {
  const t = useTranslations("Menu");
  return (
    <nav className="text-lg font-semibold">
      <ul className="flex flex-row gap-2">
        <li>
          <a href="/">{t("services")}</a>
        </li>
        <li>
          <a href="/about">{t("about")}</a>
        </li>
        <li>
          <a href="/contact">{t("contact")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
