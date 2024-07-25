import Editor from "./_components/editor";

const SettingServiceFullDescriptionPage = () => {
  return (
    <div className="w-full lg:min-h-[calc(100vh-86px)] h-auto">
      <h1>Service Full Description</h1>
      <div className="flex flex-row w-full h-full">
        <Editor />
        {/* <MDViewer /> */}
      </div>
    </div>
  );
};

export default SettingServiceFullDescriptionPage;
