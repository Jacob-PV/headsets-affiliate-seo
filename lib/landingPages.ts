import { LandingPage } from '@/types/landingPage';
import landingPagesData from '@/data/headsets/landingPages.json';

export function getAllLandingPages(): LandingPage[] {
  return landingPagesData.landingPages;
}

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPagesData.landingPages.find((page) => page.slug === slug);
}

export function getLandingPagesByCategory(category: string): LandingPage[] {
  return landingPagesData.landingPages.filter((page) => page.category === category);
}

export function getRelatedLandingPages(currentSlug: string, limit: number = 3): LandingPage[] {
  const currentPage = getLandingPageBySlug(currentSlug);
  if (!currentPage) return [];

  // Get pages with similar tags
  const allPages = getAllLandingPages();
  const relatedPages = allPages
    .filter((page) => page.slug !== currentSlug)
    .map((page) => {
      // Calculate similarity score based on shared required tags
      const sharedTags = currentPage.requiredTags.filter((tag) =>
        page.requiredTags.includes(tag)
      );
      return {
        page,
        score: sharedTags.length,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.page);

  return relatedPages;
}

export function getAllLandingPageSlugs(): string[] {
  return landingPagesData.landingPages.map((page) => page.slug);
}
