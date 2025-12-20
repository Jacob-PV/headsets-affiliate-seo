import { notFound } from 'next/navigation';
import {
  getLandingPageBySlug,
  getAllLandingPageSlugs,
  getRelatedLandingPages,
} from '@/lib/landingPages';
import { getProductsByIds } from '@/lib/products';
import { headsetFilters } from '@/lib/filters';
import { generateLandingPageMetadata } from '@/lib/seo/metadata';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateItemListSchema,
} from '@/lib/seo/jsonLd';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { LandingPageClient } from '@/components/landing/LandingPageClient';
import { ComparisonTable } from '@/components/landing/ComparisonTable';
import { FAQ } from '@/components/landing/FAQ';
import { RelatedGuides } from '@/components/landing/RelatedGuides';
import { formatDate } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

export async function generateStaticParams() {
  const slugs = getAllLandingPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = getLandingPageBySlug(params.slug);
  if (!page) return {};
  return generateLandingPageMetadata(page);
}

export default function LandingPage({ params }: { params: { slug: string } }) {
  const page = getLandingPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  const products = getProductsByIds(page.productIds);
  const relatedGuides = getRelatedLandingPages(page.slug, 3);

  // JSON-LD Structured Data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Headsets', url: `${siteUrl}/headsets` },
    { name: page.title, url: `${siteUrl}/headsets/${page.slug}` },
  ]);

  const faqSchema = generateFAQSchema(page.faq);
  const articleSchema = generateArticleSchema(page);
  const itemListSchema = generateItemListSchema(products, page.h1);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Headsets', href: '/headsets' },
            { label: page.title },
          ]}
        />

        {/* Header */}
        <header className="max-w-4xl mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {page.h1}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{page.introMarkdown}</p>
          <p className="text-sm text-gray-500">
            Last updated: {formatDate(page.updatedAt)}
          </p>
        </header>

        {/* Product List with Filters */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold text-gray-900 mb-8">
            Top Picks
          </h2>
          <LandingPageClient initialProducts={products} filterGroups={headsetFilters} />
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold text-gray-900 mb-8">
            Quick Comparison
          </h2>
          <ComparisonTable products={products} />
        </section>

        {/* FAQ */}
        {page.faq.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-3xl font-semibold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <FAQ items={page.faq} />
          </section>
        )}

        {/* Related Guides */}
        <RelatedGuides guides={relatedGuides} />
      </div>
    </>
  );
}
