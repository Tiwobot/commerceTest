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
  
  // Generate XML feed
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Yangfinity - Metin2 Yang & Won Products</title>
    <link>${baseUrl}</link>
    <description>Buy Yang & Won for Metin2 Gameforge, Private, and Mobile servers. Fast delivery, secure payment.</description>
${productData.map((product) => {
  const productUrl = `${baseUrl}/products/${product.handle}`;
  const imageUrl = product.logo 
    ? `${baseUrl}${product.logo}` 
    : `${baseUrl}/yangfinity-logo-notext.png`;
  
  // Generate unique ID
  const productId = `yangfinity_${product.handle}`;
  
  // Format price with currency
  const priceFormatted = `${product.price.toFixed(2)} EUR`;
  
  // Generate description
  const description = `Buy ${product.name} for Metin2. ${product.category} server. Fast, safe, and reliable delivery. Instant digital delivery via email.`;
  
  // All European countries we ship to
  const shippingCountries = ['DE', 'FR', 'IT', 'ES', 'TR', 'GB', 'NL', 'BE', 'AT', 'CH', 'PL', 'RO', 'GR', 'CZ', 'HU', 'SE', 'DK', 'FI', 'NO', 'PT', 'IE', 'BG', 'HR', 'SK', 'SI', 'LT', 'LV', 'EE', 'CY', 'MT', 'LU'];
  
  return `    <item>
      <g:id>${productId}</g:id>
      <g:title><![CDATA[${product.name} - Metin2 Yang Won]]></g:title>
      <g:description><![CDATA[${description}]]></g:description>
      <g:link>${productUrl}</g:link>
      <g:image_link>${imageUrl}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>${priceFormatted}</g:price>
      <g:brand>Yangfinity</g:brand>
      <g:google_product_category>5856</g:google_product_category>
      <g:product_type>Gaming &gt; Virtual Currency &gt; ${product.category}</g:product_type>
      <g:mpn>${productId}</g:mpn>
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

