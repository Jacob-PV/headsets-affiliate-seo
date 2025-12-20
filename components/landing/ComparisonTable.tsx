'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import { AmazonButton } from '@/components/products/AmazonButton';
import { formatPrice } from '@/lib/utils';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ComparisonTableProps {
  products: Product[];
}

type SortField = 'name' | 'price' | 'weight' | 'battery';
type SortDirection = 'asc' | 'desc';

export function ComparisonTable({ products }: ComparisonTableProps) {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = (a.priceUsd || 9999) - (b.priceUsd || 9999);
        break;
      case 'weight':
        comparison = (a.specs.weightGrams || 9999) - (b.specs.weightGrams || 9999);
        break;
      case 'battery':
        comparison = (a.specs.batteryHours || 0) - (b.specs.batteryHours || 0);
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="overflow-x-auto border border-gray-200 rounded">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th
              className="sticky left-0 z-10 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center gap-1">
                Product
                <SortIcon field="name" />
              </div>
            </th>
            <th
              className="px-4 py-3 text-left font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSort('price')}
            >
              <div className="flex items-center gap-1">
                Price
                <SortIcon field="price" />
              </div>
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Connection</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Mic</th>
            <th
              className="px-4 py-3 text-left font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSort('battery')}
            >
              <div className="flex items-center gap-1">
                Battery
                <SortIcon field="battery" />
              </div>
            </th>
            <th
              className="px-4 py-3 text-left font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSort('weight')}
            >
              <div className="flex items-center gap-1">
                Weight
                <SortIcon field="weight" />
              </div>
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product, index) => (
            <tr
              key={product.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="sticky left-0 z-10 bg-white px-4 py-3 font-semibold text-gray-900">
                <div className="flex flex-col gap-1">
                  <span>{product.name}</span>
                  <span className="text-xs font-normal text-gray-600">{product.brand}</span>
                </div>
              </td>
              <td className="px-4 py-3 font-mono text-gray-700">
                {formatPrice(product.priceUsd)}
              </td>
              <td className="px-4 py-3 text-gray-700 capitalize">
                {product.specs.connection}
              </td>
              <td className="px-4 py-3 text-gray-700">
                {product.specs.hasMic ? 'Yes' : 'No'}
              </td>
              <td className="px-4 py-3 font-mono text-gray-700">
                {product.specs.batteryHours ? `${product.specs.batteryHours}h` : 'N/A'}
              </td>
              <td className="px-4 py-3 font-mono text-gray-700">
                {product.specs.weightGrams ? `${product.specs.weightGrams}g` : 'N/A'}
              </td>
              <td className="px-4 py-3">
                <AmazonButton
                  amazonUrl={product.amazonUrl}
                  productName={product.name}
                  variant="secondary"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
