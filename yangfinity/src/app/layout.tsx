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
  title: "YANGFINITY",
  description: "Buy Yang for Metin2 servers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
