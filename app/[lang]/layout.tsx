// app/[lang]/layout.tsx
import React, { Suspense } from "react";
import type { Metadata } from "next";

import CanonicalURL from "../../components/CanonicalURL"; // assume server safe
import Footer from "../../components/Footer"; // if client-only, we'll dynamic import below
import dynamic from "next/dynamic";
//import NavSwitcher from "../../components/NavSwitcher"; // small client component we will add

// Dynamic imports for known client-only components (ssr: false ensures they load on client only)
const CookieConsentBanner = dynamic(() => import("../../components/CookieConsentBanner"), {
  ssr: false,
});
const GoogleAnalytics = dynamic(() => import("../../components/GoogleAnalytics"), {
  ssr: false,
});
const GTMAnalytics = dynamic(() => import("../../components/gtmComponent"), {
  ssr: false,
});
const VercelAnalytics = dynamic(() => import("@vercel/analytics/react").then(m => m.Analytics), {
  ssr: false,
});
const SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then(m => m.SpeedInsights), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Eaze Tours",
  description: "Explore incredible India with Eaze Tours",
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;

  return (
    <html lang={lang}>
      <body>
        <CanonicalURL />
        {/* NavSwitcher is a client component that will use `usePathname()` to decide LandingNavBar vs NavBar */}
        <NavSwitcher locale={lang} />

        <main>{children}</main>

        {/* Footer can be server or client — if client-only, dynamic import above */}
        <Footer locale={lang} />

        {/* Client-only analytics & consent */}
        <VercelAnalytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <CookieConsentBanner />

        <Suspense>
          <GTMAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
