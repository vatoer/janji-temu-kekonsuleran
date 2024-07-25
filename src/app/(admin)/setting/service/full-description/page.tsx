import { Editor, Viewer } from "@/components/editor/md-editor";

const SettingServiceFullDescriptionPage = () => {
  return (
    <div className="w-full lg:min-h-[calc(100vh-86px)] h-auto">
      <h1>Service Full Description</h1>
      <div className="flex flex-col w-full h-full gap-4">
        {/* <Editor /> */}
        {/* <MDViewer /> */}
        <Editor initMdString="# readme" />
        <Viewer mdString="# readme" />
      </div>
    </div>
  );
};

export default SettingServiceFullDescriptionPage;
