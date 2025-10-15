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
  
  // All countries we ship to with proper currencies
  const shippingCountries = [
    // European countries (EUR)
    { code: 'DE', currency: 'EUR', price: '0.00 EUR' },
    { code: 'FR', currency: 'EUR', price: '0.00 EUR' },
    { code: 'IT', currency: 'EUR', price: '0.00 EUR' },
    { code: 'ES', currency: 'EUR', price: '0.00 EUR' },
    { code: 'GB', currency: 'EUR', price: '0.00 EUR' },
    { code: 'NL', currency: 'EUR', price: '0.00 EUR' },
    { code: 'BE', currency: 'EUR', price: '0.00 EUR' },
    { code: 'AT', currency: 'EUR', price: '0.00 EUR' },
    { code: 'CH', currency: 'EUR', price: '0.00 EUR' },
    { code: 'PL', currency: 'EUR', price: '0.00 EUR' },
    { code: 'RO', currency: 'EUR', price: '0.00 EUR' },
    { code: 'GR', currency: 'EUR', price: '0.00 EUR' },
    { code: 'CZ', currency: 'EUR', price: '0.00 EUR' },
    { code: 'HU', currency: 'EUR', price: '0.00 EUR' },
    { code: 'SE', currency: 'EUR', price: '0.00 EUR' },
    { code: 'DK', currency: 'EUR', price: '0.00 EUR' },
    { code: 'FI', currency: 'EUR', price: '0.00 EUR' },
    { code: 'NO', currency: 'EUR', price: '0.00 EUR' },
    { code: 'PT', currency: 'EUR', price: '0.00 EUR' },
    { code: 'IE', currency: 'EUR', price: '0.00 EUR' },
    { code: 'BG', currency: 'EUR', price: '0.00 EUR' },
    { code: 'HR', currency: 'EUR', price: '0.00 EUR' },
    { code: 'SK', currency: 'EUR', price: '0.00 EUR' },
    { code: 'SI', currency: 'EUR', price: '0.00 EUR' },
    { code: 'LT', currency: 'EUR', price: '0.00 EUR' },
    { code: 'LV', currency: 'EUR', price: '0.00 EUR' },
    { code: 'EE', currency: 'EUR', price: '0.00 EUR' },
    { code: 'CY', currency: 'EUR', price: '0.00 EUR' },
    { code: 'MT', currency: 'EUR', price: '0.00 EUR' },
    { code: 'LU', currency: 'EUR', price: '0.00 EUR' },
    // Turkey (TRY)
    { code: 'TR', currency: 'TRY', price: '0.00 TRY' },
    // South Korea (KRW)
    { code: 'KR', currency: 'KRW', price: '0.00 KRW' },
    // United States (USD)
    { code: 'US', currency: 'USD', price: '0.00 USD' },
    // Canada (CAD)
    { code: 'CA', currency: 'CAD', price: '0.00 CAD' },
    // Australia (AUD)
    { code: 'AU', currency: 'AUD', price: '0.00 AUD' },
    // Japan (JPY)
    { code: 'JP', currency: 'JPY', price: '0.00 JPY' },
    // Brazil (BRL)
    { code: 'BR', currency: 'BRL', price: '0.00 BRL' },
    // Mexico (MXN)
    { code: 'MX', currency: 'MXN', price: '0.00 MXN' },
    // India (INR)
    { code: 'IN', currency: 'INR', price: '0.00 INR' },
    // Russia (RUB)
    { code: 'RU', currency: 'RUB', price: '0.00 RUB' },
    // China (CNY)
    { code: 'CN', currency: 'CNY', price: '0.00 CNY' },
    // Singapore (SGD)
    { code: 'SG', currency: 'SGD', price: '0.00 SGD' },
    // Malaysia (MYR)
    { code: 'MY', currency: 'MYR', price: '0.00 MYR' },
    // Thailand (THB)
    { code: 'TH', currency: 'THB', price: '0.00 THB' },
    // Philippines (PHP)
    { code: 'PH', currency: 'PHP', price: '0.00 PHP' },
    // Indonesia (IDR)
    { code: 'ID', currency: 'IDR', price: '0.00 IDR' },
    // Vietnam (VND)
    { code: 'VN', currency: 'VND', price: '0.00 VND' },
    // Argentina (ARS)
    { code: 'AR', currency: 'ARS', price: '0.00 ARS' },
    // Chile (CLP)
    { code: 'CL', currency: 'CLP', price: '0.00 CLP' },
    // Colombia (COP)
    { code: 'CO', currency: 'COP', price: '0.00 COP' },
    // Peru (PEN)
    { code: 'PE', currency: 'PEN', price: '0.00 PEN' },
    // South Africa (ZAR)
    { code: 'ZA', currency: 'ZAR', price: '0.00 ZAR' },
    // Egypt (EGP)
    { code: 'EG', currency: 'EGP', price: '0.00 EGP' },
    // Nigeria (NGN)
    { code: 'NG', currency: 'NGN', price: '0.00 NGN' },
    // Kenya (KES)
    { code: 'KE', currency: 'KES', price: '0.00 KES' },
    // Morocco (MAD)
    { code: 'MA', currency: 'MAD', price: '0.00 MAD' },
    // Israel (ILS)
    { code: 'IL', currency: 'ILS', price: '0.00 ILS' },
    // Saudi Arabia (SAR)
    { code: 'SA', currency: 'SAR', price: '0.00 SAR' },
    // UAE (AED)
    { code: 'AE', currency: 'AED', price: '0.00 AED' }
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
        <g:delivery_time>Instant</g:delivery_time>
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

