import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metin2 Yang Guides - Complete Tutorials & Tips | Yangfinity',
  description: 'Comprehensive guides for buying, using, and maximizing Metin2 Yang. Learn about servers, farming, trading, and more.',
  keywords: 'Metin2 guides, Yang tutorials, Metin2 tips, server guides, farming guides, trading guides',
  openGraph: {
    title: 'Metin2 Yang Guides - Complete Tutorials & Tips',
    description: 'Comprehensive guides for buying, using, and maximizing Metin2 Yang. Learn about servers, farming, trading, and more.',
  },
  alternates: {
    canonical: 'https://yangfinity.com/guides'
  }
};

const guideCategories = [
  {
    id: 'buying-guides',
    title: 'Buying Guides',
    description: 'Learn how to buy Yang safely and efficiently',
    guides: [
      {
        title: 'How to Buy Yang Safely',
        description: 'Complete guide to purchasing Yang without getting scammed',
        link: '/guides/buying-safely'
      },
      {
        title: 'Payment Methods Explained',
        description: 'Compare different payment options and their security',
        link: '/guides/payment-methods'
      },
      {
        title: 'Choosing the Right Seller',
        description: 'What to look for in a reputable Yang seller',
        link: '/guides/choosing-seller'
      }
    ]
  },
  {
    id: 'server-guides',
    title: 'Server Guides',
    description: 'Everything about Metin2 servers and their differences',
    guides: [
      {
        title: 'Gameforge vs Private Servers',
        description: 'Compare official and private server experiences',
        link: '/guides/gameforge-vs-private'
      },
      {
        title: 'Server Population Guide',
        description: 'Find the most active and populated servers',
        link: '/guides/server-population'
      },
      {
        title: 'Server Types Explained',
        description: 'Understand different server rates and features',
        link: '/guides/server-types'
      }
    ]
  },
  {
    id: 'farming-guides',
    title: 'Farming Guides',
    description: 'Maximize your Yang earnings with these strategies',
    guides: [
      {
        title: 'Yang Farming Tips',
        description: 'Proven strategies to earn more Yang in-game',
        link: '/guides/yang-farming'
      },
      {
        title: 'Best Farming Locations',
        description: 'Top spots for efficient Yang farming',
        link: '/guides/farming-locations'
      },
      {
        title: 'Farming Equipment Guide',
        description: 'Essential gear for successful farming',
        link: '/guides/farming-equipment'
      }
    ]
  },
  {
    id: 'trading-guides',
    title: 'Trading Guides',
    description: 'Master the art of trading in Metin2',
    guides: [
      {
        title: 'Trading Basics',
        description: 'Learn the fundamentals of Metin2 trading',
        link: '/guides/trading-basics'
      },
      {
        title: 'Market Analysis',
        description: 'How to analyze prices and market trends',
        link: '/guides/market-analysis'
      },
      {
        title: 'Advanced Trading Strategies',
        description: 'Professional trading techniques for profit',
        link: '/guides/advanced-trading'
      }
    ]
  },
  {
    id: 'mobile-guides',
    title: 'Mobile Guides',
    description: 'Everything about Mobile Metin2 and Yang',
    guides: [
      {
        title: 'Mobile Metin2 Overview',
        description: 'Complete guide to Mobile Metin2 gameplay',
        link: '/guides/mobile-overview'
      },
      {
        title: 'Mobile Yang Guide',
        description: 'How to buy and use Yang in Mobile Metin2',
        link: '/guides/mobile-yang'
      },
      {
        title: 'Mobile vs PC Differences',
        description: 'Key differences between mobile and PC versions',
        link: '/guides/mobile-vs-pc'
      }
    ]
  },
  {
    id: 'security-guides',
    title: 'Security Guides',
    description: 'Protect your account and Yang investments',
    guides: [
      {
        title: 'Account Security',
        description: 'Keep your Metin2 account safe from hackers',
        link: '/guides/account-security'
      },
      {
        title: 'Avoiding Scams',
        description: 'Common scams and how to avoid them',
        link: '/guides/avoiding-scams'
      },
      {
        title: 'Secure Trading Practices',
        description: 'Safe methods for trading with other players',
        link: '/guides/secure-trading'
      }
    ]
  }
];

export default function GuidesPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Metin2 Yang Guides
        </h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Comprehensive guides to help you buy, use, and maximize your Metin2 Yang experience. 
          From beginners to advanced players, we have everything you need to know.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {guideCategories.map((category) => (
          <div key={category.id} className="bg-black border border-neutral-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-3">
              {category.title}
            </h2>
            <p className="text-neutral-300 mb-6">
              {category.description}
            </p>
            
            <div className="space-y-4">
              {category.guides.map((guide, index) => (
                <Link
                  key={index}
                  href={guide.link}
                  className="block group bg-neutral-900 border border-neutral-700 rounded-lg p-4 hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {guide.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help Choosing Yang?
          </h2>
          <p className="text-blue-100 mb-6">
            Our guides will help you make informed decisions about buying Yang for your preferred server.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Yang Products
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
