import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import { CartProvider } from '../../components/cart/CartContext';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Yangfinity",
  description: "Buy Yang for Metin2 servers. Fast delivery for Metin2, Yang, Elveron, Alturi, Merlis, Helios, Helios2, Levia, Shiva, Dominus, Lupin, Lupin2, Rubinum, Azyrah, Goodtimes, MT2Classic, Lucerna, Laetus, StoneBreakers, StoneBreakers2, WOM, WOM2, NEWMT2, Fortis2.",
  keywords: [
    "Metin2", "Yang", "Elveron", "Alturi", "Merlis", "Helios", "Helios2", "Levia", "Shiva", "Dominus", "Lupin", "Lupin2", "Rubinum", "Azyrah", "Goodtimes", "MT2Classic", "Lucerna", "Laetus", "StoneBreakers", "StoneBreakers2", "WOM", "WOM2", "NEWMT2", "Fortis2"
  ].join(", ")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
      </head>
      <body className={`${inter.variable} antialiased font-sans bg-neutral-50 text-black dark:bg-neutral-900 dark:text-white`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
