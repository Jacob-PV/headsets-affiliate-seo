import { Product } from '@/types/product';
import productsData from '@/data/headsets/products.json';

export function getAllProducts(): Product[] {
  return productsData.products;
}

export function getProductById(id: string): Product | undefined {
  return productsData.products.find((p) => p.id === id);
}

export function getProductsByIds(ids: string[]): Product[] {
  return productsData.products.filter((p) => ids.includes(p.id));
}

export function getProductsByTags(tags: string[]): Product[] {
  return productsData.products.filter((product) =>
    tags.every((tag) => product.tags.includes(tag))
  );
}

export function filterProducts(products: Product[], filters: { [key: string]: string[] }): Product[] {
  return products.filter((product) => {
    return Object.entries(filters).every(([key, values]) => {
      if (values.length === 0) return true;

      // Check if product has ALL of the selected tags/values (AND logic)
      return values.every((value) => product.tags.includes(value));
    });
  });
}

export function sortProducts(products: Product[], sortBy: 'price-asc' | 'price-desc' | 'name'): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => {
        if (a.priceUsd === null) return 1;
        if (b.priceUsd === null) return -1;
        return a.priceUsd - b.priceUsd;
      });
    case 'price-desc':
      return sorted.sort((a, b) => {
        if (a.priceUsd === null) return 1;
        if (b.priceUsd === null) return -1;
        return b.priceUsd - a.priceUsd;
      });
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}
