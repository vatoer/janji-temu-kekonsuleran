export const ItemSyarat = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-1 text-justify flex flex-row gap-2">
      <div>-</div>
      <div>{children}</div>
    </div>
  );
};

export default ItemSyarat;
