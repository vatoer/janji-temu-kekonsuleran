import LanguageSwitcherWithCache from "@/components/language-switcher/language-switcher-with-cache";
import UserButtonDropdownWithSession from "@/components/user-button-dropdown-with-session";

const Navbar = async () => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">Navbar</div>
        <div className="flex space-x-4 items-center">
          <LanguageSwitcherWithCache />
          <UserButtonDropdownWithSession />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
