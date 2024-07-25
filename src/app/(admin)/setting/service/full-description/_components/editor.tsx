"use client";
import "@/app/custom.css";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useState } from "react";

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6 \n  \n- - -  \n  \n1. First item  \n2. Second item  \n3. Third item  \n  \n  \n**Bold**  \n*Italic*  \n  \n  \n> This is a blockquote  \n  \n  \n\`\`\`javascript  \nfunction test() {  \n  console.log("Hello world!");  \n}  \n\`\`\`  \n  \n  \n\`\`\`css  \nbody {  \n  background: #f0f0f0;  \n}  \n\`\`\`  \n  \n  \n\`\`\`html  \n<!DOCTYPE html>  \n<html>  \n<head>  \n  <title>Test</title>  \n</head>  \n<body>  \n  <h1>Hello world!</h1>  \n</body>  \n</html>  \n\`\`\`  \n  \n  \n\`\`\`bash  \n$ npm install  \n\`\`\`  \n  \n  \n\`\`\`json  \n{  \n  "name": "react-markdown-editor",  \n  "version": "1.0.0"  \n}  \n\`\`\`  \n  \n  \n\`\`\`typescript  \ninterface IProps {  \n  name: string;  \n}  \n\`\`\`  \n  \n  \n\`\`\`java  \npublic class Test {  \n  public static void main(String[] args) {  \n    System.out.println("Hello world!");  \n  }  \n}  \n\`\`\`  \n  \n  \n\`\`\`python  \nprint("Hello world!")  \n\`\`\`  \n  \n  \n\`\`\`markdown  \n# This is a H1  \n## This is a H2  \n###### This is a H6  \n  \n- - -  \n  \n1. First item  \n2. Second item  \n3. Third item  \n  \n  \
`;

export const Editor = () => {
  const [markdown, setMarkdown] = useState(mdStr);

  return (
    <MarkdownEditor
      value={mdStr}
      className="h-full w-full"
      height="75vh"
      onChange={(value, viewUpdate) => setMarkdown(value)}
    />
  );
};

export const MDViewer = () => {
  const [markdown, setMarkdown] = useState(mdStr);

  return <MarkdownEditor.Markdown source={mdStr} className="w-full h-full" />;
};

export default Editor;
