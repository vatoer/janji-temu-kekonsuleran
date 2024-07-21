"use client";
import { memo, useState } from "react";
import { DropdownMenu } from "../ui/dropdown-menu";
import { LanguageDropdownContent } from "./languange-dropdown-content";
import { LanguageDropdownTrigger } from "./languange-dropdown-trigger";

interface LanguageSelectorProps {
  supportedLanguages: string[];
  defaultLocale: string;
}
const LanguageSelector = ({
  supportedLanguages,
  defaultLocale,
}: LanguageSelectorProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLocale);
  const onChange = (language: string) => {
    console.log("language", language);
  };
  return (
    <DropdownMenu>
      <LanguageDropdownTrigger currentLanguage={currentLanguage} />
      <LanguageDropdownContent
        supportedLanguages={supportedLanguages}
        onChange={onChange}
      />
    </DropdownMenu>
  );
};

export default memo(LanguageSelector);
