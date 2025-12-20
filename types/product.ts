export interface Product {
  id: string;
  name: string;
  brand: string;
  priceUsd: number | null;
  imageUrl: string;
  amazonUrl: string;
  shortSummary: string;
  pros: string[];
  cons: string[];
  tags: string[];
  specs: ProductSpecs;
}

export interface ProductSpecs {
  connection: string;
  hasMic: boolean;
  useCases: string[];
  platforms: string[];
  batteryHours: number | null;
  weightGrams: number | null;
  noiseCancelling: boolean;
  openBack: boolean;
  warranty: string | null;
}
