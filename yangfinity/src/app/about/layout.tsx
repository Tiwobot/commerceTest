import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About - Yangfinity",
  description: "Learn about Yangfinity, the trusted Metin2 Yang & Won seller with 5+ years of experience and 500+ verified reviews.",
  alternates: {
    canonical: 'https://yangfinity.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
