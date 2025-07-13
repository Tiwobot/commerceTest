'use client';

import clsx from 'clsx';
import type { ListItem, PathFilterItem } from '.';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type SortFilterItem = { title: string; slug: string };

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Determine if this item is active
  let active = false;
  if (item.title === 'All') {
    // 'All' is active if there is no category param
    active = pathname === '/products' && !searchParams.get('category');
  } else {
    // Other categories are active if category param matches
    active = searchParams.get('category') === item.title;
  }
  // Preserve current sort param when changing category
  const newParams = new URLSearchParams();
  if (item.title !== 'All') {
    newParams.set('category', item.title);
  }
  const currentSort = searchParams.get('sort');
  if (currentSort) {
    newParams.set('sort', currentSort);
  }
  const DynamicTag = active ? 'p' : Link;
  return (
    <li className="mt-2 flex text-black dark:text-white" key={item.title}>
      <DynamicTag
        href={createUrl('/products', newParams)}
        className={clsx(
          'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100',
          {
            'underline underline-offset-4': active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  // Preserve current category param when changing sort
  const newParams = new URLSearchParams();
  if (q) newParams.set('q', q);
  if (item.slug && item.slug.length) newParams.set('sort', item.slug);
  const currentCategory = searchParams.get('category');
  if (currentCategory) {
    newParams.set('category', currentCategory);
  }
  const href = createUrl('/products', newParams);
  const DynamicTag = active ? 'p' : Link;

  return (
    <li className="mt-2 flex text-sm text-black dark:text-white" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx('w-full hover:underline hover:underline-offset-4', {
          'underline underline-offset-4': active
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function createUrl(path: string, params: URLSearchParams) {
  const qs = params.toString();
  return qs ? `${path}?${qs}` : path;
}

export function FilterItem({ item }: { item: ListItem }) {
  return 'path' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}
