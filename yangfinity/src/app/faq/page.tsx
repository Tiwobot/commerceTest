'use client';

import { useState, useEffect, useRef } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';


export default function FAQPage() {
  const t = useTranslations();
  const [open, setOpen] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // Build Q&A pairs from translation keys
  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
  ];

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
    <main className="relative w-full overflow-x-hidden">
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
          <div className="flex items-center justify-center mb-8">
            <QuestionMarkCircleIcon className="h-12 w-12 text-green-500 dark:text-yellow-300 mr-3 animate-pulse" />
            <h1
              className="text-4xl font-extrabold text-center text-black dark:text-white tracking-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em' }}
            >
              {t('faq.title')}
            </h1>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={faq.question}
                className="overflow-visible bg-transparent"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-lg font-semibold text-left text-black dark:text-white focus:outline-none"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                >
                  <span>{faq.question}</span>
                  <span className={`ml-4 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div
                  className={`px-6 pb-5 text-neutral-700 dark:text-neutral-200 text-base transition-all duration-300 ease-in-out ${open === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                  style={{
                    transitionProperty: 'max-height, opacity',
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 