"use client";
import { setAppLocale, setAppLocaleCookie } from "@/utils/locale";
import { memo, useState } from "react";
import { DropdownMenu } from "../ui/dropdown-menu";
import { LanguageDropdownContent } from "./languange-dropdown-content";
import { LanguageDropdownTrigger } from "./languange-dropdown-trigger";

interface LanguageSwitcherProps {
  supportedLanguages: string[];
  defaultLocale: string;
}
const LanguageSwitcher = ({
  supportedLanguages,
  defaultLocale,
}: LanguageSwitcherProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLocale);
  const onChange = (language: string) => {
    setAppLocale(language);
    setAppLocaleCookie(language);
    //setCurrentLanguage(language);
    window.location.reload();
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

export default memo(LanguageSwitcher);
