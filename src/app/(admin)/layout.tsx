import AdminSidebarContainer from "./_components/admin-sidebar-container";
import TopBar from "./_components/tobbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-auto min-h-full bg-gray-200">
      <TopBar />
      <div className="flex flex-row pt-[76px] lg:min-h-[calc(100vh-86px)] h-auto w-full">
        <div className="bg-gray-100">
          <AdminSidebarContainer />
        </div>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default PublicLayout;
