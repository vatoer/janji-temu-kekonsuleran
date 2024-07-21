"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { RouteItem } from "@/route";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

export interface SidebarItemProps extends RouteItem {
  icon: LucideIcon | IconType;
  collapse?: boolean;
  counter?: number;
}
const SidebarItem = ({
  label,
  icon: Icon,
  href,
  collapse,
  counter,
  displayOrder,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = (pathname === "/" && href === "/") || pathname === href;

  return (
    <Link
      href={href}
      type="button"
      className={cn(
        "relative",
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 w-full",
        isActive &&
          "text-slate-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-3 flex-grow">
        <Icon
          size={22}
          className={cn(
            "hidden md:block text-slate-500",
            isActive && "text-sky-700"
          )}
        />
        <span className={cn(collapse ? "hidden" : "block")}>{label}</span>
      </div>
      {counter && (
        <Badge
          className={cn(
            "bg-gray-400",
            // collapse ? "hidden" : "block")
            collapse ? "absolute top-0 right-0" : "block"
          )}
        >
          {counter.toString()}
        </Badge>
      )}
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-9 transition-all",
          isActive && "opacity-100"
        )}
      />
    </Link>
  );
};

export default SidebarItem;
