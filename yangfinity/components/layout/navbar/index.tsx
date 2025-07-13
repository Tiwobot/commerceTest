'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
import { useCart } from '../../cart/CartContext';
import { useEffect, useState } from 'react';
import React from 'react';
import { GeistSans } from 'geist/font/sans';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
  useClerk
} from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

// Add Tawk_API type to window
declare global {
  interface Window {
    Tawk_API?: {
      setAttributes: (attrs: Record<string, string>, callback: (error: unknown) => void) => void;
    };
  }
}

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

function CartIcon({ quantity, onClick }: { quantity: number; onClick: () => void }) {
  const hasMounted = useHasMounted();
  return (
    <button
      aria-label="Open cart"
      onClick={onClick}
      className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white ml-2"
    >
      {/* Simple cart SVG icon */}
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.6 9.75m-1.407-4.478h13.714c.889 0 1.542.86 1.346 1.725l-1.347 5.73a1.25 1.25 0 01-1.212.97H7.01m0 0L6.6 9.75m.41 0h9.9m-7.5 7.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm9 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
      </svg>
      {hasMounted && quantity > 0 && (
        <span className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-sm bg-blue-600 text-[11px] font-medium text-white flex items-center justify-center">
          {quantity}
        </span>
      )}
    </button>
  );
}

function ProfileIcon() {
  return (
    <button
      aria-label="User profile"
      className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white ml-2"
    >
      {/* Simple user/profile SVG icon */}
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
      </svg>
    </button>
  );
}

function LanguageSelector({ mobile }: { mobile?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState('EN');
  const router = useRouter();
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'es', label: 'Español' },
    { code: 'it', label: 'Italiano' },
    { code: 'fr', label: 'Français' },
  ];
  return (
    <div className="relative">
      <button
        aria-label="Select language"
        onClick={() => setOpen((v) => !v)}
        className={`relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white ${!mobile ? 'ml-2' : ''}`}
      >
        <GlobeAltIcon className="h-5 w-5" />
        <span className="absolute bottom-1 right-1 text-xs font-semibold">{lang.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-900 z-50">
          <ul className="py-1">
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 ${lang.toLowerCase() === l.code ? 'font-bold' : ''}`}
                  onClick={() => {
                    setLang(l.code.toUpperCase());
                    setOpen(false);
                    document.cookie = `NEXT_LOCALE=${l.code}; path=/`;
                    router.refresh();
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CartModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const hasMounted = useHasMounted();
  const t = useTranslations('cart');

  // Build WhatsApp message with cart details
  const cartMessage = encodeURIComponent(
    `Hello, I want to checkout my cart on Yangfinity:\n\n` +
    items.map(item =>
      `• ${item.name} x${item.quantity} (${item.price} EUR each)`
    ).join('\n') +
    (items.length ? `\n\n${t('total')} €${totalPrice.toFixed(2)}` : '')
  );
  const whatsappHref = `https://wa.me/4915736729768?text=${cartMessage}`;
  
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}> {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`fixed right-0 top-0 h-full w-full max-w-xs bg-black/90 text-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} duration-300 p-6 flex flex-col overflow-x-hidden`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold">{t('title')}</span>
          <button onClick={onClose} aria-label={t('remove')} className="text-2xl">×</button>
        </div>
        {!hasMounted ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <span className="text-lg">{t('loading')}</span>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <span className="text-4xl mb-2">🛒</span>
            <span className="text-lg">{t('empty')}</span>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-neutral-800 mb-4">
              {items.map(item => (
                <li key={item.id} className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
                  <div className="relative flex w-full flex-row justify-between px-1 py-4">
                    <button onClick={() => removeItem(item.id)} aria-label={t('remove')} className="absolute z-40 left-0 top-0.2 -translate-x-0.2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-500">
                      <span className="h-4 w-4 flex items-center justify-center text-white dark:text-black">×</span>
                    </button>
                    <div className="flex flex-row">
                      <div className="relative h-16 w-16 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                        <Image src={item.image} alt={item.name || ''} fill className="h-full w-full object-cover" />
                      </div>
                      <div className="z-30 ml-2 flex flex-row space-x-4">
                        <div className="flex flex-1 flex-col text-base">
                          <span className="leading-tight font-medium break-words max-w-[140px] md:max-w-[200px] whitespace-normal line-clamp-2">{item.name}</span>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">{t('amount')} {item.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-16 flex-col justify-between items-end ml-2">
                      <span className={`flex justify-end space-y-2 text-right text-sm text-white ${GeistSans.className}`}>{(item.price * item.quantity).toFixed(2)}</span>
                      <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 text-lg">-</button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-lg">+</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center border-t border-neutral-800 pt-4">
              <span className="font-semibold">{t('total')}</span>
              <span className={`text-white ${GeistSans.className}`}>${totalPrice.toFixed(2)}</span>
            </div>
            <button disabled className={`mt-4 w-full bg-blue-600 text-white py-3 rounded-full opacity-60 cursor-not-allowed ${GeistSans.className}`}>{t('proceed')}</button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition"
            >
              {t('whatsapp')}
            </a>
            <div className="py-6" />
          </>
        )}
      </div>
    </div>
  );
}

function ProfilePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const t = useTranslations('profile');
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}> {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-xs bg-black/90 text-white shadow-xl transition-transform translate-x-0 duration-300 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-bold">{t('title')}</span>
          <button onClick={onClose} aria-label={t('close')} className="text-white hover:text-neutral-400 text-2xl font-bold">&times;</button>
        </div>
        <SignedIn>
          <>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-lg font-semibold">{user?.username || user?.fullName || user?.primaryEmailAddress?.emailAddress}</span>
              <UserButton afterSignOutUrl="/" />
            </div>
            <div className="mb-4 text-sm text-neutral-400">{user?.primaryEmailAddress?.emailAddress}</div>
            <button className="w-full bg-black hover:bg-neutral-900 text-white py-2 rounded mb-2" onClick={() => router.push('/orders')}>{t('orders')}</button>
            <button className="w-full bg-black hover:bg-neutral-900 text-white py-2 rounded" onClick={() => router.push('/support')}>{t('support')}</button>
            <div className="flex-1" />
            <button
              onClick={() => signOut(() => { window.location.href = '/'; })}
              className="w-full mt-8 mb-12 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
            >
              {t('logout')}
            </button>
          </>
        </SignedIn>
        <SignedOut>
          <>
            <SignInButton mode="modal">
              <button className="w-full bg-neutral-700 hover:bg-neutral-800 text-white py-2 rounded mb-2">{t('login')}</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="w-full bg-white hover:bg-neutral-200 text-black py-2 rounded border border-neutral-700">{t('signup')}</button>
            </SignUpButton>
          </>
        </SignedOut>
      </div>
    </div>
  );
}

