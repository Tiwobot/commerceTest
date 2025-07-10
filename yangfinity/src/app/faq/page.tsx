'use client';

import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What is Yangfinity?',
    answer:
      'Yangfinity is a service that provides fast and secure Yang (in-game currency) delivery for Metin2 private servers.',
  },
  {
    question: 'Which servers do you support?',
    answer:
      'We support a wide range of servers including Elveron, Alturi, Merlis, Helios, Helios2, Levia, Shiva, Dominus, Lupin, Rubinum, Azyrah, Goodtimes, MT2Classic, Lucerna, Laetus, StoneBreakers, WOM, NEWMT2, Fortis2, and more.',
  },
  {
    question: 'How fast is the Yang delivery?',
    answer:
      'Most orders are delivered within minutes. Delivery times may vary depending on server status and order volume.',
  },
  {
    question: 'Is buying Yang safe?',
    answer:
      'We prioritize your safety and privacy. Our methods are designed to minimize risk, but please be aware that buying in-game currency may violate some server rules. Proceed at your own discretion.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can reach out to our support team via the contact form on our website or through our social media channels.',
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  const yangRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (yangRef.current) {
        const scrollY = window.scrollY;
        yangRef.current.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.2}px))`;
      }
    };
    // Initial position
    if (yangRef.current) {
      yangRef.current.style.transform = 'translate(-50%, -50%)';
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden">
      <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden flex items-center justify-center">
        {/* Giant solid color background YANG text with parallax */}
        <span
          ref={yangRef}
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
            transform: yangRef.current ? yangRef.current.style.transform : 'translate(-50%, -50%)',
          }}
        >
          YANG
        </span>
        <div className="relative z-10 max-w-2xl mx-auto pt-2 pb-52 px-4">
          <div className="flex items-center justify-center mb-8">
            <QuestionMarkCircleIcon className="h-12 w-12 text-green-500 dark:text-yellow-300 mr-3 animate-pulse" />
            <h1
              className="text-4xl font-extrabold text-center text-white tracking-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions
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