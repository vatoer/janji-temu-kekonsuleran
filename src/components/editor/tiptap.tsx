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

import Menu from "./tiptap/menu";

const content = `
<h2>
      Hi there,
    </h2>
    <p>
      this is a basic <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
    `;
interface TiptapProps {
  content?: string;
  editable?: boolean;
}
const Tiptap = ({ content = "", editable = true }: TiptapProps) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    immediatelyRender: false,
    content: content,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base  m-5 focus:outline-none",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <Menu editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
