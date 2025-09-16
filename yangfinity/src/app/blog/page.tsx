import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metin2 Yang Blog - Guides, Tips & News | Yangfinity',
  description: 'Latest Metin2 Yang guides, server news, and tips. Learn how to buy Yang safely, server updates, and gaming strategies.',
  keywords: 'Metin2 blog, Yang guides, Metin2 tips, server news, gaming guides, Metin2 strategies',
  openGraph: {
    title: 'Metin2 Yang Blog - Guides, Tips & News',
    description: 'Latest Metin2 Yang guides, server news, and tips. Learn how to buy Yang safely, server updates, and gaming strategies.',
  },
  alternates: {
    canonical: 'https://yangfinity.com/blog'
  }
};

const blogPosts = [
  {
    id: 'how-to-buy-yang-safely',
    title: 'How to Buy Metin2 Yang Safely - Complete Guide',
    excerpt: 'Learn the best practices for buying Yang in Metin2 without getting scammed. Our comprehensive guide covers everything you need to know.',
    date: '2024-01-15',
    category: 'Guides',
    readTime: '5 min read'
  },
  {
    id: 'gameforge-vs-private-servers',
    title: 'Gameforge vs Private Servers - Which Yang to Buy?',
    excerpt: 'Compare Gameforge official servers with private servers. Find out which type of Yang offers better value and gameplay experience.',
    date: '2024-01-10',
    category: 'Comparison',
    readTime: '7 min read'
  },
  {
    id: 'metin2-server-population-guide',
    title: 'Metin2 Server Population Guide - Find Active Servers',
    excerpt: 'Discover the most populated Metin2 servers in 2024. Learn how to check server activity and choose the best server for your needs.',
    date: '2024-01-05',
    category: 'Server Info',
    readTime: '4 min read'
  },
  {
    id: 'yang-farming-tips',
    title: 'Top 10 Yang Farming Tips for Metin2',
    excerpt: 'Maximize your Yang earnings with these proven farming strategies. From beginner to advanced techniques for all server types.',
    date: '2024-01-01',
    category: 'Tips',
    readTime: '6 min read'
  },
  {
    id: 'mobile-metin2-guide',
    title: 'Mobile Metin2 Yang Guide - Everything You Need to Know',
    excerpt: 'Complete guide to buying and using Yang in Mobile Metin2. Learn about mobile-specific features and best practices.',
    date: '2023-12-28',
    category: 'Mobile',
    readTime: '5 min read'
  },
  {
    id: 'payment-methods-security',
    title: 'Secure Payment Methods for Metin2 Yang',
    excerpt: 'Compare payment methods for buying Yang. Learn about security features, fees, and which method works best for you.',
    date: '2023-12-25',
    category: 'Security',
    readTime: '4 min read'
  }
];

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Metin2 Yang Blog
        </h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Latest guides, tips, and news about Metin2 Yang. Learn how to buy safely, 
          find the best servers, and maximize your gaming experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-black border border-neutral-800 rounded-lg p-6 hover:border-blue-600 transition-colors"
          >
            <div className="mb-4">
              <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-3">
                {post.category}
              </span>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between text-sm text-neutral-400">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-black border border-neutral-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Metin2 News
          </h2>
          <p className="text-neutral-300 mb-6">
            Get the latest Metin2 server updates, Yang price changes, and exclusive tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
