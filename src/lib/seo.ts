import seoConfig from "../data/seoRoutes.json";

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const siteUrl = seoConfig.siteUrl;
export const siteName = seoConfig.siteName;
export const defaultSeoImage = seoConfig.defaultImage;
export const defaultSeoImageAlt = seoConfig.defaultImageAlt;
export const routeSeo: RouteSeo[] = seoConfig.routes;

export function normalizePath(pathname: string) {
  if (pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
}

export function getSeoForPath(pathname: string) {
  const normalizedPath = normalizePath(pathname);
  return (
    routeSeo.find((item) => item.path === normalizedPath) ??
    routeSeo.find((item) => item.path === "/")!
  );
}

export function absoluteRouteUrl(pathname: string) {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/" ? `${siteUrl}/` : `${siteUrl}${normalizedPath}`;
}

export function seoImageFor(route: RouteSeo) {
  return route.image ?? defaultSeoImage;
}

export function seoImageAltFor(route: RouteSeo) {
  return route.imageAlt ?? defaultSeoImageAlt;
}
