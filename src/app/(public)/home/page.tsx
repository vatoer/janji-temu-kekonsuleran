import ToggleLocal from "@/components/toggle-locale";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <ToggleLocal />
    </>
  );
};

export default HomePage;
