import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-display text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all"
          >
            TechPicks
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/headsets"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors px-3 py-2"
            >
              Headsets
            </Link>
            <Link
              href="/keyboards"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors px-3 py-2"
            >
              Keyboards
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
