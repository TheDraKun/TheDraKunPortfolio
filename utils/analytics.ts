// Replace this with your actual Measurement ID from Google Analytics
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; 

// Extend the window object to include gtag
declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

// Log the page view
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events (Downloads, Clicks, etc.)
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};