/**
 * Customer configuration for production builds.
 * Change these values when preparing the application for a different customer.
 * Never add passwords, tokens, or other secrets here: this file is sent to browsers.
 */
export const environment = {
  production: true,
  customer: {
    name: 'Edu Globe',
    tagline: 'Ecademy',
    initials: 'EG',
    email: 'hello@eduglobeecademy.com',
    city: 'Toronto',
  },
} as const;
