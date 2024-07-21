"use client";
import { iconMap } from "@/components/icon-map";
import useToggleSidebar from "@/hooks/use-toggle-sidebar";
import { RouteItem } from "@/route";
import Sidebar from "@components/navigations/sidebar";
import SidebarItem from "@components/navigations/sidebar-item";
import { AlertCircle, AlertTriangle } from "lucide-react";

interface SidebarProps {
  routes: RouteItem[];
}
export const AdminSidebar = ({ routes }: SidebarProps) => {
  const { collapse, setCollapse } = useToggleSidebar();

  return (
    <Sidebar collapse={collapse}>
      <div>
        {routes.map((route, index) => {
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
    </Sidebar>
  );
};

export default AdminSidebar;
