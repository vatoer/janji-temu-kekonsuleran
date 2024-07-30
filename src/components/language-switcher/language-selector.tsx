"use client";
import { useTranslateTo } from "@/hooks/use-translate-to";
import { memo, useEffect } from "react";
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
  // const [currentLanguage, setCurrentLanguage] = useState(defaultLocale);

  const { language, setlanguage } = useTranslateTo();
  //setlanguage(defaultLocale);
  useEffect(() => {
    setlanguage(defaultLocale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultLocale]);

  const onChange = (language: string) => {
    console.log("language", language);
    // setCurrentLanguage(language);
    // localStorage.setItem("translate-to", language);
    setlanguage(language);
  };
  return (
    <DropdownMenu>
      <LanguageDropdownTrigger currentLanguage={language} />
      <LanguageDropdownContent
        supportedLanguages={supportedLanguages}
        onChange={onChange}
      />
    </DropdownMenu>
  );
};

export default memo(LanguageSelector);
