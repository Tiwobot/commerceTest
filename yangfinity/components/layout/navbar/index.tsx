'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
import { useCart } from '../../cart/CartContext';
import { useState } from 'react';

function CartIcon({ quantity, onClick }: { quantity: number; onClick: () => void }) {
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
      {quantity > 0 && (
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

function CartModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}> {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`fixed right-0 top-0 h-full w-full max-w-xs bg-black/90 text-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} duration-300 p-6 flex flex-col`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold">My Cart</span>
          <button onClick={onClose} aria-label="Close cart" className="text-2xl">×</button>
        </div>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <span className="text-4xl mb-2">🛒</span>
            <span className="text-lg">Your cart is empty.</span>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-neutral-800 mb-4">
              {items.map(item => (
                <li key={item.id} className="flex items-center py-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-contain bg-neutral-900 border border-neutral-800 mr-3" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-neutral-400">${item.price} x {item.quantity}</div>
                    <div className="flex items-center mt-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 text-lg">-</button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-lg">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="ml-2 text-red-400 text-lg" aria-label="Remove">×</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center border-t border-neutral-800 pt-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={clearCart} className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded">Clear Cart</button>
            <button disabled className="mt-2 w-full bg-blue-600 text-white py-2 rounded opacity-60 cursor-not-allowed">Checkout (disabled)</button>
          </>
        )}
      </div>
    </div>
  );
}

function ProfilePanel({ open, onClose, user, onLogin, onLogout }: {
  open: boolean;
  onClose: () => void;
  user: { username: string } | null;
  onLogin: (username: string) => void;
  onLogout: () => void;
}) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}> {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`fixed right-0 top-0 h-full w-full max-w-xs bg-black/90 text-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} duration-300 p-6 flex flex-col`}>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-bold">Profile</span>
          <button onClick={onClose} aria-label="Close panel" className="text-white hover:text-neutral-400 text-2xl font-bold">&times;</button>
        </div>
        {user ? (
          <>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-lg font-semibold">{user.username}</span>
              <button className="ml-2 px-2 py-1 text-xs bg-black hover:bg-neutral-900 text-white rounded" aria-label="Edit profile">Edit</button>
            </div>
            <div className="mb-4 text-sm text-neutral-400">user@email.com</div>
            <button className="w-full bg-black hover:bg-neutral-900 text-white py-2 rounded mb-2">Orders</button>
            <button className="w-full bg-black hover:bg-neutral-900 text-white py-2 rounded">Support</button>
            <div className="flex-1" />
            <button onClick={onLogout} className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => onLogin('DemoUser')} className="w-full bg-neutral-700 hover:bg-neutral-800 text-white py-2 rounded mb-2">Login</button>
            <button onClick={() => onLogin('NewUser')} className="w-full bg-white hover:bg-neutral-200 text-black py-2 rounded border border-neutral-700">Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
}

export function Navbar() {
  const { totalQuantity } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);

  const handleLogin = (username: string) => {
    setUser({ username });
    setProfileOpen(false);
  };
  const handleLogout = () => {
    setUser(null);
    setProfileOpen(false);
  };

  // Remove menu logic for now, static links only
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={[]} />
        </Suspense>
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
            <li><Link href="/" className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">Home</Link></li>
            <li><Link href="/products" className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">Products</Link></li>
            <li><Link href="/about" className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">About</Link></li>
            <li><Link href="/faq" className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">FAQ</Link></li>
            </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3 items-center">
          <CartIcon quantity={totalQuantity} onClick={() => setCartOpen(true)} />
          <span onClick={() => setProfileOpen(true)}><ProfileIcon /></span>
        </div>
      </div>
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
      {profileOpen && (
        <ProfilePanel open={profileOpen} onClose={() => setProfileOpen(false)} user={user} onLogin={handleLogin} onLogout={handleLogout} />
      )}
    </nav>
  );
}
