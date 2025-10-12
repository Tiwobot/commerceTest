import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Guides - Yangfinity",
  description: "Complete guides for buying Metin2 Yang & Won safely, choosing servers, farming tips, and trading strategies."
};

// SEO is handled by parent layout

const guideCategories = [
  {
    id: 'buying-guides',
    guides: [
      { key: 'buy-safely', link: '/guides/buying-safely' },
      { key: 'payment-methods', link: '/guides/payment-methods' },
      { key: 'choosing-seller', link: '/guides/choosing-seller' }
    ]
  },
  {
    id: 'server-guides',
    guides: [
      { key: 'gameforge-vs-private', link: '/guides/gameforge-vs-private' },
      { key: 'server-population', link: '/guides/server-population' },
      { key: 'server-types', link: '/guides/server-types' }
    ]
  },
  {
    id: 'farming-guides',
    guides: [
      { key: 'yang-farming', link: '/guides/yang-farming' },
      { key: 'farming-locations', link: '/guides/farming-locations' },
      { key: 'farming-equipment', link: '/guides/farming-equipment' }
    ]
  },
  {
    id: 'trading-guides',
    guides: [
      { key: 'trading-basics', link: '/guides/trading-basics' },
      { key: 'market-analysis', link: '/guides/market-analysis' },
      { key: 'advanced-trading', link: '/guides/advanced-trading' }
    ]
  },
  {
    id: 'mobile-guides',
    guides: [
      { key: 'mobile-overview', link: '/guides/mobile-overview' },
      { key: 'mobile-yang', link: '/guides/mobile-yang' },
      { key: 'mobile-vs-pc', link: '/guides/mobile-vs-pc' }
    ]
  },
  {
    id: 'security-guides',
    guides: [
      { key: 'account-security', link: '/guides/account-security' },
      { key: 'avoiding-scams', link: '/guides/avoiding-scams' },
      { key: 'secure-trading', link: '/guides/secure-trading' }
    ]
  }
];

function GuidesPageClient() {
  const t = useTranslations();
  
  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-12">
      {/* Hero Section */}
      <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b6e700] opacity-5 rounded-full blur-3xl"></div>
        <div className="relative">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-neutral-800 text-[#b6e700] rounded-full">
            {t('guides.hero.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t('guides.hero.title')} <span className="text-[#b6e700]">{t('guides.hero.titleHighlight')}</span>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            {t('guides.hero.description')}
          </p>
        </div>
      </div>

      {/* Guide Categories Grid */}
      <div className="space-y-12">
        {guideCategories.map((category) => (
          <div key={category.id} id={category.id}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#b6e700] rounded-full"></span>
                {t(`guides.categories.${category.id}.title`)}
              </h2>
              <p className="text-sm text-neutral-400 ml-7">
                {t(`guides.categories.${category.id}.description`)}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.guides.map((guide, index) => (
                <Link
                  key={index}
                  href={guide.link}
                  className="group relative bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-[#b6e700] hover:bg-neutral-900 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-[#b6e700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#b6e700] transition-colors mb-2 pr-8">
                    {t(`guides.items.${guide.key}.title`)}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {t(`guides.items.${guide.key}.description`)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 p-8">
        <div className="absolute inset-0 bg-[#b6e700] opacity-5"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {t('guides.cta.title')}
            </h2>
            <p className="text-neutral-400">
              {t('guides.cta.description')}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link 
              href="/products"
              className="px-6 py-3 bg-[#b6e700] text-black rounded-lg font-semibold hover:bg-[#a5d600] transition-all shadow-lg hover:shadow-[#b6e700]/20"
            >
              {t('guides.cta.browseProducts')}
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 bg-transparent border border-neutral-600 text-white rounded-lg font-semibold hover:border-[#b6e700] hover:text-[#b6e700] transition-all"
            >
              {t('guides.cta.getSupport')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GuidesPage() {
  return <GuidesPageClient />;
}
