export const pageRoutes = {
  home: '/',
  services: '/services',
  contactUs: '/contact-us',
  portfolio: '/portfolio',
  projectDetails: (projectName: any) => `/portfolio/${projectName}`,
  prices: '/prices',
  qAndA: '/q-and-a',
  blog: '/blog',
  privacyTerms: '/privacy-terms',
};
