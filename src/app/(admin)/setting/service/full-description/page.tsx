import { Editor, Viewer } from "@/components/editor/md-editor";

const mdString = `
<b>Syarat dan Ketentuan</b><div><b><br></b></div><div><b>ghghghgh</b></div><div><b>ghgfh</b></div><div><b><br></b></div><div><b>ghgfhgfhghghgfh</b></div><div><b><a href="ssadsadsad">ssadsadsad</a><br></b></div><div><ol><li><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b><b>ghgfhfghgfhgfh rtreteeretertret&nbsp;</b></li><li><b>dfdsfdsf</b></li><li><b>dsfdsfdsf</b></li><li><b>dsfdsf</b></li><li><b>sdfdsfdsf</b></li><li><b>sdfdsfdsf</b></li><li><b>dsfdsfdsf</b></li><li><b>dsfdsfdsf</b></li><li><b>dsfdsfdsf</b></li><li><b><br></b></li></ol></div><div><b><br></b></div><div><b><br></b></div>`;

const SettingServiceFullDescriptionPage = () => {
  return (
    <div className="w-full lg:min-h-[calc(100vh-86px)] h-auto">
      <h1>Service Full Description</h1>
      <div className="flex flex-col w-full h-full gap-4">
        {/* <Editor /> */}
        {/* <MDViewer /> */}
        <Editor initMdString="# readme" />
        <Viewer mdString={mdString} />
      </div>
    </div>
  );
};

export default SettingServiceFullDescriptionPage;
