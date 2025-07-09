import { GridTileImage } from './tile';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Yang - Server A",
    price: 10,
    server: "Server A",
    image: "/globe.svg",
  },
  {
    id: 2,
    name: "Yang - Server B",
    price: 15,
    server: "Server B",
    image: "/window.svg",
  },
  {
    id: 3,
    name: "Yang - Server C",
    price: 20,
    server: "Server C",
    image: "/file.svg",
  },
];

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
        href="#"
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
