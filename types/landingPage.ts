export interface LandingPage {
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  h1: string;
  introMarkdown: string;
  requiredTags: string[];
  optionalFilters: string[];
  productIds: string[];
  faq: FAQItem[];
  updatedAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
