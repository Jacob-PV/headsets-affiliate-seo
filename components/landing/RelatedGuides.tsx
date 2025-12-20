import Link from 'next/link';
import { LandingPage } from '@/types/landingPage';
import { ArrowRight } from 'lucide-react';

interface RelatedGuidesProps {
  guides: LandingPage[];
}

export function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (guides.length === 0) return null;

  return (
    <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
      <h2 className="font-display text-2xl font-semibold text-gray-900 mb-6">
        Related Guides
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/headsets/${guide.slug}`}
            className="group bg-white border border-gray-200 rounded p-4 hover:border-accent-blue hover:shadow-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2"
          >
            <h3 className="font-display text-base font-semibold text-gray-900 mb-2 group-hover:text-accent-blue transition-colors">
              {guide.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {guide.metaDescription}
            </p>
            <div className="flex items-center gap-1 text-sm text-accent-blue font-medium">
              Read guide
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
