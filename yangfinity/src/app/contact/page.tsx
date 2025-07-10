'use client';
import { useEffect, useRef } from 'react';

export default function ContactPage() {
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
    <main className="relative w-full overflow-x-hidden bg-transparent">
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
          <h1 className="text-5xl font-extrabold mb-8 text-white text-center" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em' }}>
            Contact
          </h1>
          <p className="mb-8">
            Have a question or need support? Fill out the form below and our team will get back to you as soon as possible.
          </p>
          <form className="flex flex-col gap-4 max-w-lg mx-auto">
            <input type="text" placeholder="Name" className="rounded px-4 py-2 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition" />
            <input type="email" placeholder="Email" className="rounded px-4 py-2 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition" />
            <textarea placeholder="Message" rows={5} className="rounded px-4 py-2 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition" />
            <button type="submit" className="rounded bg-white/10 border border-white/30 text-white font-bold py-2 px-6 mt-2 hover:bg-white/20 transition">Send</button>
          </form>
        </div>
      </div>
    </main>
  );
} 