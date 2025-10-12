import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Blog - Yangfinity",
  description: "Latest insights about Metin2 Yang & Won trading, server updates, and gaming strategies.",
  alternates: {
    canonical: 'https://yangfinity.com/blog',
  },
};

// SEO is handled by parent layout

const blogPosts = [
  { id: 'how-to-buy-yang-safely', date: '2024-01-15', readTime: '5 min read' },
  { id: 'gameforge-vs-private-servers', date: '2024-01-10', readTime: '7 min read' },
  { id: 'metin2-server-population-guide', date: '2024-01-05', readTime: '4 min read' },
  { id: 'yang-farming-tips', date: '2024-01-01', readTime: '6 min read' },
  { id: 'mobile-metin2-guide', date: '2023-12-28', readTime: '5 min read' },
  { id: 'payment-methods-security', date: '2023-12-25', readTime: '4 min read' }
];

function BlogPageClient() {
  const t = useTranslations();
  
  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-12">
      {/* Hero Section */}
      <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 p-8 md:p-12">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b6e700] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>
        <div className="relative">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-neutral-800 text-[#b6e700] rounded-full">
            {t('blog.hero.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t('blog.hero.title')} <span className="text-[#b6e700]">{t('blog.hero.titleHighlight')}</span>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            {t('blog.hero.description')}
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link 
          href="/blog"
          className="px-4 py-2 text-sm bg-neutral-800 border border-neutral-700 hover:border-[#b6e700] text-white rounded-full transition-all"
        >
          {t('blog.filters.allPosts')}
        </Link>
        {['guides', 'comparison', 'server-info', 'tips', 'mobile', 'security'].map((cat) => (
          <Link
            key={cat}
            href={`/blog?category=${cat}`}
            className="px-4 py-2 text-sm bg-neutral-900 border border-neutral-800 hover:border-[#b6e700] hover:bg-neutral-800 text-neutral-300 hover:text-[#b6e700] rounded-full transition-all"
          >
            {t(`blog.categories.${cat}`)}
          </Link>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group relative bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl overflow-hidden hover:border-[#b6e700] transition-all duration-300 hover:shadow-lg hover:shadow-[#b6e700]/10"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-neutral-800/80 backdrop-blur text-[#b6e700] text-xs font-semibold rounded-full">
                {t(`blog.posts.${post.id}.category`)}
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white group-hover:text-[#b6e700] transition-colors mb-3 pr-20 leading-snug">
                  {t(`blog.posts.${post.id}.title`)}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {t(`blog.posts.${post.id}.excerpt`)}
                </p>
              
              <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-800">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Hover effect indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b6e700] to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b6e700] opacity-5 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">
            {t('blog.newsletter.title')} <span className="text-[#b6e700]">{t('blog.newsletter.titleHighlight')}</span>
          </h2>
          <p className="text-neutral-400 text-sm mb-6">
            {t('blog.newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={t('blog.newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b6e700] transition-colors"
            />
            <button className="px-6 py-3 bg-[#b6e700] text-black font-semibold rounded-lg hover:bg-[#a5d600] transition-all shadow-lg hover:shadow-[#b6e700]/20">
              {t('blog.newsletter.subscribe')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return <BlogPageClient />;
}
