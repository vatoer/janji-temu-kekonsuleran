interface TextareaTranslationProps {
  name: string; // column name
  value?: string | null;
  reference: string; // reference id
  placeholder?: string | null;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void; // Updated to accept an event parameter
}
const TextareaTranslation = ({
  name,
  value,
  reference,
  placeholder,
  onBlur,
}: TextareaTranslationProps) => {
  const id = `${name}-${reference}`;
  // Updated onBlur handler to pass the event to the parent component
  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur?.(event); // Call the onBlur prop with the event if onBlur is provided
  };
  return (
    <textarea
      value={value ?? ""}
      className="form-control p-1"
      id={id}
      onBlur={handleBlur}
      placeholder={placeholder ?? ""}
    />
  );
};

export default TextareaTranslation;
