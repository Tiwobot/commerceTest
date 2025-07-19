'use client';
import { useTranslations } from 'next-intl';

export default function TrustpilotBanner() {
  const t = useTranslations();
  return (
    <div className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white text-center py-1.5 px-2 font-medium text-sm flex items-center justify-center gap-2 shadow-md animate-fadeIn z-50">
      <span className="inline-block">{t('trustpilotBanner.text')}</span>
      <a
        href="https://www.trustpilot.com/review/yangfinity.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 inline-block bg-white text-blue-700 font-bold px-3 py-1 rounded shadow hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200"
      >
        {t('trustpilotBanner.cta')}
      </a>
    </div>
  );
} 