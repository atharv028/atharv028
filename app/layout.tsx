import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { generateMetadata, generateStructuredData } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        
        {/* Google tag (gtag.js) - Enhanced for Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E0Q34XEYRN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Enhanced GA4 configuration
              gtag('config', 'G-E0Q34XEYRN', {
                page_title: 'Atharv Tare - Portfolio',
                page_location: window.location.href,
                custom_map: {
                  'custom_parameter_1': 'component_name',
                  'custom_parameter_2': 'section_name',
                  'custom_parameter_3': 'action_type'
                },
                send_page_view: true,
                anonymize_ip: true,
                allow_google_signals: true,
                allow_ad_personalization_signals: false
              });
              
              // Track page load time
              gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(performance.now())
              });
              
              // Track user engagement
              gtag('event', 'user_engagement', {
                engagement_time_msec: 0
              });
            `,
          }}
        />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      </head>
      
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
