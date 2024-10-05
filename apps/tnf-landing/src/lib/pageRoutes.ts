export const pageRoutes = {
  home: '/',
  services: '/services',
  contactUs: '/contact-us',
  portfolio: '/portfolio',
  projectDetails: (projectName: string) => `/portfolio/${projectName}`,
  prices: '/prices',
  qAndA: '/q-and-a',
  blog: process.env.NEXT_PUBLIC_BLOG_PAGE || '',
  privacyTerms: '/privacy-terms',
  careers: '/careers',
};
