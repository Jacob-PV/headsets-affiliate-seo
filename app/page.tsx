import Link from 'next/link';
import { getAllCategories } from '@/lib/categories';
import { generateHomeMetadata } from '@/lib/seo/metadata';
import { ArrowRight, Headphones, Keyboard } from 'lucide-react';

export const metadata = generateHomeMetadata();

export default function HomePage() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Find Your Perfect Product
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow">
              Expert reviews, detailed comparisons, and honest recommendations
              for gaming gear, peripherals, and tech products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <Link
                  key={category.id}
                  href={`/headsets`}
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  {category.icon === 'Headphones' ? <Headphones className="w-5 h-5" /> : <Keyboard className="w-5 h-5" />}
                  {category.name}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {categories.map(category => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: category.color.bg }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    {category.icon === 'Headphones' ? (
                      <div className="p-4 rounded-xl bg-white shadow-md">
                        <Headphones className="w-8 h-8" style={{ color: category.color.primary }} />
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-white shadow-md">
                        <Keyboard className="w-8 h-8" style={{ color: category.color.primary }} />
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.productCount} products
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {category.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 group-hover:gap-3"
                    style={{ backgroundColor: category.color.primary }}
                  >
                    View {category.landingPageCount} Guides
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                37+
              </div>
              <div className="text-gray-600 font-medium">Products Reviewed</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                39+
              </div>
              <div className="text-gray-600 font-medium">Expert Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Daily
              </div>
              <div className="text-gray-600 font-medium">Updated Content</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
