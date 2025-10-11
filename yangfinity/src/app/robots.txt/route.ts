import { NextResponse } from 'next/server';

export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow important pages
Allow: /products/
Allow: /search/
Allow: /about/
Allow: /faq/
Allow: /contact/
Allow: /terms/
Allow: /refund-policy/
Allow: /blog/
Allow: /guides/
Allow: /servers/
Allow: /orders/

# Crawl delay for better server performance
Crawl-delay: 1

# Sitemap location
Sitemap: https://yangfinity.com/sitemap.xml

# Additional sitemaps for better indexing
Sitemap: https://yangfinity.com/sitemap-products.xml
Sitemap: https://yangfinity.com/sitemap-categories.xml`;
  
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 