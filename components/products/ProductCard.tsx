import { Product } from '@/types/product';
import { AmazonButton } from './AmazonButton';
import { ProsConsList } from './ProsConsList';
import { TagChips } from './TagChips';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  rank?: number;
}

export function ProductCard({ product, rank }: ProductCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded shadow-sm p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-md hover:-translate-y-1 focus-within:ring-2 focus-within:ring-accent-blue focus-within:ring-offset-2">
      {/* Rank Badge */}
      {rank && (
        <div className="flex items-center justify-between">
          <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
            #{rank}
          </span>
          {product.priceUsd && (
            <span className="font-mono text-xl font-medium text-gray-900">
              {formatPrice(product.priceUsd)}
            </span>
          )}
        </div>
      )}

      {/* Product Image Placeholder */}
      <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
        <span className="text-gray-400 text-sm">{product.brand}</span>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600">{product.brand}</p>
      </div>

      {/* Summary */}
      <p className="text-gray-700 leading-relaxed">{product.shortSummary}</p>

      {/* Pros & Cons */}
      <ProsConsList pros={product.pros} cons={product.cons} />

      {/* Tags */}
      <TagChips tags={product.tags} limit={6} />

      {/* Specs */}
      <div className="grid grid-cols-2 gap-2 text-sm border-t border-gray-100 pt-4">
        <div>
          <span className="text-gray-500">Connection:</span>
          <span className="ml-2 font-medium text-gray-900 capitalize">
            {product.specs.connection}
          </span>
        </div>
        {product.specs.batteryHours && (
          <div>
            <span className="text-gray-500">Battery:</span>
            <span className="ml-2 font-medium text-gray-900 font-mono">
              {product.specs.batteryHours}h
            </span>
          </div>
        )}
        {product.specs.weightGrams && (
          <div>
            <span className="text-gray-500">Weight:</span>
            <span className="ml-2 font-medium text-gray-900 font-mono">
              {product.specs.weightGrams}g
            </span>
          </div>
        )}
        <div>
          <span className="text-gray-500">Microphone:</span>
          <span className="ml-2 font-medium text-gray-900">
            {product.specs.hasMic ? 'Yes' : 'No'}
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-2">
        <AmazonButton amazonUrl={product.amazonUrl} productName={product.name} />
      </div>
    </article>
  );
}
