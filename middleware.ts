import { locales } from "./i18n";
import { localePrefix } from "./utils/navigation";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.nextUrl.pathname.split("/")[1];

  request.headers.set("x-lang-url", defaultLocale);

  const handleI18nRouting = createIntlMiddleware({
    defaultLocale: "en",
    localePrefix,
    locales,
  });

  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
