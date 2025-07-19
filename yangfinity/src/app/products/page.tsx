'use client';

import Image from 'next/image';
import Label from '../../../components/label';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { productData } from './productData';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import FilterList from '../../../components/layout/search/filter';

const sortingKeys = [
  { key: 'relevance', slug: 'relevance' },
  { key: 'priceAsc', slug: 'price-asc' },
  { key: 'priceDesc', slug: 'price-desc' },
];

const categoryKeys = [
  { key: 'all', value: 'All' },
  { key: 'gfWest', value: 'Gameforge West' },
  { key: 'gfEast', value: 'Gameforge East' },
  { key: 'gfTR', value: 'Gameforge TR' },
  { key: 'private', value: 'Private Servers' },
  { key: 'mobile', value: 'Mobile Metin2' },
];

function ProductGrid({ t }: { t: (key: string) => string }) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const sort = searchParams.get('sort');
  let filtered = selectedCategory && selectedCategory !== t('products.categories.all')
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
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-black hover:border-blue-600 border-neutral-200 dark:border-neutral-800">
                <Image
                  src={product.logo || "/yangfinity-logo-notext.png"}
                  alt={product.name}
                  fill
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority
                  onLoad={() => console.log(`Image loaded: ${product.logo || "/yangfinity-logo-notext.png"}`)}
                  onError={() => console.error(`Image failed: ${product.logo || "/yangfinity-logo-notext.png"}`)}
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
  const t = useTranslations();
  // Build translated sorting and category lists
  const sorting = sortingKeys.map(s => ({ title: t(`products.sorting.${s.key}`), slug: s.slug }));
  const categories = categoryKeys.map(c => t(`products.categories.${c.key}`));
  // Collections sidebar expects [{title, path}]
  const collections = categories.map(cat => ({
    title: cat,
    path: cat === t('products.categories.all') ? '/products' : `/products?category=${encodeURIComponent(cat)}`
  }));
  return (
    <div className="mx-auto flex w-full flex-col gap-8 px-4 md:px-8 pb-4 text-black md:flex-row dark:text-white">
      {/* Mobile filter/sort dropdowns */}
      <div className="md:hidden flex flex-col gap-2 mb-4">
        <FilterList list={collections} title={t('products.collections')} />
        <FilterList list={sorting} title={t('products.sortBy')} />
      </div>
      {/* Desktop sidebar and grid */}
      <div className="order-first w-full flex-none md:max-w-[110px]">
        <nav>
          <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">{t('products.collections')}</h3>
          <ul className="hidden md:block">
            {collections.map((item) => (
              <li className="mt-2 flex text-black dark:text-white" key={item.title}>
                <Link href={item.path} className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="order-last w-full md:order-none">
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductGrid t={t} />
        </Suspense>
      </div>
      <div className="order-none flex-none md:order-last md:w-[180px]">
        <nav>
          <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">{t('products.sortBy')}</h3>
          <ul className="hidden md:block">
            {sorting.map((item) => (
              <li className="mt-2 flex text-sm text-black dark:text-white" key={item.title}>
                <Link href={`/products?sort=${item.slug}`} className="w-full hover:underline hover:underline-offset-4">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
} 