import { auth } from "@/app/(auth)/auth";
import Link from "next/link";
import UserButtonDropdown from "./user-button-dropdown";

const UserButtonDropdownWithSession = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return <Link href="/login">Login</Link>;
  }

  const user = session.user;

  return <UserButtonDropdown user={user} />;
};

export default UserButtonDropdownWithSession;
