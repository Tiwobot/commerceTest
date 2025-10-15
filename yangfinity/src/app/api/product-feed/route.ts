import { NextResponse } from 'next/server';
import { productData } from '../../products/productData';

/**
 * Google Merchant Center Product Feed
 * XML feed following Google Shopping feed specification
 * 
 * Access at: https://yangfinity.com/api/product-feed
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yangfinity.com';
  
  // Helper function to escape XML special characters
  const escapeXml = (text: string): string => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  // Generate XML feed
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Yangfinity - Metin2 Yang &amp; Won Products</title>
    <link>${baseUrl}</link>
    <description>Buy Yang &amp; Won for Metin2 Gameforge, Private, and Mobile servers. Fast delivery, secure payment.</description>
${productData.map((product) => {
  const productUrl = `${baseUrl}/products/${product.handle}`;
  const imageUrl = product.logo 
    ? `${baseUrl}${product.logo}` 
    : `${baseUrl}/yangfinity-logo-notext-basic.png`;
  
  // Generate unique ID
  const productId = `yangfinity_${product.handle}`;
  
  // Format price with currency
  const priceFormatted = `${product.price.toFixed(2)} EUR`;
  
  // Generate description and escape XML
  const description = escapeXml(`Buy ${product.name} for Metin2. ${product.category} server. Fast, safe, and reliable delivery. Instant digital delivery via email.`);
  const productName = escapeXml(`${product.name} - Metin2 Yang Won`);
  const productType = escapeXml(`Gaming > Virtual Currency > ${product.category}`);
  
  // All countries we ship to - using EUR for all prices to maintain consistency
  const shippingCountries = [
    // European countries
    { code: 'DE', price: '0.00 EUR' },
    { code: 'FR', price: '0.00 EUR' },
    { code: 'IT', price: '0.00 EUR' },
    { code: 'ES', price: '0.00 EUR' },
    { code: 'GB', price: '0.00 EUR' },
    { code: 'NL', price: '0.00 EUR' },
    { code: 'BE', price: '0.00 EUR' },
    { code: 'AT', price: '0.00 EUR' },
    { code: 'CH', price: '0.00 EUR' },
    { code: 'PL', price: '0.00 EUR' },
    { code: 'RO', price: '0.00 EUR' },
    { code: 'GR', price: '0.00 EUR' },
    { code: 'CZ', price: '0.00 EUR' },
    { code: 'HU', price: '0.00 EUR' },
    { code: 'SE', price: '0.00 EUR' },
    { code: 'DK', price: '0.00 EUR' },
    { code: 'FI', price: '0.00 EUR' },
    { code: 'NO', price: '0.00 EUR' },
    { code: 'PT', price: '0.00 EUR' },
    { code: 'IE', price: '0.00 EUR' },
    { code: 'BG', price: '0.00 EUR' },
    { code: 'HR', price: '0.00 EUR' },
    { code: 'SK', price: '0.00 EUR' },
    { code: 'SI', price: '0.00 EUR' },
    { code: 'LT', price: '0.00 EUR' },
    { code: 'LV', price: '0.00 EUR' },
    { code: 'EE', price: '0.00 EUR' },
    { code: 'CY', price: '0.00 EUR' },
    { code: 'MT', price: '0.00 EUR' },
    { code: 'LU', price: '0.00 EUR' },
    // Turkey
    { code: 'TR', price: '0.00 EUR' },
    // United States
    { code: 'US', price: '0.00 EUR' },
    // Canada
    { code: 'CA', price: '0.00 EUR' },
    // Australia
    { code: 'AU', price: '0.00 EUR' },
    // Japan
    { code: 'JP', price: '0.00 EUR' },
    // Brazil
    { code: 'BR', price: '0.00 EUR' },
    // Mexico
    { code: 'MX', price: '0.00 EUR' },
    // India
    { code: 'IN', price: '0.00 EUR' },
    // Russia
    { code: 'RU', price: '0.00 EUR' },
    // China
    { code: 'CN', price: '0.00 EUR' },
    // Singapore
    { code: 'SG', price: '0.00 EUR' },
    // Malaysia
    { code: 'MY', price: '0.00 EUR' },
    // Thailand
    { code: 'TH', price: '0.00 EUR' },
    // Philippines
    { code: 'PH', price: '0.00 EUR' },
    // Indonesia
    { code: 'ID', price: '0.00 EUR' },
    // Vietnam
    { code: 'VN', price: '0.00 EUR' },
    // Argentina
    { code: 'AR', price: '0.00 EUR' },
    // Chile
    { code: 'CL', price: '0.00 EUR' },
    // Colombia
    { code: 'CO', price: '0.00 EUR' },
    // Peru
    { code: 'PE', price: '0.00 EUR' },
    // South Africa
    { code: 'ZA', price: '0.00 EUR' },
    // Egypt
    { code: 'EG', price: '0.00 EUR' },
    // Nigeria
    { code: 'NG', price: '0.00 EUR' },
    // Kenya
    { code: 'KE', price: '0.00 EUR' },
    // Morocco
    { code: 'MA', price: '0.00 EUR' },
    // Israel
    { code: 'IL', price: '0.00 EUR' },
    // Saudi Arabia
    { code: 'SA', price: '0.00 EUR' },
    // UAE
    { code: 'AE', price: '0.00 EUR' }
  ];


  return `    <item>
      <g:id>${escapeXml(productId)}</g:id>
      <g:title>${productName}</g:title>
      <g:description>${description}</g:description>
      <g:link>${escapeXml(productUrl)}</g:link>
      <g:image_link>${escapeXml(imageUrl)}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>${escapeXml(priceFormatted)}</g:price>
      <g:brand>Yangfinity</g:brand>
      <g:google_product_category>5856</g:google_product_category>
      <g:product_type>${productType}</g:product_type>
      <g:mpn>${escapeXml(productId)}</g:mpn>
${shippingCountries.map(country => `      <g:shipping>
        <g:country>${country.code}</g:country>
        <g:service>Digital Delivery</g:service>
        <g:price>${country.price}</g:price>
      </g:shipping>`).join('\n')}
      <g:age_group>adult</g:age_group>
      <g:is_bundle>no</g:is_bundle>
      <g:identifier_exists>no</g:identifier_exists>
    </item>`;
}).join('\n')}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

