import { DropdownMenuTrigger } from "@components/ui/dropdown-menu";
import { memo } from "react";
import LanguageFlag from "./language-flag";

interface LanguageDropdownTriggerProps {
  currentLanguage: string;
}

export const LanguageDropdownTrigger = ({
  currentLanguage,
}: LanguageDropdownTriggerProps) => {
  return (
    <DropdownMenuTrigger className="flex items-center gap-x-2 outline-none">
      <div className="flex flex-row items-center">
        <LanguageFlag language={currentLanguage} />
        <span>{currentLanguage}</span>
      </div>
    </DropdownMenuTrigger>
  );
};

export default memo(LanguageDropdownTrigger);
