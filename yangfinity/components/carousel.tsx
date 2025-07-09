import Image from 'next/image';

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
  {
    id: 4,
    name: "Yang - Server D",
    price: 25,
    server: "Server D",
    image: "/vercel.svg",
  },
];

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
            <div className="relative h-full w-full rounded-2xl bg-black border border-neutral-800 shadow-lg overflow-hidden">
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
                  ${product.price}.00 USD
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
