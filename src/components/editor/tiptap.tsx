"use client";

// import Blockquote from "@tiptap/extension-blockquote";
// import BulletList from "@tiptap/extension-bullet-list";
// import Document from "@tiptap/extension-document";
// import ListItem from "@tiptap/extension-list-item";
// import Paragraph from "@tiptap/extension-paragraph";
// import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { cn } from "@/lib/utils";
import Menu from "./tiptap/menu";

interface TiptapProps {
  content?: string;
  editable?: boolean;
  onSave?: (content: string) => void;
  editorClassName?: string;
}
const Tiptap = ({
  content = "",
  editable = true,
  onSave,
  editorClassName,
}: TiptapProps) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    immediatelyRender: false,
    content: content,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base m-2 focus:outline-none max-w-none",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <Menu editor={editor} onSave={onSave} />
      <EditorContent
        editor={editor}
        className={cn(
          "bg-white mx-2 mt-2 max-w-screen",
          editorClassName && editorClassName
        )}
      />
    </>
  );
};

export default Tiptap;
