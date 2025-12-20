import { Badge } from '@/components/ui/Badge';

interface TagChipsProps {
  tags: string[];
  limit?: number;
}

export function TagChips({ tags, limit }: TagChipsProps) {
  const displayTags = limit ? tags.slice(0, limit) : tags;

  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map((tag) => (
        <Badge key={tag} variant="info">
          {tag}
        </Badge>
      ))}
      {limit && tags.length > limit && (
        <Badge variant="default">+{tags.length - limit} more</Badge>
      )}
    </div>
  );
}
