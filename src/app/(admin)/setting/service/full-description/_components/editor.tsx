"use client";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useState } from "react";

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;

export const Editor = () => {
  const [markdown, setMarkdown] = useState(mdStr);

  return (
    <MarkdownEditor
      value={mdStr}
      className="w-full h-full"
      onChange={(value, viewUpdate) => setMarkdown(value)}
    />
  );
};

export const MDViewer = () => {
  const [markdown, setMarkdown] = useState(mdStr);

  return <MarkdownEditor.Markdown source={mdStr} className="w-full h-full" />;
};

export default Editor;
