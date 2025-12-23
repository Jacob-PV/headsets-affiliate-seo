import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { formatDate } from '@/lib/utils';
import keyboardsData from '@/data/keyboards/landingPages.json';

export const metadata = {
  title: 'Mechanical Keyboards - All Guides & Reviews | TechPicks',
  description: 'Browse our comprehensive collection of mechanical keyboard guides. Find the perfect keyboard for gaming, typing, and productivity with expert reviews and detailed comparisons.',
};

export default function KeyboardsPage() {
  const allGuides = keyboardsData.landingPages;

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Mechanical Keyboards' },
        ]}
      />

      <div className="max-w-4xl mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Mechanical Keyboards - All Guides & Reviews
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Browse our comprehensive collection of mechanical keyboard guides. Find the perfect
          keyboard for gaming, typing, and productivity with expert reviews and detailed
          comparisons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allGuides.map((guide: any) => (
          <Link
            key={guide.slug}
            href={`/keyboards/${guide.slug}`}
            className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 focus-visible:outline-offset-2"
          >
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
              {guide.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{guide.metaDescription}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-purple-600 font-medium group-hover:underline">
                Read guide →
              </span>
              <span className="text-gray-500">
                Updated {formatDate(guide.updatedAt)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
