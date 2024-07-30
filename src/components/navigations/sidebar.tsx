import { cn } from "@/lib/utils";

interface SidebarPorps {
  collapse?: boolean;
  children: React.ReactNode;
  className?: string;
}
const Sidebar = ({ collapse, children, className }: SidebarPorps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-32 md:w-44 lg:w-56 ",
        collapse ? "hidden md:block md:w-16 lg:w-16" : "w-32 md:w-44 lg:w-56",
        className && className
      )}
    >
      {children}
    </div>
  );
};

export default Sidebar;
