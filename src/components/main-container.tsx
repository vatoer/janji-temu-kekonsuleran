"use client";

import useToggleSidebar from "@/hooks/use-toggle-sidebar";
import { cn } from "@/lib/utils";

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { collapse, setCollapse } = useToggleSidebar();

  return (
    <div
      className={cn(
        "flex-1",
        collapse ? "ml-16 md:ml-16 lg:ml-16" : "ml-32 md:ml-44 lg:ml-56"
      )}
    >
      {children}
    </div>
  );
};

export default MainContainer;
