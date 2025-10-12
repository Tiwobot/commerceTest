'use client';

import Image from 'next/image';
import Link from 'next/link';
import Label from '../../../components/label';
import Collections from '../../../components/layout/search/collections';
import FilterList from '../../../components/layout/search/filter';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { productData } from '../products/productData';

const sorting = [
  { title: 'Relevance', slug: 'relevance' },
  { title: 'Price: Low to High', slug: 'price-asc' },
  { title: 'Price: High to Low', slug: 'price-desc' },
];

function SearchPageClient() {
  return (
    <Suspense>
      <SearchPageContent />
    </Suspense>
  );
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = (searchParams.get('q') || '').toLowerCase();
  const filtered = query === ''
    ? productData
    : productData.filter(p =>
        p.name.toLowerCase().includes(query) ||
        (p.handle && p.handle.toLowerCase().includes(query))
      );
  const resultsText = filtered.length === 1 ? 'result' : 'results';

  return (
    <div className="mx-auto flex w-full flex-col gap-8 px-4 md:px-8 pb-4 text-white md:flex-row">
      <div className="order-first w-full flex-none md:max-w-[110px]">
        <Collections />
      </div>
      <div className="order-last w-full md:order-none">
        {query && (
          <p className="mb-4 text-base text-neutral-300">
            {filtered.length === 0
              ? 'There are no products that match '
              : `Showing ${filtered.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchParams.get('q')}&quot;</span>
          </p>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((product) => (
            <li key={product.handle} className="aspect-square transition-opacity animate-fadeIn">
              <Link href={`/products/${product.handle}`} className="relative inline-block h-full w-full group">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-black hover:border-blue-600 border-neutral-800">
                  <Image
                    src={product.logo || "/yangfinity-logo-notext-basic.png"}
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
          ))}
        </ul>
      </div>
      <div className="order-none flex-none md:order-last md:w-[180px]">
        <FilterList list={sorting} title="Sort by" />
      </div>
    </div>
  );
}

export default function SearchPage() {
  return <SearchPageClient />;
} 