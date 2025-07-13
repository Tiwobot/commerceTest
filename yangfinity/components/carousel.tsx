import Image from 'next/image';
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
const products = productHandles.map((handle, idx) => ({
  id: idx + 1,
  name: serverNames[handle],
  price: 25,
  server: serverNames[handle],
  image: '/yangfinity-logo-notext.png',
  handle,
}));

export function Carousel() {
  // Duplicate products for looping effect
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1 carousel-scroll">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.name}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/products/${product.handle}`} className="relative h-full w-full rounded-2xl bg-black border border-neutral-800 shadow-lg overflow-hidden block">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
              <div className="absolute left-3 bottom-3 flex flex-col gap-2">
                <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {product.name}
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                  €25.00 EUR
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
