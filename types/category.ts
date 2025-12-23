export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: CategoryColor;
  productCount: number;
  landingPageCount: number;
}

export interface CategoryColor {
  primary: string;
  secondary: string;
  light: string;
  bg: string;
}

export type CategorySlug = 'headsets' | 'keyboards';
