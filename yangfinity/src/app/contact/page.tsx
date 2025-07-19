'use client';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations();
  const contentRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string|null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setResult('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json();
        setResult(data.error || 'Something went wrong.');
      }
    } catch {
      setResult('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

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
            {t('contact.title')}
          </h1>
          <p className="mb-8">
            {t('contact.intro')}
          </p>
          <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
            <input type="text" placeholder={t('contact.name')} value={name} onChange={e => setName(e.target.value)} required className="rounded px-4 py-2 bg-neutral-100 text-black placeholder:text-neutral-500 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition dark:bg-white/10 dark:text-white dark:placeholder:text-white/60 dark:border-white/30 dark:focus:ring-white/40" />
            <input type="email" placeholder={t('contact.email')} value={email} onChange={e => setEmail(e.target.value)} required className="rounded px-4 py-2 bg-neutral-100 text-black placeholder:text-neutral-500 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition dark:bg-white/10 dark:text-white dark:placeholder:text-white/60 dark:border-white/30 dark:focus:ring-white/40" />
            <textarea placeholder={t('contact.message')} rows={5} value={message} onChange={e => setMessage(e.target.value)} required className="rounded px-4 py-2 bg-neutral-100 text-black placeholder:text-neutral-500 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition dark:bg-white/10 dark:text-white dark:placeholder:text-white/60 dark:border-white/30 dark:focus:ring-white/40" />
            <button type="submit" className="rounded bg-white/10 border border-white/30 text-white font-bold py-2 px-6 mt-2 hover:bg-white/20 transition" disabled={loading}>{loading ? t('contact.sending') : t('contact.send')}</button>
            {result && <div className="mt-2 text-center text-white/80">{result === 'Your message has been sent!' ? t('contact.success') : result === 'Something went wrong.' ? t('contact.error') : result}</div>}
          </form>
        </div>
      </div>
    </main>
  );
} 