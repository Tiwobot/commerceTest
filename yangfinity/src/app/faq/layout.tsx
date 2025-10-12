import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ - Yangfinity",
  description: "Frequently asked questions about buying Metin2 Yang & Won, payment methods, delivery times, and account security."
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
