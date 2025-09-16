import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://yangfinity.com';
  const currentDate = new Date().toISOString();
  
  // Server category pages with high priority
  const categoryPages = [
    { 
      url: '/products?category=Gameforge%20West', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: 'Gameforge West Servers - Metin2 Yang'
    },
    { 
      url: '/products?category=Gameforge%20East', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: 'Gameforge East Servers - Metin2 Yang'
    },
    { 
      url: '/products?category=Gameforge%20TR', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: 'Gameforge TR Servers - Metin2 Yang'
    },
    { 
      url: '/products?category=Private%20Servers', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: 'Private Metin2 Servers - Yang'
    },
    { 
      url: '/products?category=Mobile%20Metin2', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: 'Mobile Metin2 Servers - Yang'
    },
  ];
  
  // Generate categories sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${categoryPages.map(page => `  <url>
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
