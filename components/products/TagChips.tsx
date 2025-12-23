'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';

interface TagChipsProps {
  tags: string[];
  limit?: number;
}

export function TagChips({ tags, limit }: TagChipsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayTags = limit && !isExpanded ? tags.slice(0, limit) : tags;
  const hasMore = limit && tags.length > limit;

  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map((tag) => (
        <Badge key={tag} variant="info">
          {tag}
        </Badge>
      ))}
      {hasMore && !isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue cursor-pointer"
          aria-label={`Show ${tags.length - limit} more tags`}
        >
          +{tags.length - limit} more
        </button>
      )}
      {hasMore && isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue cursor-pointer"
          aria-label="Show less tags"
        >
          Show less
        </button>
      )}
    </div>
  );
}
