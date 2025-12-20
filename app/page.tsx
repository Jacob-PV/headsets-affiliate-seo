import Link from 'next/link';
import { getAllLandingPages } from '@/lib/landingPages';
import { generateHomeMetadata } from '@/lib/seo/metadata';
import { ArrowRight } from 'lucide-react';

export const metadata = generateHomeMetadata();

export default function HomePage() {
  const allGuides = getAllLandingPages();

  // Group guides by category or theme
  const featuredGuides = allGuides.slice(0, 6);
  const platformGuides = allGuides.filter(
    (g) =>
      g.requiredTags.includes('ps5') ||
      g.requiredTags.includes('xbox') ||
      g.requiredTags.includes('pc')
  );
  const budgetGuides = allGuides.filter((g) => g.requiredTags.includes('budget'));

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find the Perfect Gaming Headset
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Expert reviews, detailed comparisons, and buying guides to help you choose the
          best headset for PC, PS5, Xbox, and more. Updated for 2025.
        </p>
        <Link
          href="/headsets"
          className="inline-flex items-center gap-2 bg-cta-primary text-white px-8 py-4 rounded text-lg font-semibold hover:bg-cta-hover transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
        >
          Browse All Guides
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Featured Guides */}
      <section className="mb-16">
        <h2 className="font-display text-3xl font-semibold text-gray-900 mb-8">
          Featured Buying Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/headsets/${guide.slug}`}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-accent-blue hover:shadow-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2"
            >
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3 group-hover:text-accent-blue transition-colors">
                {guide.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{guide.metaDescription}</p>
              <div className="flex items-center gap-1 text-accent-blue font-medium">
                Read guide
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Platform Guides */}
      {platformGuides.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold text-gray-900 mb-8">
            Platform-Specific Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformGuides.slice(0, 3).map((guide) => (
              <Link
                key={guide.slug}
                href={`/headsets/${guide.slug}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-accent-blue hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3 group-hover:text-accent-blue transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{guide.metaDescription}</p>
                <div className="flex items-center gap-1 text-accent-blue font-medium">
                  Read guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Budget Guides */}
      {budgetGuides.length > 0 && (
        <section>
          <h2 className="font-display text-3xl font-semibold text-gray-900 mb-8">
            Budget-Friendly Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetGuides.slice(0, 3).map((guide) => (
              <Link
                key={guide.slug}
                href={`/headsets/${guide.slug}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-accent-blue hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3 group-hover:text-accent-blue transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{guide.metaDescription}</p>
                <div className="flex items-center gap-1 text-accent-blue font-medium">
                  Read guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
