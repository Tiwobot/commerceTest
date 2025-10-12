import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Search - Yangfinity",
  description: "Search for Metin2 Yang & Won products across all servers. Find the best deals and fastest delivery options."
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
