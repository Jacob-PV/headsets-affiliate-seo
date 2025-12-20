import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center gap-2 flex-wrap text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast && item.href ? (
                <>
                  <Link
                    href={item.href}
                    className="text-accent-blue hover:text-accent-blue-hover hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
                </>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
