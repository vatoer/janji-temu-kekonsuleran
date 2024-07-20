//SUPPORTED_LANGUAGE_FLAGS="🇮🇩,🇬🇧,🇫🇷"
export const LanguageFlag = ({ language }: { language: string }) => {
  let flag = "";
  switch (language) {
    case "id":
      flag = "🇮🇩";
      break;
    case "en":
      flag = "🇬🇧";
      break;
    case "fr":
      flag = "🇫🇷";
    default:
      break;
  }
  console.log("flag", flag, language);
  return <span className="mr-1">{flag}</span>;
};

export default LanguageFlag;
