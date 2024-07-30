import MainContainer from "@/components/main-container";
import AdminSidebarContainer from "./_components/admin-sidebar-container";
import TopBar from "./_components/tobbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-auto min-h-full bg-gray-200 ">
      <TopBar />
      <div className="flex flex-row pt-[76px] lg:min-h-[calc(100vh-86px)] h-auto w-full">
        <div className="fixed bg-gray-100">
          <AdminSidebarContainer />
        </div>
        {/* <main className="ml-32 md:ml-44 lg:ml-56 flex-1">{children}</main> */}
        <MainContainer>{children}</MainContainer>
      </div>
    </div>
  );
};

export default PublicLayout;
