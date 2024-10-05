import type { MetadataRoute } from 'next';
import { projectCards } from '../lib/data/projectCards';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}/careers`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}/services`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}/q-and-a`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}/privacy-terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    ...projectCards.map((card) => ({
      url: `${process.env.NEXT_PUBLIC_TNF_DOMAIN}/portfolio/${card.key}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
