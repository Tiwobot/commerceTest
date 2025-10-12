import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Refund Policy - Yangfinity",
  description: "Refund policy for Metin2 Yang & Won purchases. Learn about our refund conditions and process.",
  alternates: {
    canonical: 'https://yangfinity.com/refund-policy',
  },
};

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
