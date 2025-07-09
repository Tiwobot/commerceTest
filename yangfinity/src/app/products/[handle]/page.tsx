'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import { GridTileImage } from '../../../../components/grid/tile';
import { GeistSans } from 'geist/font/sans';
import { useCart } from '../../../../components/cart/CartContext';

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

const amountOptions = [
  { label: '100M', value: 100, price: 5 },
  { label: '500M', value: 500, price: 20 },
  { label: '1B', value: 1000, price: 35 },
];

const placeholderProduct = {
  description: 'Buy Yang for Metin2 servers. Fast, safe, and reliable delivery.',
  images: [
    '/yangfinity-logo-notext.png',
    '/yangfinity-logo-notext.png',
    '/yangfinity-logo-notext.png',
  ],
};

export default function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = React.use(params);
  const serverName = serverNames[handle] || handle;
  const [selectedAmount, setSelectedAmount] = useState(amountOptions[0]);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: `${handle}-${selectedAmount.value}`,
      name: `${serverName} (${selectedAmount.label})`,
      price: selectedAmount.price,
      image: '/yangfinity-logo-notext.png',
    });
    // Dispatch a custom event to open the cart modal in Navbar
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cart-modal'));
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
            <Image
              src={placeholderProduct.images[0]}
              alt={serverName}
              fill
              className="h-full w-full object-contain"
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority
            />
          </div>
        </div>
        <div className="basis-full lg:basis-2/6 flex flex-col justify-center">
          <h1 className={`mb-2 text-5xl font-medium ${GeistSans.className}`} style={{ letterSpacing: '-0.01em' }}>{serverName}</h1>
          <div className={`mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white mb-4 ${GeistSans.className}`}>
            ${selectedAmount.price.toFixed(2)} USD
          </div>
          <div className="border-b pb-6 mb-6 dark:border-neutral-700" />
          <div className={`mb-6 ${GeistSans.className}`}>
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide">Amount</div>
            <div className="flex gap-2">
              {amountOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedAmount(option)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${selectedAmount.value === option.value ? 'bg-blue-600 text-white border-blue-600' : 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white border-neutral-300 dark:border-neutral-700 hover:border-blue-600'} ${GeistSans.className}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <p className={`mb-6 text-sm leading-tight dark:text-white/[60%] ${GeistSans.className}`}>
            {placeholderProduct.description}
          </p>
          <button
            className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white transition hover:bg-blue-700"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="py-8">
        <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
        <ul className="flex w-full gap-4 overflow-x-auto pt-1">
          {Array.from({ length: 10 }).map((_, idx) => {
            const handle = `yang-${(idx % Object.keys(serverNames).length) + 1}`;
            const name = serverNames[handle] || handle;
            const price = amountOptions[0].price;
            return (
              <li
                key={handle}
                className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              >
                <Link
                  className="relative h-full w-full"
                  href={`/products/${handle}`}
                  prefetch={true}
                >
                  <GridTileImage
                    alt={name}
                    label={{
                      title: name,
                      amount: price.toFixed(2),
                      currencyCode: 'USD',
                      position: 'bottom',
                    }}
                    src="/yangfinity-logo-notext.png"
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
} 