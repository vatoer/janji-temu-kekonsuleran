export const GroupSyarat = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-disc list-inside flex flex-col gap-2 p-2">
      {children}
    </ul>
  );
};

export default GroupSyarat;
