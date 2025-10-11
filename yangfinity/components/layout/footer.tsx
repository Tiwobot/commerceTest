'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import GoogleRatingBadge from '../GoogleRatingBadge';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2025 + (currentYear > 2025 ? `-${currentYear}` : '');

  return (
    <footer className="text-sm text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-700 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center gap-2 text-white md:pt-1" href="/">
            <Image src="/yangfinity-logo-trans.png" alt="YANGFINITY Logo" width={120} height={32} />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/faq" className="hover:underline">{t('footer.faq')}</Link>
          <Link href="/terms" className="hover:underline">{t('footer.terms')}</Link>
          <Link href="/refund-policy" className="hover:underline">{t('footer.refund')}</Link>
          <Link href="/contact" className="hover:underline">{t('footer.contact')}</Link>
            </div>
        <div className="md:ml-auto flex flex-col gap-2">
          <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="hover:underline">{t('footer.discord')}</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">{t('footer.facebook')}</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">{t('footer.instagram')}</a>
          {/* Trustpilot Widget */}
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="5419b6a8b0d04a076446a9ad"
            data-businessunit-id="049PdqiRfjj2TNGr"
            data-style-height="52px"
            data-style-width="100%"
            data-theme="dark"
          >
            <a href="https://www.trustpilot.com/review/yangfinity.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
          </div>
          {/* Google Merchant Rating Badge */}
          <GoogleRatingBadge />
        </div>
      <div className="py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            {t('footer.copyright', { date: copyrightDate })}
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
