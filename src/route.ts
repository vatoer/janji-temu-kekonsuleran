export interface RouteItem {
  name: string;
  label: string;
  href: string;
  iconName?: string;
  permissions?: string[];
  displayOrder?: number;
  displayAsMenu?: boolean;
  cascadePermissions?: boolean; // cascade permissions to sub routes
  subRoutes?: RouteItem[];
}

export const routes: RouteItem[] = [];

export const authRoutes = [
  "/",
  "/login",
  "/logout",
  "/register",
  "/forgot-password",
  "/reset-password",
];

export const publicRoutes = ["/", "/service"];

export const DEFAULT_ROUTE_AFTER_LOGIN = "/home";
export const DEFAULT_ROUTE_AFTER_LOGOUT = "/service";
export const DEFAULT_ROUTE_AFTER_REGISTER = "/login";
export const DEFAULT_ROUTE_AFTER_FORGOT_PASSWORD = "/login";
export const DEFAULT_ROUTE_AFTER_RESET_PASSWORD = "/login";
