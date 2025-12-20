export interface FilterOption {
  id: string;
  label: string;
  tag: string;
}

export interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
  type: 'single' | 'multiple';
}
