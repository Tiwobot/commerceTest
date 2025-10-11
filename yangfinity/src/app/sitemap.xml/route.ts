import { NextResponse } from 'next/server';
import { productData } from '@/app/products/productData';

export async function GET() {
  const baseUrl = 'https://yangfinity.com';
  const currentDate = new Date().toISOString();
  
  // List of static pages with priorities and change frequencies
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/faq', priority: '0.8', changefreq: 'monthly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' },
    { url: '/refund-policy', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/products', priority: '0.9', changefreq: 'weekly' },
    { url: '/search', priority: '0.8', changefreq: 'daily' },
    { url: '/orders', priority: '0.6', changefreq: 'weekly' },
    { url: '/support', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/guides', priority: '0.8', changefreq: 'weekly' },
  ];

  // Server category pages
  const serverCategories = [
    { url: '/products?category=Gameforge%20West', priority: '0.9', changefreq: 'weekly' },
    { url: '/products?category=Gameforge%20East', priority: '0.9', changefreq: 'weekly' },
    { url: '/products?category=Gameforge%20TR', priority: '0.9', changefreq: 'weekly' },
    { url: '/products?category=Private%20Servers', priority: '0.9', changefreq: 'weekly' },
    { url: '/products?category=Mobile%20Metin2', priority: '0.9', changefreq: 'weekly' },
  ];

  // Individual product pages
  const productPages = productData.map(product => ({
    url: `/products/${product.handle}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  // Individual server pages
  const servers = new Set<string>();
  productData.forEach(product => {
    const serverName = product.name
      .replace(/Metin2\s+/g, '')
      .replace(/\s+(Won|Yang).*$/g, '')
      .trim();
    
    if (serverName) {
      servers.add(encodeURIComponent(serverName));
    }
  });
  
  const serverPages = Array.from(servers).map(server => ({
    url: `/servers/${server}`,
    priority: '0.9',
    changefreq: 'weekly'
  }));

  // Blog pages
  const blogPages = [
    { url: '/blog/how-to-buy-yang-safely', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/gameforge-vs-private-servers', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/metin2-server-population-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/yang-farming-tips', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/mobile-metin2-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/payment-methods-security', priority: '0.7', changefreq: 'monthly' },
  ];

  // Guide pages (18 comprehensive guides)
  const guidePages = [
    // Buying guides
    { url: '/guides/buying-safely', priority: '0.8', changefreq: 'monthly' },
    { url: '/guides/payment-methods', priority: '0.8', changefreq: 'monthly' },
    { url: '/guides/choosing-seller', priority: '0.8', changefreq: 'monthly' },
    // Server guides
    { url: '/guides/gameforge-vs-private', priority: '0.8', changefreq: 'monthly' },
    { url: '/guides/server-population', priority: '0.7', changefreq: 'monthly' },
    { url: '/guides/server-types', priority: '0.7', changefreq: 'monthly' },
    // Farming guides
    { url: '/guides/yang-farming', priority: '0.7', changefreq: 'monthly' },
    { url: '/guides/farming-locations', priority: '0.7', changefreq: 'monthly' },
    { url: '/guides/farming-equipment', priority: '0.7', changefreq: 'monthly' },
    // Trading guides
    { url: '/guides/trading-basics', priority: '0.7', changefreq: 'monthly' },
    { url: '/guides/market-analysis', priority: '0.7', changefreq: 'monthly' },
    { url: '/guides/advanced-trading', priority: '0.7', changefreq: 'monthly' },
    // Mobile guides
    { url: '/guides/mobile-overview', priority: '0.7', changefreq: 'monthly' },
    { url: '/guides/mobile-yang', priority: '0.7', changefreq: 'monthly' },
    { url: '/guides/mobile-vs-pc', priority: '0.7', changefreq: 'monthly' },
    // Security guides
    { url: '/guides/account-security', priority: '0.8', changefreq: 'monthly' },
    { url: '/guides/avoiding-scams', priority: '0.8', changefreq: 'monthly' },
    { url: '/guides/secure-trading', priority: '0.8', changefreq: 'monthly' },
  ];

  // Combine all pages
  const allPages = [...staticPages, ...serverCategories, ...productPages, ...serverPages, ...blogPages, ...guidePages];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 