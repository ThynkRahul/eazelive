// app/layout.tsx
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import type { Metadata } from "next";
import Script from "next/script";
import React from "react";
import logo from "../public/images/logo.png";

/**
 * Root-level layout (Server Component)
 * - Contains global CSS, fonts, GTM bootstrap, JSON-LD, and dynamic client imports
 * - Keep this file as a server component (NO "use client")
 */

export const metadata: Metadata = {
  title: "Eaze Tours",
  description: "Making your Indian journey easy.",
  verification: {
    google: "6LAck0ASlqXJ_cAT0c3qjx9-cQmgC1y0rMnJo11P7DU",
  },
};

const GTM_ID = "GTM-K4N7X8MK";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // structured data moved to root
  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eaze Tours",
    url: "https://www.eazetours.com/",
    logo: logo.src,
    alternateName: "Eaze Tours",
    sameAs: [
      "https://www.facebook.com/eazetour/",
      "https://www.instagram.com/eazetourpackages/",
      "https://www.pinterest.com/eazetourpackages/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {/* Consent Mode (before GTM) */}
        <Script
          id="consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              // Default (privacy first)
              gtag('consent', 'default', {
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted'
              });
            `,
          }}
        />

        {/* GTM loader (after interactive): bootstraps GTM */}
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

        {/* JSON-LD */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
        />

        {/* The rest of UI is provided by nested layouts/pages */}
        {children}

        {/* noscript GTM fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
