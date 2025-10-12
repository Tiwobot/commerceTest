import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Yusa Kardelen - Yangfinity",
  description: "Special page for Yusa Kardelen - Upload and share your memories with Metin2.",
  alternates: {
    canonical: 'https://yangfinity.com/yusakardelen',
  },
};

export default function YusaKardelenLayout({ children }: { children: React.ReactNode }) {
  return children;
}

