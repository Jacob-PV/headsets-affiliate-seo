import { Check, X } from 'lucide-react';

interface ProsConsListProps {
  pros: string[];
  cons: string[];
}

export function ProsConsList({ pros, cons }: ProsConsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Pros */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          Pros
        </h4>
        <ul className="space-y-2">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-gray-700">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          Cons
        </h4>
        <ul className="space-y-2">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-gray-700">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
