import Image from 'next/image';
import Link from 'next/link';
import Label from '../../../components/label';
import Collections from '../../../components/layout/search/collections';
import FilterList from '../../../components/layout/search/filter';

const sorting = [
  { title: 'Relevance', slug: 'relevance' },
  { title: 'Price: Low to High', slug: 'price-asc' },
  { title: 'Price: High to Low', slug: 'price-desc' },
];

const serverNames: Record<string, string> = {
  'yang-1': 'Elveron',
  'yang-2': 'Alturi',
  'yang-3': 'Merlis',
  'yang-4': 'Helios',
  'yang-5': 'Helios2',
  'yang-6': 'Levia',
  'yang-7': 'Shiva',
  'yang-8': 'Dominus',
  'yang-9': 'Lupin',
  'yang-10': 'Lupin2',
  'yang-11': 'Rubinum',
  'yang-12': 'Azyrah',
  'yang-13': 'Goodtimes',
  'yang-14': 'MT2Classic',
  'yang-15': 'Lucerna',
  'yang-16': 'Laetus',
  'yang-17': 'StoneBreakers',
  'yang-18': 'StoneBreakers2',
  'yang-19': 'WOM',
  'yang-20': 'WOM2',
  'yang-21': 'NEWMT2',
  'yang-22': 'Fortis2',
};

const productHandles = Object.keys(serverNames);
const products = productHandles.map((handle) => ({
  handle,
  title: serverNames[handle],
  price: '25.00',
  currencyCode: 'EUR',
}));

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = (searchParams.q || '').toLowerCase();
  const filtered = query === ''
    ? products
    : products.filter(p => p.title.toLowerCase().includes(query));
  const resultsText = filtered.length === 1 ? 'result' : 'results';

  return (
    <div className="mx-auto flex w-full flex-col gap-8 px-4 md:px-8 pb-4 text-black md:flex-row dark:text-white">
      <div className="order-first w-full flex-none md:max-w-[110px]">
        <Collections />
      </div>
      <div className="order-last w-full md:order-none">
        {query && (
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-300">
            {filtered.length === 0
              ? 'There are no products that match '
              : `Showing ${filtered.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchParams.q}&quot;</span>
          </p>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((product) => (
            <li key={product.handle} className="aspect-square transition-opacity animate-fadeIn">
              <Link href={`/products/${product.handle}`} className="relative inline-block h-full w-full group">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                  <Image
                    src="/yangfinity-logo-notext.png"
                    alt={product.title}
                    fill
                    className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority
                  />
                  <Label
                    title={product.title}
                    amount={product.price}
                    currencyCode={product.currencyCode}
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