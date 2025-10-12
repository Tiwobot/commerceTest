import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Yangfinity",
  description: "Get in touch with Yangfinity support team. We're here to help with your Metin2 Yang & Won purchases and account issues.",
  alternates: {
    canonical: 'https://yangfinity.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
