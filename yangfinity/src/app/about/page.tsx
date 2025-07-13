'use client';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
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
            <span role="img" aria-label="rocket">🚀</span> About Yangfinity
          </h1>
          <p className="mb-4">
            Yangfinity is dedicated to providing Metin2 players with the fastest, most reliable Yang delivery for a wide range of private servers. Our mission is to empower players by making in-game currency accessible, affordable, and secure.
          </p>
          <p className="mb-4">
            We support popular servers such as Elveron, Alturi, Merlis, Helios, Helios2, Levia, Shiva, Dominus, Lupin, Rubinum, Azyrah, Goodtimes, MT2Classic, Lucerna, Laetus, StoneBreakers, WOM, NEWMT2, Fortis2, and more. Our team is passionate about Metin2 and committed to excellent customer service.
          </p>
          <p>
            Whether you're a new player or a seasoned veteran, Yangfinity is your trusted partner for all your Yang needs. <span role="img" aria-label="handshake">🤝</span> Join our community and experience the difference!
          </p>
        </div>
      </div>
    </main>
  );
} 