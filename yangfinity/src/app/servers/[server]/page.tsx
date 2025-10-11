import { Metadata } from 'next';
import { productData } from '../../products/productData';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ServerPageProps {
  params: Promise<{ server: string }>;
}

// Generate metadata for each server page
export async function generateMetadata({ params }: ServerPageProps): Promise<Metadata> {
  const { server } = await params;
  const serverName = decodeURIComponent(server);
  const serverProducts = productData.filter(p => p.name.toLowerCase().includes(serverName.toLowerCase()));
  
  if (serverProducts.length === 0) {
    return {
      title: 'Server Not Found - Yangfinity',
      description: 'The requested Metin2 server was not found.'
    };
  }

  const firstProduct = serverProducts[0];
  const category = firstProduct.category;
  
  return {
    title: `Buy ${serverName} Yang & Won - Metin2 ${category} | Yangfinity`,
    description: `Buy Yang & Won for ${serverName} Metin2 server. Fast delivery, secure payment, 24/7 support. Best prices for ${category} servers.`,
    keywords: [
      `${serverName} Yang`,
      `${serverName} Metin2`,
      `Metin2 ${serverName}`,
      `${category} Yang`,
      `${category} Won`,
      'Metin2 Yang',
      'Metin2 Won',
      'Yang',
      'Won',
      'Won',
      'Gameforge',
      'Private Server',
      'Mobile Metin2'
    ].join(', '),
    openGraph: {
      title: `Buy ${serverName} Yang & Won - Metin2 ${category}`,
      description: `Buy Yang & Won for ${serverName} Metin2 server. Fast delivery, secure payment, 24/7 support.`,
      images: [firstProduct.logo || '/yangfinity-logo-notext.png'],
    },
    alternates: {
      canonical: `https://yangfinity.com/servers/${server}`
    }
  };
}

// Generate static params for all servers
export async function generateStaticParams() {
  const servers = new Set<string>();
  
  productData.forEach(product => {
    // Extract server name from product name (remove "Metin2", "Won", "Yang" etc.)
    const serverName = product.name
      .replace(/Metin2\s+/g, '')
      .replace(/\s+(Won|Yang).*$/g, '')
      .trim();
    
    if (serverName) {
      servers.add(encodeURIComponent(serverName));
    }
  });
  
  return Array.from(servers).map(server => ({
    server: server
  }));
}

export default async function ServerPage({ params }: ServerPageProps) {
  const { server } = await params;
  const serverName = decodeURIComponent(server);
  const serverProducts = productData.filter(p => p.name.toLowerCase().includes(serverName.toLowerCase()));
  
  if (serverProducts.length === 0) {
    notFound();
  }

  const firstProduct = serverProducts[0];
  const category = firstProduct.category;
  
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-8">
      {/* Server Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          {serverName} Metin2 Server
        </h1>
        <p className="text-xl text-neutral-300 mb-6">
          Buy Yang & Won for {serverName} - {category}
        </p>
        <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          <span className="text-sm font-medium">Fast Delivery</span>
          <span className="text-sm">•</span>
          <span className="text-sm font-medium">24/7 Support</span>
          <span className="text-sm">•</span>
          <span className="text-sm font-medium">Secure Payment</span>
        </div>
      </div>

      {/* Server Info */}
      <div className="bg-black border border-neutral-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">About {serverName}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Server Details</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Server Type: {category}</li>
              <li>• Status: Active</li>
              <li>• Delivery: Instant</li>
              <li>• Support: 24/7 Live Chat</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Why Choose Us?</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Fast and secure delivery</li>
              <li>• Competitive prices</li>
              <li>• Multiple payment methods</li>
              <li>• Professional support team</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Available {serverName} Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverProducts.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.handle}`}
              className="group flex flex-col bg-black border border-neutral-800 rounded-lg p-6 hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src={product.logo || '/yangfinity-logo-notext.png'}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-blue-400 font-bold text-xl">
                    €{product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <span className="inline-block bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                  Instant Delivery
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Related Servers */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Other {category} Servers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {productData
            .filter(p => p.category === category && !p.name.toLowerCase().includes(serverName.toLowerCase()))
            .slice(0, 12)
            .map((product, index) => {
              const relatedServerName = product.name
                .replace(/Metin2\s+/g, '')
                .replace(/\s+(Won|Yang).*$/g, '')
                .trim();
              
              return (
                <Link
                  key={index}
                  href={`/servers/${encodeURIComponent(relatedServerName)}`}
                  className="group bg-black border border-neutral-800 rounded-lg p-4 hover:border-blue-600 transition-colors text-center"
                >
                  <div className="w-12 h-12 relative mx-auto mb-2">
                    <Image
                      src={product.logo || '/yangfinity-logo-notext.png'}
                      alt={relatedServerName}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-white group-hover:text-blue-400 transition-colors">
                    {relatedServerName}
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
