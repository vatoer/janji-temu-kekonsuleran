"use client";
import { StatusIcon } from "@/components/editor/status-icon";
import Tiptap from "@/components/editor/tiptap";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface TiptapContainerProps {
  language: string;
  serviceId?: string;
  initialContent?: string;
  className?: string;
  editorClassName?: string;
}
const TiptapContainer = ({
  language,
  serviceId,
  initialContent,
  className,
  editorClassName,
}: TiptapContainerProps) => {
  const [status, setStatus] = useState<string | undefined>();
  const handleOnSave = async (content: string) => {
    // save content to database
    console.log("[TiptapContainer handleOnSave]", serviceId);
    console.log(content);
    // const result = await upsertDescription({
    //   serviceId,
    //   translateTo: language,
    //   text: content,
    // });

    // if (result.success) {
    //   setStatus(result.data.status);
    // }

    //console.log(result);
  };
  return (
    <div className={cn("flex flex-col bg-slate-50", className && className)}>
      <div className="w-full justify-end items-end flex pt-0 pr-4">
        <StatusIcon status={status} />
      </div>
      <Tiptap
        onSave={handleOnSave}
        content={initialContent}
        editorClassName={editorClassName}
      />
    </div>
  );
};

export default TiptapContainer;
