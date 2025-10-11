'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import GoogleSurveyOptIn from '../../../../components/GoogleSurveyOptIn';
import { useCart } from '../../../../components/cart/CartContext';

/**
 * Order Success Page
 * Displays after successful purchase and triggers Google Survey Opt-in
 */
export default function OrderSuccessPage() {
  const t = useTranslations('orders');
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const [orderData, setOrderData] = useState<{
    orderId: string;
    customerEmail: string;
    deliveryCountry: string;
    estimatedDeliveryDate: string;
  } | null>(null);

  useEffect(() => {
    // Get order details from URL params or your order management system
    const orderId = searchParams.get('orderId') || `ORDER-${Date.now()}`;
    const email = searchParams.get('email') || '';
    
    // Calculate estimated delivery date (e.g., 3 days from now for digital products)
    const estimatedDate = new Date();
    estimatedDate.setDate(estimatedDate.getDate() + 3);
    const formattedDate = estimatedDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    setOrderData({
      orderId,
      customerEmail: email,
      deliveryCountry: searchParams.get('country') || 'US', // Default to US or detect from user
      estimatedDeliveryDate: formattedDate
    });

    // Clear the cart after successful order
    clearCart();
  }, [searchParams, clearCart]);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-transparent flex items-center justify-center">
      {/* Background YANG text */}
      <span
        aria-hidden
        className="pointer-events-none select-none z-0 font-extrabold uppercase opacity-30 text-[51.5vw] text-[#b6e700] max-w-full max-h-full"
        style={{
          lineHeight: 1,
          letterSpacing: '-0.05em',
          userSelect: 'none',
          textAlign: 'center',
          position: 'absolute',
          left: '31%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        YANG
      </span>

      <div className="relative z-10 w-full max-w-2xl mx-auto pt-2 pb-52 px-4">
        <div className="bg-neutral-800 rounded-lg p-8 shadow-xl">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-white">
              {t('success.title')} 🎉
            </h1>
            
            <p className="text-neutral-200 mb-2">
              {t('success.thanks')}
            </p>
            
            {orderData && (
              <div className="bg-neutral-700 rounded p-4 mb-6 w-full">
                <p className="text-sm text-neutral-300 mb-1">
                  <strong>{t('success.orderIdLabel')}</strong> {orderData.orderId}
                </p>
                <p className="text-sm text-neutral-300">
                  <strong>{t('success.emailLabel')}</strong> {orderData.customerEmail || 'Confirmation sent'}
                </p>
              </div>
            )}

            <p className="text-neutral-200 mb-6">
              {t('success.confirmation')}
            </p>

            <div className="flex gap-4">
              <Link
                href="/products"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
              >
                {t('success.continueShopping')}
              </Link>
              <Link
                href="/orders"
                className="inline-block bg-neutral-600 hover:bg-neutral-700 text-white font-bold py-2 px-6 rounded transition"
              >
                {t('success.viewOrders')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Google Survey Opt-in - Only render when order data is available */}
      {orderData && orderData.customerEmail && (
        <GoogleSurveyOptIn
          orderId={orderData.orderId}
          customerEmail={orderData.customerEmail}
          deliveryCountry={orderData.deliveryCountry}
          estimatedDeliveryDate={orderData.estimatedDeliveryDate}
          products={[]} // Add GTINs if you have product GTINs
        />
      )}
    </main>
  );
}

