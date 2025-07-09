import { GridTileImage } from './tile';
import Link from 'next/link';

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
const products = productHandles.slice(0, 3).map((handle, idx) => ({
  id: idx + 1,
  name: serverNames[handle],
  price: 25,
  server: serverNames[handle],
  image: '/yangfinity-logo-notext.png',
  handle,
}));

type Product = typeof products[0];

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/products/${item.handle}`}
        prefetch={false}
      >
        <GridTileImage
          src={item.image}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.name}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.name,
            amount: item.price.toFixed(2),
            currencyCode: 'USD'
          }}
        />
      </Link>
    </div>
  );
}

export function ThreeItemGrid() {
  if (!products[0] || !products[1] || !products[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = products;

  return (
    <section className="mx-auto grid max-w-9xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
