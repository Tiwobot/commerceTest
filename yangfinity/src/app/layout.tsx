import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import { CartProvider } from '../../components/cart/CartContext';
import Script from 'next/script';
import { ClerkProvider } from "@clerk/nextjs";
import TrustpilotBanner from '../../components/TrustpilotBanner';

// GeistSans already provides a .variable and .className for Tailwind/Next.js

export const metadata = {
  title: "Yangfinity - Buy Metin2 Yang & Won",
  description: "Buy Metin2 Yang & Won fast and secure. Trusted seller for Gameforge, Private & Mobile servers. 24/7 support, instant delivery.",
  keywords: [
    "Metin2 Yang", "Meting2 Won", "Metin2", "Yang", "Won", "Metin2 Yang Kaufen", "Buy Yang", "Metin2 Won Kaufen", "Buy Won", "Gameforge", "Gameforge West", "Gameforge East", "Gameforge TR",
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
  // Remove: const t = useTranslations();

  return (
    <ClerkProvider>
      <html lang={locale} className="dark">
        <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/yangfinity-logo-notext-basic.png" type="image/png" sizes="32x32" />
          <meta name="robots" content="index, follow" />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Yangfinity - Buy Metin2 Yang & Won" />
          <meta property="og:description" content="Trusted Metin2 Yang & Won seller. Fast delivery, 24/7 support, secure payment." />
          <meta property="og:image" content="/yangfinity-logo-notext.png" />
          <meta property="og:url" content="https://yangfinity.com/" />
          <meta property="og:site_name" content="Yangfinity" />
          <meta property="og:type" content="website" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Yangfinity - Buy Metin2 Yang & Won" />
          <meta name="twitter:description" content="Trusted Metin2 Yang & Won seller. Fast delivery, secure payment." />
          <meta name="twitter:image" content="/yangfinity-logo-notext.png" />
          {/* JSON-LD Structured Data with @graph */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://yangfinity.com/#organization',
                name: 'Yangfinity',
                url: 'https://yangfinity.com/',
                logo: {
                  '@type': 'ImageObject',
                  '@id': 'https://yangfinity.com/#logo',
                  url: 'https://yangfinity.com/yangfinity-logo-notext.png',
                  contentUrl: 'https://yangfinity.com/yangfinity-logo-notext.png',
                  caption: 'Yangfinity - Buy Metin2 Yang & Won',
                  inLanguage: 'en-US'
                },
                description: 'Trusted Metin2 Yang & Won seller. Fast delivery, secure payment, 24/7 support.',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Marbacher Strasse',
                  addressLocality: 'Ludwigsburg',
                  addressCountry: 'Germany'
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  telephone: '+90 538 062 34 22',
                  availableLanguage: ['English', 'German', 'Spanish', 'French', 'Italian', 'Turkish'],
                  areaServed: 'Worldwide'
                },
                sameAs: [
                  'https://www.trustpilot.com/review/yangfinity.com',
                  'https://www.facebook.com/',
                  'https://twitter.com/',
                  'https://www.instagram.com/'
                ],
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  reviewCount: '500',
                  bestRating: '5',
                  worstRating: '1'
                }
              },
              {
                '@type': ['Store', 'OnlineStore'],
                '@id': 'https://yangfinity.com/#store',
                name: 'Yangfinity',
                url: 'https://yangfinity.com/',
                description: 'Metin2 Yang & Won store - all servers supported',
                priceRange: '€0.16 - €10.00',
                currenciesAccepted: 'EUR',
                paymentAccepted: ['Credit Card', 'PayPal', 'Apple Pay', 'Google Pay', 'Mastercard', 'Visa'],
                openingHours: 'Mo-Su 00:00-23:59',
                telephone: '+90 538 062 34 22',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Marbacher Strasse',
                  addressLocality: 'Ludwigsburg',
                  addressCountry: 'Germany'
                },
                image: 'https://yangfinity.com/yangfinity-logo-notext.png'
              },
              {
                '@type': 'WebSite',
                '@id': 'https://yangfinity.com/#website',
                url: 'https://yangfinity.com/',
                name: 'Yangfinity - Buy Metin2 Yang & Won',
                description: 'Buy Metin2 Yang & Won - Gameforge, Private & Mobile servers. Instant delivery.',
                publisher: {
                  '@id': 'https://yangfinity.com/#organization'
                },
                inLanguage: 'en-US',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://yangfinity.com/search?q={search_term_string}'
                  },
                  'query-input': 'required name=search_term_string'
                }
              }
            ]
          }) }} />
          {/* Trustpilot Verification Script (plain for crawler detection) */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
                var a=d.createElement(s);a.async=1;a.src=r;a.type='text/javascript';var f=d.getElementsByTagName(s)[0];
                f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
                tp('register', '049PdqiRfjj2TNGr');
              `
            }}
          />
          {/* Google Analytics (GA4) */}
          <Script id="ga-script" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');`}
          </Script>
          {/* Trustpilot JS Widget */}
          <Script id="trustpilot-script" strategy="afterInteractive">
            {`(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
            var a=d.createElement(s);a.async=1;a.src=r;a.type='text/javascript';var f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
            tp('register', '049PdqiRfjj2TNGr');`}
          </Script>
        </head>
        <body className={`${GeistSans.variable} antialiased font-sans bg-neutral-900 text-white`}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <CartProvider>
              {/* Trustpilot Review Banner */}
              <TrustpilotBanner />
              <div className="pt-12">
                <Navbar />
                <main>{children}</main>
                <Footer />
              </div>
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
