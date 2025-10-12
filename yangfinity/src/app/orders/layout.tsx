import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Orders - Yangfinity",
  description: "View your Metin2 Yang & Won order history and track your purchases.",
  alternates: {
    canonical: 'https://yangfinity.com/orders',
  },
};

export default function OrdersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

