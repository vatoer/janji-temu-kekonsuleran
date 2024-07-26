"use client";
import { upsertDescription } from "@/actions/services/description";
import { StatusIcon } from "@/components/editor/status-icon";
import Tiptap from "@/components/editor/tiptap";
import { useState } from "react";

interface TiptapContainerProps {
  language: string;
  serviceId: string;
  initialContent?: string;
}
const TiptapContainer = ({
  language,
  serviceId,
  initialContent,
}: TiptapContainerProps) => {
  const [status, setStatus] = useState<string | undefined>();
  const handleOnSave = async (content: string) => {
    // save content to database
    console.log("[TiptapContainer handleOnSave]", serviceId);
    console.log(content);
    const result = await upsertDescription({
      serviceId,
      translateTo: language,
      text: content,
    });

    if (result.success) {
      setStatus(result.data.status);
    }

    console.log(result);
  };
  return (
    <div className="flex flex-col">
      <div className="w-full justify-end items-end flex pt-4 pr-4">
        <StatusIcon status={status} />
      </div>
      <Tiptap onSave={handleOnSave} content={initialContent} />
    </div>
  );
};

export default TiptapContainer;
