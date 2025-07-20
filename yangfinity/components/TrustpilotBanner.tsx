'use client';
import { useTranslations } from 'next-intl';

export default function TrustpilotBanner() {
  const t = useTranslations();
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white text-center py-1.5 px-2 font-medium text-sm flex items-center justify-center gap-2 shadow-md animate-fadeIn z-[100]">
      <span className="inline-block">{t('trustpilotBanner.text')}</span>
      <a
        href="https://www.trustpilot.com/review/yangfinity.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 inline-block bg-black text-white font-bold px-3 py-1 rounded shadow hover:bg-neutral-800 hover:text-white transition-colors duration-200"
      >
        {t('trustpilotBanner.cta')}
      </a>
    </div>
  );
} 