export function Navbar() {
  const t = useTranslations();
  const { totalQuantity } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Tawk_API && user) {
      window.Tawk_API.setAttributes({
        'name': user.username || user.fullName || user.primaryEmailAddress?.emailAddress || 'Customer',
        'email': user.primaryEmailAddress?.emailAddress || ''
      }, () => {});
    }
  }, [isLoaded, user]);
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <div className="flex flex-row items-center gap-2">
        <Suspense fallback={null}>
            <MobileMenu menu={[
              { title: t('nav.home'), path: '/' },
              { title: t('nav.products'), path: '/products' },
              { title: t('nav.about'), path: '/about' },
              { title: t('nav.faq'), path: '/faq' },
            ]} />
        </Suspense>
          <LanguageSelector mobile />
        </div>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <Image src="/yangfinity-logo-trans.png" alt="YANGFINITY Logo" width={120} height={32} />
          </Link>
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
            <li><Link href="/" className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">{t('nav.home')}</Link></li>
            <li><Link href="/products" className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">{t('nav.products')}</Link></li>
            <li><Link href="/about" className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">{t('nav.about')}</Link></li>
            <li><Link href="/faq" className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">{t('nav.faq')}</Link></li>
            </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3 items-center">
          <div className="hidden md:block"><LanguageSelector /></div>
          <CartIcon quantity={totalQuantity} onClick={() => setCartOpen(true)} />
          <span onClick={() => setProfileOpen(true)}><ProfileIcon /></span>
        </div>
      </div>
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
      {profileOpen && (
        <ProfilePanel open={profileOpen} onClose={() => setProfileOpen(false)} />
      )}
    </nav>
  );
}
