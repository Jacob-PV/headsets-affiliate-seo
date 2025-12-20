export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(priceUsd: number | null): string {
  if (priceUsd === null) return 'Check Amazon';
  return `$${priceUsd.toFixed(2)}`;
}

export function getAmazonLink(amazonUrl: string): string {
  const affiliateTag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG;
  if (!affiliateTag) return amazonUrl;

  // Add affiliate tag to Amazon URLs
  const url = new URL(amazonUrl);
  url.searchParams.set('tag', affiliateTag);
  return url.toString();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
