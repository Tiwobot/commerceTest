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
  
  // All European countries we ship to
  const shippingCountries = ['DE', 'FR', 'IT', 'ES', 'TR', 'GB', 'NL', 'BE', 'AT', 'CH', 'PL', 'RO', 'GR', 'CZ', 'HU', 'SE', 'DK', 'FI', 'NO', 'PT', 'IE', 'BG', 'HR', 'SK', 'SI', 'LT', 'LV', 'EE', 'CY', 'MT', 'LU'];
  
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
        <g:country>${country}</g:country>
        <g:service>Digital Delivery</g:service>
        <g:price>0.00 EUR</g:price>
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

