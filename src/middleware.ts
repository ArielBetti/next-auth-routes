// next-auth
export { default } from "next-auth/middleware";

// ::
export const config = {
  matcher: ["/auth/profile", "/auth/kitty", "/auth/about"],
};
