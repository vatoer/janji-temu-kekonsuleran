"use client";
import "@/app/custom.css";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MdEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

interface EditorProps {
  initMdString: string;
  onBlur?: (mdString: string) => void;
}

export const Editor = ({ initMdString, onBlur }: EditorProps) => {
  const [markdown, setMarkdown] = useState(initMdString);

  const handleOnChange = (value: string, viewUpdate: any) => {
    setMarkdown(value);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    //console.log(event.target);
    //console.log("Current value on blur:", markdown);
    onBlur && onBlur(markdown);
  };
  return (
    <div className="w-full" data-color-mode="light">
      <MdEditor
        className="h-full w-full text-sm"
        height="75vh"
        value={initMdString}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        enableScroll={false}
      />
    </div>
  );
};

interface ViewerProps {
  mdString: string;
}
export const Viewer = ({ mdString }: ViewerProps) => {
  return (
    <MarkdownEditor.Markdown source={mdString} className="w-full h-full" />
  );
};

export default Editor;
