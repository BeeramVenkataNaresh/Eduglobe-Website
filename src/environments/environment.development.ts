/** Development customer configuration. Keep non-secret, browser-safe values only. */
export const environment = {
  production: false,
  customer: {
    brandName: 'Edu Globe',
    brandTagline: 'Ecademy',
    brandMark: 'EG',
    supportEmail: 'hello@eduglobeecademy.com',
    location: 'Toronto',
    copyrightYear: 2026,
  },
} as const;
