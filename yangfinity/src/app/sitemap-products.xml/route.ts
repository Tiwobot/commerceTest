import { NextResponse } from 'next/server';
import { productData } from '@/app/products/productData';

export async function GET() {
  const baseUrl = 'https://yangfinity.com';
  const currentDate = new Date().toISOString();
  
  // Individual product pages with detailed metadata
  const productPages = productData.map(product => ({
    url: `/products/${product.handle}`,
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  }));
  
  // Generate products sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${productPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
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
