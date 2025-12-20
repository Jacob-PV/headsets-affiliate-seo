'use client';

import { Product } from '@/types/product';
import { ProductCard } from '@/components/products/ProductCard';

interface ProductListProps {
  products: Product[];
  showRanking?: boolean;
}

export function ProductList({ products, showRanking = true }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
          No products match your filters
        </h3>
        <p className="text-gray-600">
          Try adjusting or clearing your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          rank={showRanking ? index + 1 : undefined}
        />
      ))}
    </div>
  );
}
