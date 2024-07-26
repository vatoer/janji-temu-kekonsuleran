import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Editor } from "@tiptap/react";
import { Bold, Italic, List, Save, Underline } from "lucide-react";

interface MenuProps {
  editor: Editor;
}
const Menu = ({ editor }: MenuProps) => {
  return (
    <div className="menu flex px-2">
      <Button variant={"outline"}>
        <Save className="w-4 h-4" />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(editor.isActive("bold") ? "bg-gray-300" : "")}
      >
        <Bold className="w-4 h-4" />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(editor.isActive("italic") ? "is-active" : "")}
      >
        <Italic className="w-4 h-4" />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={cn(editor.isActive("underline") ? "is-active" : "")}
      >
        <Underline className="w-4 h-4" />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(editor.isActive("bulletList") ? "is-active" : "")}
      >
        <List className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Menu;
