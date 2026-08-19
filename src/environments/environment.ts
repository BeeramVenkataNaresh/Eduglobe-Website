/**
 * Customer configuration for production builds.
 * Change these values when preparing the application for a different customer.
 * Never add passwords, tokens, or other secrets here: this file is sent to browsers.
 */
export const environment = {
  production: true,
  customer: {
    brandName: 'Edu Globe',
    brandTagline: 'Ecademy',
    brandMark: 'EG',
    supportEmail: 'hello@eduglobeecademy.com',
    location: 'Toronto',
  },
} as const;
