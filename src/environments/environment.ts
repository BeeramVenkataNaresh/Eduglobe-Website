/**
 * Customer configuration for production builds.
 * Change these values when preparing the application for a different customer.
 * Never add passwords, tokens, or other secrets here: this file is sent to browsers.
 */

export const environment = {
  production: true,

  customer: {
    name: 'Edu Globe Ecademy',
    tagline: 'Learn Beyond Boundaries',
    initials: 'EGE',
    logo: '/images/logo-icon-transparent.png',
    logoName: '/images/logo-name-transparent.png',

    email: 'admin@eduglobeservices.com',
    phone: '+1 (647)-641-3585',
    whatsapp: '+91 92906 68877',
    supportHours: 'Monday–Friday, 9:00 AM–5:00 PM',

    address: {
      line1: 'F.No. 503, Sai Srinivasam Apartments, B/S HDFC Bank, Jeedimetla Village, Suchithra,',
      city: 'Hyderabad',
      region: 'Telangana',
      postalCode: '500065',
      country: 'India',
    },

    website: 'https://eduglobeservices.com',
    googleMapsUrl: 'https://maps.google.com',

    social: {
      instagram: 'https://instagram.com/example',
      linkedin: 'https://linkedin.com/company/example',
      facebook: 'https://facebook.com/example',
      youtube: 'https://youtube.com/example',
    },

    legalName: 'Edu Globe Ecademy.',
    copyrightText: 'Learn Beyond Boundaries.',

    locale: 'en-CA',
    currency: 'INR',

    features: {
      showTestimonials: true,
      showProgrammes: true,
      showContactForm: true,
    },
  },
} as const;
