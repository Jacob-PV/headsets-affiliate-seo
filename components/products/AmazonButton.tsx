import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { getAmazonLink } from '@/lib/utils';

interface AmazonButtonProps {
  amazonUrl: string;
  productName: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function AmazonButton({
  amazonUrl,
  productName,
  variant = 'primary',
  className = '',
}: AmazonButtonProps) {
  const affiliateLink = getAmazonLink(amazonUrl);

  const variants = {
    primary:
      'w-full bg-cta-primary text-white hover:bg-cta-hover active:scale-98 px-6 py-3 text-base font-semibold',
    secondary:
      'bg-transparent text-cta-primary border-2 border-cta-primary hover:bg-cta-primary hover:text-white px-4 py-2 text-sm font-medium',
  };

  return (
    <Link
      href={affiliateLink}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`inline-flex items-center justify-center gap-2 rounded transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue ${variants[variant]} ${className}`}
      aria-label={`Check price on Amazon for ${productName}`}
    >
      <span>Check Price on Amazon</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </Link>
  );
}
