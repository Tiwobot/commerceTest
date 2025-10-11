'use client';

import { useEffect } from 'react';

/**
 * Google Merchant Rating Badge Component
 * Displays your Google Customer Reviews rating badge
 */
export default function GoogleRatingBadge() {
  useEffect(() => {
    // Load Google Platform API
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js?onload=renderBadge';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Define the renderBadge function
    window.renderBadge = function() {
      const ratingBadgeContainer = document.getElementById('google-rating-badge');
      if (ratingBadgeContainer && window.gapi) {
        window.gapi.load('ratingbadge', function() {
          window.gapi?.ratingbadge.render(ratingBadgeContainer, {
            "merchant_id": 5669089319
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
  }, []);

  return (
    <div id="google-rating-badge" className="my-2">
      {/* Google Rating Badge will be rendered here */}
    </div>
  );
}

