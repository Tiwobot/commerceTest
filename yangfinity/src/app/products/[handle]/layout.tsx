import { Metadata } from 'next';
import { productData } from '../productData';

interface ProductLayoutProps {
  params: Promise<{ handle: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: ProductLayoutProps): Promise<Metadata> {
  const { handle } = await params;
  const product = productData.find(p =>
    handle === p.name.replace(/\s+/g, '-').toLowerCase()
  );
  
  if (!product) {
    return {
      title: "Product Not Found - Yangfinity",
      description: "The requested Metin2 Yang & Won product could not be found."
    };
  }
  
  return {
    title: `${product.name} - Yangfinity`,
    description: `Buy ${product.name} Yang & Won for €${product.price.toFixed(2)}. Fast delivery, secure payment, 24/7 support.`
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
