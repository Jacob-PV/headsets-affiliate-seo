import { Metadata } from 'next';
import { LandingPage } from '@/types/landingPage';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
const siteName = 'Headset Finder';

export function generateLandingPageMetadata(page: LandingPage): Metadata {
  const canonical = `${siteUrl}/headsets/${page.slug}`;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: canonical,
      siteName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateHomeMetadata(): Metadata {
  const title = 'Best Gaming Headsets 2025 - Expert Reviews & Buying Guide';
  const description =
    'Find the perfect gaming headset with our comprehensive reviews and buying guides. Compare top headsets for PC, PS5, Xbox, and more.';
  const canonical = siteUrl;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateCategoryMetadata(): Metadata {
  const title = 'Gaming Headsets - All Guides & Reviews';
  const description =
    'Browse all our gaming headset guides covering wired, wireless, budget, premium, and platform-specific recommendations.';
  const canonical = `${siteUrl}/headsets`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
