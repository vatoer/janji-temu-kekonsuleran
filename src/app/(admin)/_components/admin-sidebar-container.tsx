import AdminSidebar from "./admin-sidebar";

const AdminSidebarContainer = () => {
  const routes = [
    {
      name: "home",
      label: "Home",
      href: "/home",
      iconName: "HomeIcon",
      displayOrder: 1,
      displayAsMenu: true,
    },
    {
      name: "user",
      label: "User",
      href: "/user",
      iconName: "Use",
      displayOrder: 2,
      displayAsMenu: true,
    },
    {
      name: "setting",
      label: "Setting",
      href: "/setting",
      iconName: "Cog",
      displayOrder: 3,
      displayAsMenu: true,
    },
  ];
  return (
    <div
      className="flex flex-col min-h-[calc(100vh-76px)] h-auto overflow-y-auto overflow-x-hidden
    bg-gray-100"
    >
      <AdminSidebar routes={routes} />
    </div>
  );
};

export default AdminSidebarContainer;
