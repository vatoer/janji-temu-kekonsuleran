import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@components/ui/dropdown-menu";
import React, { memo } from "react";
import { LanguageFlag } from "./language-flag";

interface LanguageDropdownContentProps {
  supportedLanguages: string[];
  onChange: (language: string) => void;
}

export const LanguageDropdownContent: React.FC<
  LanguageDropdownContentProps
> = ({ supportedLanguages, onChange }) => {
  return (
    <DropdownMenuContent align="end">
      {supportedLanguages.map((language) => (
        <DropdownMenuItem
          key={language}
          className="hover:cursor-pointer"
          onSelect={() => onChange(language)}
        >
          <LanguageFlag language={language} />
          {language}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  );
};

export default memo(LanguageDropdownContent);
