import { FormService } from "./_components/form";

const CreateNewServicePage = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl p-4 w-full">Layanan Baru</h1>
      <div className="pb-36 relative">
        <FormService />
      </div>
    </div>
  );
};

export default CreateNewServicePage;
