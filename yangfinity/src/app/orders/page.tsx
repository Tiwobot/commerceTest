'use client';
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import Link from 'next/link';

export default function OrdersPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollY = window.scrollY;
        contentRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SignedIn>
        <main className="relative w-full min-h-screen overflow-x-hidden bg-transparent flex items-center justify-center">
          {/* Giant solid color background YANG text, fixed */}
          <span
            aria-hidden
            className="pointer-events-none select-none z-0 font-extrabold uppercase opacity-30 text-[51.5vw] text-[#b6e700] max-w-full max-h-full"
            style={{
              lineHeight: 1,
              letterSpacing: '-0.05em',
              userSelect: 'none',
              textAlign: 'center',
              position: 'absolute',
              left: '31%',
              top: '40%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            YANG
          </span>
          <div ref={contentRef} className="relative z-10 w-full max-w-2xl mx-auto pt-2 pb-52 px-4 transition-transform duration-300 will-change-transform">
            <h1 className="text-3xl font-bold mb-4 text-white text-center">Your Orders</h1>
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl mb-2">🛒😭</span>
              <p className="text-neutral-200 text-center mb-2">You haven&apos;t placed any orders yet.</p>
              <p className="text-neutral-200 text-center mb-4">Ready to get started? Explore our products and treat yourself to some Yang!</p>
              <Link href="/products" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">Shop Now</Link>
            </div>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <main className="max-w-2xl mx-auto py-16 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Sign in to view your orders</h1>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
          </SignInButton>
        </main>
      </SignedOut>
    </>
  );
} 