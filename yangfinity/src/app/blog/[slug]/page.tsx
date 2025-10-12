import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const blogPosts = {
  'how-to-buy-yang-safely': {
    title: 'How to Buy Metin2 Yang & Won Safely - Complete Guide',
    excerpt: 'Learn the best practices for buying Yang in Metin2 without getting scammed. Our comprehensive guide covers everything you need to know.',
    date: '2024-01-15',
    category: 'Guides',
    readTime: '5 min read',
    content: `
# How to Buy Metin2 Yang & Won Safely - Complete Guide

Buying Yang in Metin2 can be risky if you don't know what to look for. This comprehensive guide will help you purchase Yang safely and avoid common scams.

## Why Buy Yang & Won?

Yang is the primary currency in Metin2, used for:
- Purchasing equipment and items
- Upgrading weapons and armor
- Trading with other players
- Accessing premium features

## Red Flags to Avoid

### 1. Suspiciously Low Prices
If a deal seems too good to be true, it probably is. Extremely low prices often indicate:
- Stolen accounts
- Fraudulent transactions
- Banned Yang that will be removed

### 2. Unverified Sellers
Always check:
- Seller reputation and reviews
- Account age and activity
- Previous transaction history
- Customer feedback

### 3. Payment Methods to Avoid
- Gift cards from unknown sources
- Cryptocurrency from unverified wallets
- Bank transfers to personal accounts
- Western Union or MoneyGram

## Safe Buying Practices

### 1. Use Reputable Platforms
Choose established Yang sellers with:
- Secure payment processing
- Customer support
- Money-back guarantees
- Positive reviews

### 2. Verify Seller Credentials
Check for:
- Business registration
- SSL certificates
- Trust badges
- Customer testimonials

### 3. Secure Payment Methods
Recommended payment options:
- Credit cards (with fraud protection)
- PayPal (buyer protection)
- Apple Pay / Google Pay
- Bank transfers to verified business accounts

## Delivery Methods

### Instant Delivery
- Yang delivered within minutes
- Automated systems
- Higher prices but faster service

### Manual Delivery
- Delivered by staff
- Can take 1-24 hours
- Usually cheaper prices
- More personalized service

## After Purchase

### 1. Verify Your Yang
- Check your in-game balance
- Test with small transactions
- Report any issues immediately

### 2. Keep Records
- Save transaction receipts
- Screenshot confirmations
- Note delivery times
- Keep customer support contacts

## Common Scams

### 1. Fake Websites
- Check URL carefully
- Look for HTTPS
- Verify contact information
- Read reviews from multiple sources

### 2. Phishing Attempts
- Never share account passwords
- Use official game websites only
- Be wary of "verification" emails
- Enable two-factor authentication

### 3. Chargeback Scams
- Some buyers claim fraud after receiving Yang
- Use secure payment methods
- Keep all transaction records
- Work with reputable sellers only

## Tips for First-Time Buyers

1. Start with small amounts
2. Test the service before large purchases
3. Read seller policies carefully
4. Ask questions before buying
5. Use customer support when needed

## Conclusion

Buying Yang safely requires research and caution. By following these guidelines, you can protect yourself from scams and enjoy a smooth purchasing experience.

Remember: If something seems suspicious, trust your instincts and look for alternative sellers.
    `
  },
  'gameforge-vs-private-servers': {
    title: 'Gameforge vs Private Servers - Which Yang to Buy?',
    excerpt: 'Compare Gameforge official servers with private servers. Find out which type of Yang offers better value and gameplay experience.',
    date: '2024-01-10',
    category: 'Comparison',
    readTime: '7 min read',
    content: `
# Gameforge vs Private Servers - Which Yang to Buy?

Choosing between Gameforge official servers and private servers can be challenging. This comparison will help you make an informed decision.

## Gameforge Official Servers

### Advantages
- **Official Support**: Backed by the game developer
- **Stability**: Reliable servers with minimal downtime
- **Security**: Official anti-cheat systems
- **Longevity**: Servers are maintained long-term
- **Community**: Large, established player bases

### Disadvantages
- **Higher Prices**: Yang typically costs more
- **Slower Progression**: Grind-heavy gameplay
- **Limited Events**: Fewer special events
- **Strict Rules**: More restrictive gameplay

### Popular Gameforge Servers
- **West**: Eostre, Teutonia, Germania, Europe
- **East**: Willow, Ruby Kirin, Cesko, Magyarorszag
- **TR**: Zephyr, Ruby Lucifer, Onyx Bazalt

## Private Servers

### Advantages
- **Lower Prices**: Yang is usually cheaper
- **Faster Progression**: Higher experience rates
- **Custom Features**: Unique items and events
- **Active Communities**: Dedicated player bases
- **Flexible Rules**: More relaxed gameplay

### Disadvantages
- **Uncertainty**: Servers can shut down
- **Less Security**: Higher risk of scams
- **Smaller Communities**: Fewer players
- **No Official Support**: Limited help available

### Popular Private Servers
- **High Rate**: Alturi2, Elveron, Kerion
- **Medium Rate**: NewMt2, Solis2, Rubinum
- **Low Rate**: Merlis, Levia, Helios2

## Price Comparison

### Gameforge Yang Prices (per 1M)
- **West Servers**: €0.20 - €1.20
- **East Servers**: €0.37 - €2.25
- **TR Servers**: €0.20 - €0.70

### Private Server Yang Prices (per 1M)
- **High Rate**: €10.00 (fixed price)
- **Medium Rate**: €10.00 (fixed price)
- **Low Rate**: €10.00 (fixed price)

## Which Should You Choose?

### Choose Gameforge If:
- You want official support and stability
- You prefer traditional Metin2 gameplay
- You're willing to pay higher prices
- You want to play on established servers

### Choose Private Servers If:
- You want faster progression
- You're looking for lower prices
- You enjoy custom features
- You don't mind server uncertainty

## Tips for Both Types

### Gameforge Tips
- Buy Yang & Won during events for better rates
- Join active guilds for support
- Participate in official events
- Use official payment methods

### Private Server Tips
- Research server reputation
- Check server uptime and population
- Join Discord communities
- Start with small purchases

## Conclusion

Both Gameforge and private servers have their merits. Your choice should depend on your priorities: stability and official support (Gameforge) or lower prices and faster progression (private servers).

Consider your budget, time investment, and gameplay preferences when making your decision.
    `
  }
};

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Yangfinity',
      description: 'The requested blog post was not found.'
    };
  }

  return {
    title: `${post.title} | Yangfinity Blog`,
    description: post.excerpt,
    keywords: `Metin2, Yang, ${post.category.toLowerCase()}, gaming guide, Metin2 tips`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://yangfinity.com/blog/${slug}`
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://yangfinity.com/blog/${slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      '@id': 'https://yangfinity.com/#organization',
      name: 'Yangfinity'
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://yangfinity.com/#organization',
      name: 'Yangfinity',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yangfinity.com/yangfinity-logo-notext.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yangfinity.com/blog/${slug}`
    },
    image: 'https://yangfinity.com/yangfinity-logo-notext.png',
    articleSection: post.category,
    inLanguage: 'en-US'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yangfinity.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://yangfinity.com/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://yangfinity.com/blog/${slug}`
      }
    ]
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block"
        >
          ← Back to Blog
        </Link>
        
        <div className="mb-4">
          <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-neutral-400 text-sm">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="bg-black border border-neutral-800 rounded-lg p-8">
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: post.content
              .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-6">$1</h1>')
              .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-4 mt-8">$1</h2>')
              .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-3 mt-6">$1</h3>')
              .replace(/^\* (.*$)/gim, '<li class="text-neutral-300 mb-2">$1</li>')
              .replace(/^- (.*$)/gim, '<li class="text-neutral-300 mb-2">$1</li>')
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
              .replace(/\*(.*?)\*/g, '<em class="text-neutral-200">$1</em>')
              .replace(/\n\n/g, '</p><p class="text-neutral-300 mb-4">')
              .replace(/^(?!<[h|l])/gm, '<p class="text-neutral-300 mb-4">')
              .replace(/<p class="text-neutral-300 mb-4"><\/p>/g, '')
          }}
        />
      </div>

      <div className="mt-8 text-center">
        <div className="bg-black border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            Ready to Buy Yang & Won?
          </h2>
          <p className="text-neutral-300 mb-4">
            Now that you know how to buy safely, check out our secure Yang store.
          </p>
          <Link 
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Yang & Won Products
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
