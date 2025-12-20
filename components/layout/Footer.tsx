import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-6">
          {/* Affiliate Disclosure */}
          <div className="max-w-3xl text-sm text-gray-600 leading-relaxed">
            <p>
              <strong>Affiliate Disclosure:</strong> We may earn a commission from Amazon
              and other retailers when you purchase through our links. This helps support
              our site at no additional cost to you. We only recommend products we've
              researched and believe provide value.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            <Link
              href="/headsets"
              className="text-sm text-accent-blue hover:text-accent-blue-hover transition-colors"
            >
              All Guides
            </Link>
            <Link
              href="/disclosure"
              className="text-sm text-accent-blue hover:text-accent-blue-hover transition-colors"
            >
              Full Disclosure
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} Headset Finder. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
