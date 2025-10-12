import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "How to Buy Yang & Won Safely - Yangfinity",
  description: "Complete guide on safely purchasing Metin2 Yang & Won without getting scammed. Learn about trusted sellers, secure payment methods, and red flags to avoid."
};

export default function HowToBuyYangSafelyPage() {
  const t = useTranslations('blog.posts.how-to-buy-yang-safely');
  
  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-12">
      <article className="prose prose-invert prose-lg max-w-none">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-[#b6e700] hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <span className="inline-block bg-neutral-800 text-[#b6e700] text-xs px-3 py-1 rounded-full mb-4">
            {t('category')}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <span>January 15, 2024</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-neutral-300 space-y-6">
          <p className="text-lg text-neutral-200">
            Buying Yang & Won in Metin2 can significantly enhance your gameplay, but it&apos;s crucial to do it safely. 
            This comprehensive guide will help you purchase game currency without getting scammed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Buy Yang & Won?</h2>
          <p>
            Yang (used in most servers) and Won (used in Gameforge servers) are the primary currencies in Metin2. They&apos;re essential for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Purchasing high-tier equipment and rare items</li>
            <li>Upgrading weapons and armor to +9</li>
            <li>Trading with other players in the marketplace</li>
            <li>Buying enhancement materials and stones</li>
            <li>Participating in the in-game economy</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Red Flags to Watch For</h2>
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Warning Signs of Scams:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Sellers asking for payment first without any guarantee</li>
              <li>Prices that are significantly lower than market rates</li>
              <li>New websites with no reviews or reputation</li>
              <li>Sellers refusing to use secure payment methods</li>
              <li>No customer support or contact information</li>
              <li>Promises of instant delivery without verification</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Safe Buying Practices</h2>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Choose Reputable Sellers</h3>
          <p>
            Always buy from established sellers with positive reviews. Look for:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Trustpilot or Google reviews</li>
            <li>Active customer support (live chat, email)</li>
            <li>Clear refund policies</li>
            <li>Secure payment options (PayPal, credit cards)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. Use Secure Payment Methods</h3>
          <p>
            Prefer payment methods with buyer protection:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>PayPal</strong> - Offers buyer protection</li>
            <li><strong>Credit Cards</strong> - Chargeback protection available</li>
            <li><strong>Avoid</strong> - Direct bank transfers, cryptocurrency without escrow</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. Verify Delivery Methods</h3>
          <p>
            Understand how you&apos;ll receive your Yang & Won:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>In-game trade</strong> - Most common and safe</li>
            <li><strong>Mailbox delivery</strong> - Secure for large amounts</li>
            <li><strong>Character transfer</strong> - Used by some sellers</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Start Small</h3>
          <p>
            When using a new seller for the first time:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Make a small test purchase first</li>
            <li>Verify delivery quality and speed</li>
            <li>Check customer service responsiveness</li>
            <li>Increase order size once trust is established</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Server-Specific Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Gameforge Servers</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Use Won currency</li>
                <li>✓ More regulated environment</li>
                <li>✓ Stick to reputable sellers</li>
                <li>✓ Be aware of official TOS</li>
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Private Servers</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Use Yang currency</li>
                <li>✓ Check server stability</li>
                <li>✓ Verify server population</li>
                <li>✓ Research server reputation</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Final Checklist</h2>
          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6 my-6">
            <p className="font-semibold text-[#b6e700] mb-3">Before You Buy:</p>
            <ul className="space-y-2">
              <li>✓ Verify seller reputation and reviews</li>
              <li>✓ Use secure payment methods with buyer protection</li>
              <li>✓ Understand the delivery process</li>
              <li>✓ Start with a small test order</li>
              <li>✓ Keep records of all transactions</li>
              <li>✓ Contact customer support if issues arise</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose Yangfinity?</h2>
          <p>
            At Yangfinity, we prioritize your safety and satisfaction:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Verified Trustpilot reviews from real customers</li>
            <li>24/7 customer support via live chat</li>
            <li>Secure payment options with buyer protection</li>
            <li>Fast delivery (usually within minutes)</li>
            <li>Clear refund policy</li>
            <li>5+ years of experience in Metin2 currency trading</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Buy Yang & Won Safely?
          </h2>
          <p className="text-neutral-300 mb-6">
            Now that you know how to buy safely, check out our secure Yang & Won store.
          </p>
          <Link 
            href="/products"
            className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all shadow-lg hover:shadow-[#b6e700]/20"
          >
            Browse Yang & Won Products
          </Link>
        </div>
      </article>
    </div>
  );
}

