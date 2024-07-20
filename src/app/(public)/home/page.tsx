import { auth } from "@/app/(auth)/auth";
import ToggleLocal from "@/components/toggle-locale";
import UserButtonDropdown from "@/components/user-button-dropdown";
import { getTranslations } from "next-intl/server";

const HomePage = async () => {
  const session = await auth();
  let user = { name: "John Doe" };
  if (session && session.user) {
    user.name = session.user.name!;
  }

  const t = await getTranslations("Login");

  return (
    <>
      <h1>{t("title")}</h1>
      <ToggleLocal />
      <UserButtonDropdown user={user} />
    </>
  );
};

export default HomePage;
