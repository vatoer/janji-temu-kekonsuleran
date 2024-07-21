import TopBar from "./_components/tobbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-auto min-h-full bg-gray-200">
      <TopBar />
      <div className="flex flex-row pt-[76px] lg:min-h-[calc(100vh-86px)] h-auto">
        <div className="bg-gray-500">admin sidebar</div>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default PublicLayout;
