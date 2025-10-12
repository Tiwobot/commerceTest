'use client';

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import { useTranslations } from 'next-intl';

function SupportPageClient() {
  const contentRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('support');

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
          <div ref={contentRef} className="relative z-10 w-full max-w-2xl mx-auto pt-2 pb-20 px-4 flex flex-col items-center transition-transform duration-300 will-change-transform">
            <h1 className="text-3xl font-bold mb-4 text-white text-center">{t('title')}</h1>
            <p className="text-neutral-200 mb-8 text-center">
              {t.rich('desc', {
                a: (chunks) => (
                  <a href="mailto:info@yangfinity.com" className="underline">{chunks}</a>
                ),
              })}
            </p>
            {/* Embedded Tawk.to chat widget */}
            <div className="w-full max-w-2xl h-[600px] rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-black/80">
              <iframe
                src="https://tawk.to/chat/6873746206a5dd1916716ceb/1j01ft82m"
                width="100%"
                height="100%"
                style={{ minHeight: 600, border: 'none', background: 'transparent' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                title="Yangfinity Live Chat"
              />
            </div>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <main className="max-w-2xl mx-auto py-16 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">{t('signin')}</h1>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">{t('signInButton')}</button>
          </SignInButton>
        </main>
      </SignedOut>
    </>
  );
}

export default function SupportPage() {
  return <SupportPageClient />;
} 