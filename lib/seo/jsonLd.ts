import { LandingPage } from '@/types/landingPage';
import { Product } from '@/types/product';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
const siteName = 'Headset Finder';

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqItems: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    description: product.shortSummary,
    offers: product.priceUsd
      ? {
          '@type': 'Offer',
          url: product.amazonUrl,
          priceCurrency: 'USD',
          price: product.priceUsd.toFixed(2),
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };
}

export function generateArticleSchema(page: LandingPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.metaDescription,
    datePublished: page.updatedAt,
    dateModified: page.updatedAt,
    author: {
      '@type': 'Organization',
      name: siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
    },
  };
}

export function generateItemListSchema(products: Product[], listName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        url: product.amazonUrl,
      },
    })),
  };
}
