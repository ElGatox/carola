import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

export const middleware = (request) => {};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

let locales = ["en-US", "es"];

function getLocale(request) {
  const preferredLanguage = request.cookies.get("preferredLanguage")?.value;

  let headers = { "accept-language": request.headers.get("accept-language") };

  let languages = new Negotiator({ headers }).languages();

  let defaultLocale = "en-US";

  if (!!preferredLanguage) languages = preferredLanguage;

  return match(languages, locales, defaultLocale);
}
function withLocaleMiddleware(func) {
  return (request) => {
    const { pathname } = request.nextUrl;

    const preferredLanguage = getLocale(request);

    const pathnameHasLocale = locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );
    const hasPreferredLanguage = locales.some(
      (locale) =>
        pathname.startsWith(`/${preferredLanguage}/`) ||
        pathname === `/${preferredLanguage}`,
    );

    if (pathnameHasLocale && hasPreferredLanguage) return func(request);

    const locale = preferredLanguage;

    request.nextUrl.pathname = `/${locale}${pathname}`;

    if (pathnameHasLocale && !hasPreferredLanguage) {
      let partialPath = pathname.split("/");

      partialPath[1] = preferredLanguage;

      const newPath = partialPath.reduce((acc, curr) => acc + "/" + curr);

      request.nextUrl.pathname = newPath;
    }

    return NextResponse.redirect(request.nextUrl);
  };
}
