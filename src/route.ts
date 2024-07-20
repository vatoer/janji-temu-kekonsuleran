export const authRoutes = [
  "/",
  "/login",
  "/logout",
  "/register",
  "/forgot-password",
  "/reset-password",
];

export const publicRoutes = ["/", "/service"];

export const DEFAULT_ROUTE_AFTER_LOGIN = "/booked-service";
export const DEFAULT_ROUTE_AFTER_LOGOUT = "/service";
export const DEFAULT_ROUTE_AFTER_REGISTER = "/login";
export const DEFAULT_ROUTE_AFTER_FORGOT_PASSWORD = "/login";
export const DEFAULT_ROUTE_AFTER_RESET_PASSWORD = "/login";
