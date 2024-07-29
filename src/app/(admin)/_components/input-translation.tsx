import { useEffect, useRef, useState } from "react";

interface InputTranslationProps {
  name: string; // column name
  value: string | null;
  reference: string; // reference id
  placeholder?: string | null;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement>,
    value: string | null
  ) => void; // Updated to accept an event and value parameter
}

const InputTranslation = ({
  name,
  value = "", // Default to an empty string if value is not provided
  reference,
  placeholder,
  onBlur,
}: InputTranslationProps) => {
  const [inputValue, setInputValue] = useState(value);
  const id = `${name}-${reference}`;

  useEffect(() => {
    setInputValue(value ?? ""); // Update state when value prop changes
  }, [value]);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event, inputValue); // Call the onBlur prop with the event and current input value
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <input
      type="text"
      className="form-control p-1"
      id={id}
      onBlur={handleBlur}
      placeholder={placeholder ?? ""}
      ref={inputRef}
      value={inputValue ?? ""} // Ensure value is always a string
      onChange={handleChange}
    />
  );
};

export default InputTranslation;
