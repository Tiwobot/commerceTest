'use client';

import Image from 'next/image';
import Collections from '../../../components/layout/search/collections';
import FilterList from '../../../components/layout/search/filter';
import Label from '../../../components/label';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { productData } from './productData';

const sorting = [
  { title: 'Relevance', slug: 'relevance' },
  { title: 'Price: Low to High', slug: 'price-asc' },
  { title: 'Price: High to Low', slug: 'price-desc' },
];

function ProductGrid() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const sort = searchParams.get('sort');
  let filtered = selectedCategory && selectedCategory !== 'All'
    ? productData.filter(p => p.category === selectedCategory)
    : productData;

  // Sorting logic
  if (sort === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filtered.map((product, idx) => {
        return (
          <li key={product.name + idx} className="aspect-square transition-opacity animate-fadeIn">
            <Link href={`/products/${encodeURIComponent(product.name.replace(/\s+/g, '-').toLowerCase())}`} className="relative inline-block h-full w-full group">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                <Image
                  src="/yangfinity-logo-notext.png"
                  alt={product.name}
                  fill
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority
                />
                <Label
                  title={product.name}
                  amount={product.price.toFixed(2)}
                  currencyCode={'EUR'}
                  position="bottom"
                />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function ProductsPage() {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 px-4 md:px-8 pb-4 text-black md:flex-row dark:text-white">
      <div className="order-first w-full flex-none md:max-w-[110px]">
        <Collections />
      </div>
      <div className="order-last w-full md:order-none">
        <ProductGrid />
      </div>
      <div className="order-none flex-none md:order-last md:w-[180px]">
        <FilterList list={sorting} title="Sort by" />
      </div>
    </div>
  );
} 