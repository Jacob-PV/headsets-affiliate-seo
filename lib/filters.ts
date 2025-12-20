import { FilterGroup } from '@/types/filter';

export const headsetFilters: FilterGroup[] = [
  {
    id: 'connection',
    label: 'Connection Type',
    type: 'single',
    options: [
      { id: 'wired', label: 'Wired', tag: 'wired' },
      { id: 'wireless', label: 'Wireless', tag: 'wireless' },
    ],
  },
  {
    id: 'platform',
    label: 'Platform',
    type: 'multiple',
    options: [
      { id: 'pc', label: 'PC', tag: 'pc' },
      { id: 'ps5', label: 'PS5', tag: 'ps5' },
      { id: 'xbox', label: 'Xbox', tag: 'xbox' },
      { id: 'switch', label: 'Nintendo Switch', tag: 'switch' },
    ],
  },
  {
    id: 'use-case',
    label: 'Primary Use',
    type: 'multiple',
    options: [
      { id: 'gaming', label: 'Gaming', tag: 'gaming' },
      { id: 'music', label: 'Music', tag: 'music' },
      { id: 'work-calls', label: 'Work/Calls', tag: 'work-calls' },
      { id: 'streaming', label: 'Streaming', tag: 'streaming' },
    ],
  },
  {
    id: 'budget',
    label: 'Price Range',
    type: 'single',
    options: [
      { id: 'budget', label: 'Budget (Under $80)', tag: 'budget' },
      { id: 'mid-range', label: 'Mid-range ($80-$150)', tag: 'mid-range' },
      { id: 'premium', label: 'Premium ($150+)', tag: 'premium' },
    ],
  },
  {
    id: 'features',
    label: 'Features',
    type: 'multiple',
    options: [
      { id: 'has-mic', label: 'Built-in Microphone', tag: 'has-mic' },
      { id: 'noise-cancelling', label: 'Noise Cancelling', tag: 'noise-cancelling' },
      { id: 'open-back', label: 'Open-back', tag: 'open-back' },
      { id: 'audiophile', label: 'Audiophile Grade', tag: 'audiophile' },
    ],
  },
];

export function getFilterGroupById(id: string): FilterGroup | undefined {
  return headsetFilters.find((group) => group.id === id);
}

export function getAllFilterOptions(): string[] {
  return headsetFilters.flatMap((group) => group.options.map((opt) => opt.tag));
}
