import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-display text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Headset Finder
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/headsets"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
            >
              All Guides
            </Link>
            <Link
              href="/disclosure"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
            >
              Disclosure
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
