import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Payment Methods Guide - Yangfinity",
  description: "Compare different payment methods for buying Metin2 Yang & Won. Learn about security, fees, and processing times."
};

export default function PaymentMethodsPage() {
  const t = useTranslations('guides.items.payment-methods');
  const tc = useTranslations('guides.content');
  
  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-12">
      <article className="prose prose-invert prose-lg max-w-none">
        <div className="mb-8">
          <Link href="/guides" className="text-sm text-[#b6e700] hover:underline mb-4 inline-block">
            {tc('backToGuides')}
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-lg text-neutral-400">{t('description')}</p>
        </div>

        <div className="text-neutral-300 space-y-6">
          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#b6e700] mb-3">💳 Credit/Debit Cards</h3>
              <p className="mb-2"><strong>Security:</strong> High - Chargeback protection</p>
              <p className="mb-2"><strong>Fees:</strong> Usually 2-3%</p>
              <p><strong>Speed:</strong> Instant</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#b6e700] mb-3">💵 PayPal</h3>
              <p className="mb-2"><strong>Security:</strong> Very High - Buyer protection</p>
              <p className="mb-2"><strong>Fees:</strong> 3-5%</p>
              <p><strong>Speed:</strong> Instant</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#b6e700] mb-3">₿ Cryptocurrency</h3>
              <p className="mb-2"><strong>Security:</strong> Medium - No chargeback</p>
              <p className="mb-2"><strong>Fees:</strong> 1-2% + network fees</p>
              <p><strong>Speed:</strong> 10-60 minutes</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#b6e700] mb-3">🏦 Bank Transfer</h3>
              <p className="mb-2"><strong>Security:</strong> Low - No protection</p>
              <p className="mb-2"><strong>Fees:</strong> Varies</p>
              <p><strong>Speed:</strong> 1-3 days</p>
            </div>
          </div>

          <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">{tc('readyToBuy')}</h3>
            <Link 
              href="/products"
              className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all"
            >
              {tc('browseProducts')}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
