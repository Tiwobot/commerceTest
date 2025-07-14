'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import { GridTileImage } from '../../../../components/grid/tile';
import { GeistSans } from 'geist/font/sans';
import { useCart } from '../../../../components/cart/CartContext';
import { productData } from '../productData';
import { useTranslations } from 'next-intl';

export default function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const t = useTranslations('product');
  const { handle } = React.use(params);
  // Find the product by handle (slugified name)
  const product = productData.find(p =>
    handle === p.name.replace(/\s+/g, '-').toLowerCase()
  );
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return <div className="p-8 text-center text-lg">{t('notFound')}</div>;
  }

  const handleAddToCart = () => {
    addItem({
      id: `${handle}`,
      name: product.name,
      price: product.price,
      image: product.logo || '/yangfinity-logo-notext.png',
    }, quantity);
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
              src={product.logo || '/yangfinity-logo-notext.png'}
              alt={product.name}
              fill
              className="h-full w-full object-contain"
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority
            />
          </div>
        </div>
        <div className="basis-full lg:basis-2/6 flex flex-col justify-center">
          <h1 className={`mb-2 text-5xl font-medium ${GeistSans.className}`} style={{ letterSpacing: '-0.01em' }}>{product.name}</h1>
          <div className={`mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white mb-4 ${GeistSans.className}`}>
            €{product.price.toFixed(2)} EUR
          </div>
          <div className="border-b pb-6 mb-6 dark:border-neutral-700" />
          <div className={`mb-6 ${GeistSans.className}`}>
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide">{t('quantity')}</div>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-24 px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white text-lg"
            />
          </div>
          <p className={`mb-6 text-sm leading-tight dark:text-white/[60%] ${GeistSans.className}`}>{t('description')}</p>
          <button
            className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white transition hover:bg-blue-700"
            onClick={handleAddToCart}
          >
            {t('addToCart')}
          </button>
        </div>
      </div>
      <div className="py-8">
        <h2 className="mb-4 text-2xl font-bold">{t('related')}</h2>
        <ul className="flex w-full gap-4 overflow-x-auto pt-1">
          {productData.filter(p => p.name !== product.name).slice(0, 10).map((related, idx) => (
            <li
              key={related.name + idx}
              className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            >
              <Link
                className="relative h-full w-full"
                href={`/products/${encodeURIComponent(related.name.replace(/\s+/g, '-').toLowerCase())}`}
                prefetch={true}
              >
                <GridTileImage
                  alt={related.name}
                  label={{
                    title: related.name,
                    amount: related.price.toFixed(2),
                    currencyCode: 'EUR',
                    position: 'bottom',
                  }}
                  src={related.logo || "/yangfinity-logo-notext.png"}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 