"use client";
import { iconMap } from "@/components/icon-map";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { RouteItem } from "@/route";
import { AlertCircle, AlertTriangle, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons/lib";
import SidebarItem from "./sidebar-item";

const isSubRouteActive = (
  subRoutes: RouteItem[],
  pathname: string
): Boolean => {
  return subRoutes.some((route) => {
    if (route.href === pathname) {
      return true;
    }

    if (route.subRoutes) {
      return isSubRouteActive(route.subRoutes, pathname);
    }

    return false;
  });
};

export interface SidebarItemGroupProps extends RouteItem {
  icon: LucideIcon | IconType;
  collapse?: boolean;
  counter?: number;
}
const SidebarItemGroup = ({
  label,
  icon: Icon,
  href,
  collapse,
  counter,
  displayOrder,
  subRoutes: routes,
}: SidebarItemGroupProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (routes && isSubRouteActive(routes, pathname));
  const [isExpanded, setIsExpanded] = useState(isActive);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <Link
        onClick={handleToggle}
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
            "ml-auto border-2 h-9 transition-all border-sky-700",
            isActive && "opacity-30",
            isActive && !isExpanded && "opacity-100"
          )}
        />
      </Link>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          "bg-slate-200 mx-1",
          isActive && "bg-sky-200/20",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          "overflow-hidden"
        )}
      >
        {routes &&
          routes.map((route, index) => {
            const Icon = route.iconName
              ? iconMap[route.iconName] || AlertCircle
              : AlertTriangle; // Map the icon string to the actual icon component

            return (
              <SidebarItem
                key={index}
                icon={Icon}
                {...route}
                collapse={collapse}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SidebarItemGroup;
