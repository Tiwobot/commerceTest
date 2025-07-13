'use client';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function RefundPolicyPage() {
  const t = useTranslations();
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
    <main className="relative w-full overflow-x-hidden bg-transparent">
      <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden flex items-center justify-center">
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
        <div ref={contentRef} className="relative z-10 max-w-2xl mx-auto pt-2 pb-52 px-4 transition-transform duration-300 will-change-transform">
          <h1 className="text-5xl font-extrabold mb-8 text-white text-center" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em' }}>
            {t('refund.title')}
          </h1>
          <p className="mb-4">
            {t('refund.intro')}
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>{t('refund.li1')}</li>
            <li>{t('refund.li2')}</li>
            <li>{t('refund.li3')}</li>
            <li>{t('refund.li4')}</li>
          </ul>
          <p>
            {t('refund.contact')}
          </p>
        </div>
      </div>
    </main>
  );
} 