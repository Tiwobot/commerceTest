'use client';

import { useEffect } from 'react';

interface GoogleSurveyOptInProps {
  orderId: string;
  customerEmail: string;
  deliveryCountry: string;
  estimatedDeliveryDate: string;
  products?: Array<{ gtin: string }>;
}

/**
 * Google Customer Reviews Survey Opt-in Component
 * Triggers the survey opt-in for customers after purchase
 * 
 * Usage: Place this component on your order confirmation/success page
 */
export default function GoogleSurveyOptIn({
  orderId,
  customerEmail,
  deliveryCountry,
  estimatedDeliveryDate,
  products = []
}: GoogleSurveyOptInProps) {
  useEffect(() => {
    // Load Google Platform API
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js?onload=renderOptIn';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Define the renderOptIn function
    window.renderOptIn = function() {
      if (window.gapi) {
        window.gapi.load('surveyoptin', function() {
          window.gapi?.surveyoptin.render({
            // REQUIRED FIELDS
            "merchant_id": 5669089319,
            "order_id": orderId,
            "email": customerEmail,
            "delivery_country": deliveryCountry,
            "estimated_delivery_date": estimatedDeliveryDate,

            // OPTIONAL FIELDS
            "products": products.length > 0 ? products : undefined
          });
        });
      }
    };

    return () => {
      // Cleanup
      const scriptToRemove = document.querySelector('script[src*="platform.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [orderId, customerEmail, deliveryCountry, estimatedDeliveryDate, products]);

  return (
    <div id="google-survey-optin">
      {/* Google Survey Opt-in modal will be rendered here */}
    </div>
  );
}

