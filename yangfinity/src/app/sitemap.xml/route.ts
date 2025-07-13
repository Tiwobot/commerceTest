import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://yangfinity.com';
  // List of static pages
  const staticPages = [
    '',
    '/about',
    '/faq',
    '/terms',
    '/refund-policy',
    '/contact',
    '/products',
  ];
  // List of product handles (should match your product slugs)
  const productHandles = [
    'yang-1','yang-2','yang-3','yang-4','yang-5','yang-6','yang-7','yang-8','yang-9','yang-10','yang-11','yang-12','yang-13','yang-14','yang-15','yang-16','yang-17','yang-18','yang-19','yang-20','yang-21','yang-22'
  ];
  const productPages = productHandles.map(handle => `/products/${handle}`);
  const allPages = [...staticPages, ...productPages];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages.map(page => `  <url><loc>${baseUrl}${page}</loc></url>`).join('\n')}\n</urlset>`;
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 