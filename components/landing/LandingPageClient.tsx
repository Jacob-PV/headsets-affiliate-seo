'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { FilterGroup } from '@/types/filter';
import { filterProducts } from '@/lib/products';
import { FilterPanel } from './FilterPanel';
import { ProductList } from './ProductList';

interface LandingPageClientProps {
  initialProducts: Product[];
  filterGroups: FilterGroup[];
}

export function LandingPageClient({ initialProducts, filterGroups }: LandingPageClientProps) {
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    const filtered = filterProducts(initialProducts, selectedFilters);
    setFilteredProducts(filtered);
  }, [selectedFilters, initialProducts]);

  const handleFilterChange = (groupId: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const group = filterGroups.find((g) => g.id === groupId);
      if (!group) return prev;

      const currentFilters = prev[groupId] || [];

      if (group.type === 'single') {
        // Radio behavior: select only one
        return {
          ...prev,
          [groupId]: currentFilters.includes(optionId) ? [] : [optionId],
        };
      } else {
        // Checkbox behavior: toggle
        return {
          ...prev,
          [groupId]: currentFilters.includes(optionId)
            ? currentFilters.filter((id) => id !== optionId)
            : [...currentFilters, optionId],
        };
      }
    });
  };

  const handleReset = () => {
    setSelectedFilters({});
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
      <FilterPanel
        filterGroups={filterGroups}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
      />
      <div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}
