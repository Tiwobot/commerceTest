import Image from 'next/image';
import Link from 'next/link';
import { productData } from '../src/app/products/productData';

export function Carousel() {
  // Use all products from productData for the carousel
  const products = productData;
  // Duplicate products for looping effect
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1 carousel-scroll">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => {
          const handle = encodeURIComponent(product.name.replace(/\s+/g, '-').toLowerCase());
          return (
            <li
              key={`${product.name}${i}`}
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
            >
              <Link href={`/products/${handle}`} className="relative h-full w-full rounded-2xl bg-black border border-neutral-800 shadow-lg overflow-hidden block">
                <Image
                  src={product.logo || '/yangfinity-logo-notext.png'}
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
                    €{product.price.toFixed(2)} EUR
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
