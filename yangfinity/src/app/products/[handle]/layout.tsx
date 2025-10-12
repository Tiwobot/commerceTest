import { Metadata } from 'next';
import { productData } from '../productData';

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = productData.find(p =>
    handle === p.name.replace(/\s+/g, '-').toLowerCase()
  );

  if (!product) {
    return {
      title: 'Product Not Found - Yangfinity',
      alternates: {
        canonical: `https://yangfinity.com/products/${handle}`,
      },
    };
  }

  return {
    title: `${product.name} - Buy Yang/Won - Yangfinity`,
    description: `Buy ${product.name} for €${product.price.toFixed(2)} EUR. Fast delivery, secure payment, 24/7 support. ${product.category} server.`,
    alternates: {
      canonical: `https://yangfinity.com/products/${handle}`,
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
