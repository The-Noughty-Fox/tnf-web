export const pageRoutes = {
  home: {
    label: 'Home',
    href: import.meta.env.PUBLIC_TNF_DOMAIN,
  },
  blog: {
    label: 'Blog',
    href: '/',
  },
  portfolio: {
    label: 'Portfolio',
    href: `${import.meta.env.PUBLIC_TNF_DOMAIN}/portfolio`,
  },
  qAndA: {
    label: 'Q & A',
    href: `${import.meta.env.PUBLIC_TNF_DOMAIN}/q-and-a`,
  },
  privacyAndTerms: {
    label: 'Privacy & Terms',
    href: `${import.meta.env.PUBLIC_TNF_DOMAIN}/privacy-and-terms`,
  },
  services: {
    label: 'Services',
    href: `${import.meta.env.PUBLIC_TNF_DOMAIN}/services`,
  },
  contacts: {
    label: 'Contacts',
    href: `${import.meta.env.PUBLIC_TNF_DOMAIN}/contact-us`,
  },
  careers: {
    label: 'Careers',
    href: `${import.meta.env.PUBLIC_TNF_DOMAIN}/careers`,
  },
  postDetails: {
    label: 'Post Details',
    href: (slug: string) => `/posts/${slug}`,
  },
};
