import Navbar from "./_components/navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-auto justify-center bg-gray-200">
      <div className="lg:w-2/3 bg-gray-100 flex flex-col">
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PublicLayout;
