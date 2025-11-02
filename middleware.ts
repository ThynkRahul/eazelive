import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import packageData from "./data/en/packages.json";

const locales = ["en", "fr", "de", "es"];
const defaultLocale = "en";

// Regex to match static/public files
const PUBLIC_FILE = /\.(.*)$/;

function getLocaleFromPath(path: string) {
  const parts = path.split("/");
  if (parts.length > 1 && locales.includes(parts[1])) {
    return parts[1];
  }
  return null;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow all static/public files to pass through
  if (PUBLIC_FILE.test(pathname) || pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return NextResponse.next();
  }

  // Check if URL already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect to default locale if missing BUT allow root "/" to be default english
if (!pathnameHasLocale && pathname !== "/") {
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

  // Get locale from path
  const locale = getLocaleFromPath(pathname);

  // Handle package redirects
  if (pathname.startsWith(`/${locale}/packages`)) {
    const packagePathReplaced = pathname.replace(`/${locale}/packages/`, "");
    const packageId = parseInt(packagePathReplaced);

    // Redirect based on package ID
    if (!Number.isNaN(packageId) && packageId > 0 && packageId < 52) {
      const tourPackage = packageData.find(p => p.Id === packageId);
      if (tourPackage && tourPackage.Uri) {
        return NextResponse.redirect(new URL(`/${locale}/packages/${tourPackage.Uri}`, req.url), {
          status: 308,
        });
      }
    }

    // Redirect special package slugs
    const packageRedirects: Record<string, string> = {
      "wildlife-tours": "wildlife-safari-tour-package-india",
      "tribals-tours": "gujarat-tribal-tour-package-india",
      "luxury-trains": "",
    };

    const slug = pathname.split("/").pop();
    if (slug && packageRedirects[slug] !== undefined) {
      const redirectPath = packageRedirects[slug]
        ? `/${locale}/packages/${packageRedirects[slug]}`
        : `/${locale}/packages`;
      return NextResponse.redirect(new URL(redirectPath, req.url), { status: 308 });
    }
  }

  // Continue to requested page
  return NextResponse.next();
}

// Apply middleware to all routes except Next.js internals
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
