'use client';

import Image from 'next/image';
import Collections from '../../../../components/layout/search/collections';
import FilterList from '../../../../components/layout/search/filter';
import { productData } from '../productData';

const sorting = [
  { title: 'Relevance', slug: 'relevance' },
  { title: 'Price: Low to High', slug: 'price-asc' },
  { title: 'Price: High to Low', slug: 'price-desc' },
];

function ProductGrid() {
  // Example: filter for featured products, or just use all products for now
  const featuredProducts = productData.filter(p => p.name.toLowerCase().includes('featured'));
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredProducts.map((product, idx) => (
        <li key={product.name + idx} className="aspect-square transition-opacity animate-fadeIn">
          <a href={"/products/" + encodeURIComponent(product.name.replace(/\s+/g, '-').toLowerCase())} className="relative inline-block h-full w-full group">
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-black hover:border-blue-600 border-neutral-800">
              <Image
                src="/yangfinity-logo-notext-basic.png"
                alt={product.name}
                fill
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {product.name} — €{product.price} EUR
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function FeaturedProductsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-4 text-white md:flex-row">
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <Collections />
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        <ProductGrid />
      </div>
      <div className="order-none flex-none md:order-last md:w-[125px]">
        <FilterList list={sorting} title="Sort by" />
      </div>
    </div>
  );
} 