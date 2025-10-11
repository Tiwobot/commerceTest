'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function BuyingSafelyGuidePage() {
  const t = useTranslations('guides.items.buy-safely');
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
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Essential Safety Steps</h2>
          
          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#b6e700] mb-3">1. Verify Seller Reputation</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Check Trustpilot or Google reviews</li>
                <li>Look for at least 50+ positive reviews</li>
                <li>Verify the seller has been active for 6+ months</li>
                <li>Check social media presence and engagement</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#b6e700] mb-3">2. Use Secure Payments</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>PayPal - Buyer protection included</li>
                <li>Credit/Debit cards - Chargeback protection</li>
                <li>Avoid - Crypto without escrow, wire transfers</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#b6e700] mb-3">3. Test with Small Orders</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Start with minimum order amount</li>
                <li>Verify delivery speed and quality</li>
                <li>Test customer support responsiveness</li>
                <li>Scale up once trust is established</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#b6e700] mb-3">4. Check Delivery Methods</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>In-game trade - Most secure</li>
                <li>Mailbox - Good for large amounts</li>
                <li>Never share your login credentials</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Red Flags to Avoid</h2>
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2">
              <li>Prices 50%+ below market rate</li>
              <li>No reviews or very few reviews</li>
              <li>No customer support contact</li>
              <li>Pressure to buy immediately</li>
              <li>Requests for account credentials</li>
              <li>Payment methods without protection</li>
            </ul>
          </div>

          <div className="mt-12 bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Safe with Yangfinity</h3>
            <p>At Yangfinity, we follow all safety best practices:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Verified Trustpilot reviews</li>
              <li>Secure payment options (PayPal, Cards)</li>
              <li>24/7 live chat support</li>
              <li>Clear refund policy</li>
              <li>Fast delivery (usually under 10 minutes)</li>
              <li>5+ years in business</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <Link 
            href="/products"
            className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all shadow-lg"
          >
            {tc('browseProducts')}
          </Link>
        </div>
      </article>
    </div>
  );
}
