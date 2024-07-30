import { RouteItem } from "@/route";
import AdminSidebar from "./admin-sidebar";

const AdminSidebarContainer = () => {
  const routes: RouteItem[] = [
    {
      name: "beranda",
      label: "Beranda",
      href: "/home",
      iconName: "HomeIcon",
      displayOrder: 1,
      displayAsMenu: true,
    },
    {
      name: "pengguna",
      label: "Pengguna",
      href: "/user",
      iconName: "Use",
      displayOrder: 2,
      displayAsMenu: true,
    },
    {
      name: "pengaturan",
      label: "Pengaturan",
      href: "#",
      iconName: "Cog",
      displayOrder: 3,
      displayAsMenu: true,
      subRoutes: [
        {
          name: "pengaturan-profil",
          label: "profil",
          href: "/setting/profile",
          iconName: "User",
          displayOrder: 1,
          displayAsMenu: true,
        },
        {
          name: "pengaturan-akun",
          label: "Akun",
          href: "/setting/account",
          iconName: "User",
          displayOrder: 2,
          displayAsMenu: true,
        },
        {
          name: "pengaturan-otifikasi",
          label: "Notifikasi",
          href: "/setting/notification",
          iconName: "Bell",
          displayOrder: 3,
          displayAsMenu: true,
        },
        {
          name: "pengaturan-layanan",
          label: "layanan",
          href: "/setting/service",
          iconName: "Lock",
          displayOrder: 4,
          displayAsMenu: true,
        },
      ],
    },
  ];
  return (
    <div
      className="flex flex-col min-h-[calc(100vh-76px)] h-auto overflow-y-auto overflow-x-hidden
    bg-gray-100 "
    >
      <AdminSidebar routes={routes} />
    </div>
  );
};

export default AdminSidebarContainer;
