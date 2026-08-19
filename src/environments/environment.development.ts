/** Development customer configuration. Keep non-secret, browser-safe values only. */
export const environment = {
  production: false,
  customer: {
    name: 'Edu Globe',
    tagline: 'Ecademy',
    initials: 'EG',
    email: 'hello@eduglobeecademy.com',
    city: 'Toronto',
  },
} as const;
