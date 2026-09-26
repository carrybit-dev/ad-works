import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fardintareque.com';

  // Only canonical URLs belong in a sitemap — fragments (#pricing, #proofs,
  // …) are not separate indexable URLs and are ignored by crawlers.
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
