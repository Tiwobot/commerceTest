'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function PaymentMethodsSecurityBlogPage() {
  const t = useTranslations('blog.posts.payment-methods-security');
  
  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-12">
      <article className="prose prose-invert prose-lg max-w-none">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-[#b6e700] hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-neutral-800 text-[#b6e700] text-xs font-semibold rounded-full">
              {t('category')}
            </span>
            <span className="text-sm text-neutral-500">4 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-lg text-neutral-400">{t('excerpt')}</p>
        </div>

        <div className="text-neutral-300 space-y-6">
          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">💳</span>
                <div>
                  <h3 className="text-xl font-bold text-[#b6e700] mb-2">Credit/Debit Cards</h3>
                  <p className="mb-3"><strong>Security Level:</strong> <span className="text-green-400">Very High</span></p>
                  <p>Full chargeback protection, instant delivery, accepted everywhere. Best for most users.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">💵</span>
                <div>
                  <h3 className="text-xl font-bold text-[#b6e700] mb-2">PayPal</h3>
                  <p className="mb-3"><strong>Security Level:</strong> <span className="text-green-400">Excellent</span></p>
                  <p>Buyer protection program, dispute resolution, fast refunds. Premium security at slightly higher cost.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">₿</span>
                <div>
                  <h3 className="text-xl font-bold text-[#b6e700] mb-2">Cryptocurrency</h3>
                  <p className="mb-3"><strong>Security Level:</strong> <span className="text-yellow-400">Medium</span></p>
                  <p>No chargeback protection, transactions are final. Use only with trusted sellers like Yangfinity.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🏦</span>
                <div>
                  <h3 className="text-xl font-bold text-[#b6e700] mb-2">Bank Transfer</h3>
                  <p className="mb-3"><strong>Security Level:</strong> <span className="text-red-400">Low</span></p>
                  <p>No buyer protection, slow processing. Not recommended except with highly trusted sellers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#b6e700]/10 border border-[#b6e700]/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">🛡️ Yangfinity Security</h3>
            <p>We accept all major payment methods with full buyer protection. Your security is our priority - verified Trustpilot reviews, 24/7 support, and instant delivery guarantee.</p>
          </div>

          <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Shop with Confidence</h3>
            <Link 
              href="/products"
              className="inline-block px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all"
            >
              Browse Yang & Won Products
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

