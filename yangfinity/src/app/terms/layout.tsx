import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service - Yangfinity",
  description: "Terms of service for using Yangfinity platform to buy Metin2 Yang & Won safely and securely."
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
