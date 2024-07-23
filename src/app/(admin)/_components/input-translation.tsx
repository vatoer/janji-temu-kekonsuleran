interface InputTranslationProps {
  name: string; // column name
  value?: string | null;
  reference: string; // reference id
  placeholder?: string | null;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // Updated to accept an event parameter
}
const InputTranslation = ({
  name,
  value,
  reference,
  placeholder,
  onBlur,
}: InputTranslationProps) => {
  const id = `${name}-${reference}`;
  // Updated onBlur handler to pass the event to the parent component
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event); // Call the onBlur prop with the event if onBlur is provided
  };
  return (
    <input
      type="text"
      className="form-control p-1"
      id={id}
      onBlur={handleBlur}
      placeholder={placeholder ?? ""}
      value={value ?? ""}
    />
  );
};

export default InputTranslation;
