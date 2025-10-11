// Google Platform API type declarations

declare global {
  interface Window {
    renderBadge?: () => void;
    renderOptIn?: () => void;
    gapi?: {
      load: (api: string, callback: () => void) => void;
      ratingbadge: {
        render: (container: HTMLElement, options: { merchant_id: number }) => void;
      };
      surveyoptin: {
        render: (options: {
          merchant_id: number;
          order_id: string;
          email: string;
          delivery_country: string;
          estimated_delivery_date: string;
          products?: Array<{ gtin: string }>;
        }) => void;
      };
    };
  }
}

export {};

