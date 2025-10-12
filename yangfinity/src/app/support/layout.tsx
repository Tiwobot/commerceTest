import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support - Yangfinity",
  description: "Get live support for your Metin2 Yang & Won purchases. Our support team is available 24/7 to help with any issues.",
  alternates: {
    canonical: 'https://yangfinity.com/support',
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
