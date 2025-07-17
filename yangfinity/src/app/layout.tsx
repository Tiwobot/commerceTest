import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import { CartProvider } from '../../components/cart/CartContext';
import Script from 'next/script';
import { ClerkProvider } from "@clerk/nextjs";

// GeistSans already provides a .variable and .className for Tailwind/Next.js

export const metadata = {
  title: "Yangfinity - Buy Metin2 Yang for Gameforge, Private & Mobile Servers",
  description: "Buy Yang for Metin2 Gameforge (West, East, TR), Private, and Mobile servers. Fast delivery for Eostre, Teutonia, Germania, Europe, Tigerghost, Ruby Chimera, Emerald Aurora, Iberia, Italy, Azrael, Onyx Obsidian, Elveron, Alturi2, Merlis, Helios2, Levia, Rubinum and more.",
  keywords: [
    "Metin2 Yang", "Metin2", "Yang", "Won", "Gameforge", "Gameforge West", "Gameforge East", "Gameforge TR",
    "Private Servers", "Mobile Metin2", "Eostre", "Teutonia", "Germania", "Europe", "Tigerghost",
    "Ruby Chimera", "Emerald Aurora", "Iberia", "Italy", "Azrael", "Onyx Obsidian", "Willow", "Ruby Kirin",
    "Cesko", "Magyarorszag", "Polska", "Romania", "Tara Romanesca", "Greece", "Arabia", "Zephyr",
    "Ruby Lucifer", "Onyx Bazalt", "Emerald Alesta", "Ruby Charon", "Anadolu", "Arkadaslar", "Bagjanamu",
    "Barbaros", "Dandanakan", "Ezel", "Alturi2", "Elveron", "Kerion", "NewMt2", "Solis2", "Rubinum Saphirus",
    "Merlis", "Lucerna Laetus", "Levia", "Celestial World", "Notorius2", "Pegasus2", "Fortis2", "Helios2",
    "M2Classic", "Shiva", "Azyrah", "Rubinum", "Zenit", "Royale", "Mobile2 Tuva", "Mobile2 Tramola", "Mobile2 Alesta"
  ].join(", ")
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <ClerkProvider>
      <html lang={locale}>
        <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/yangfinity-logo-notext.png" type="image/png" sizes="32x32" />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://yangfinity.com/" />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="/yangfinity-logo-notext.png" />
          <meta property="og:url" content="https://yangfinity.com/" />
          <meta property="og:site_name" content="Yangfinity" />
          <meta property="og:type" content="website" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content="/yangfinity-logo-notext.png" />
          {/* JSON-LD Structured Data */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Yangfinity',
            url: 'https://yangfinity.com/',
            logo: '/yangfinity-logo-notext.png',
            sameAs: [
              'https://www.facebook.com/',
              'https://twitter.com/',
              'https://www.instagram.com/'
            ]
          }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Yangfinity',
            url: 'https://yangfinity.com/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://yangfinity.com/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }) }} />
          {/* Google Analytics (GA4) */}
          <Script id="ga-script" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');`}
          </Script>
        </head>
        <body className={`${GeistSans.variable} antialiased font-sans bg-neutral-50 text-black dark:bg-neutral-900 dark:text-white`}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <CartProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </CartProvider>
            {/*Start of Tawk.to Script*/}
            <Script
              id="tawkto"
              strategy="afterInteractive"
              src="https://embed.tawk.to/6873746206a5dd1916716ceb/1j01ft82m"
              crossOrigin="anonymous"
            />
            {/*End of Tawk.to Script*/}
          </NextIntlClientProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
