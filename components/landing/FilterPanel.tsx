'use client';

import { FilterGroup } from '@/types/filter';
import { Button } from '@/components/ui/Button';

interface FilterPanelProps {
  filterGroups: FilterGroup[];
  selectedFilters: { [key: string]: string[] };
  onFilterChange: (groupId: string, optionId: string) => void;
  onReset: () => void;
}

export function FilterPanel({
  filterGroups,
  selectedFilters,
  onFilterChange,
  onReset,
}: FilterPanelProps) {
  const hasActiveFilters = Object.values(selectedFilters).some((filters) => filters.length > 0);

  return (
    <aside className="bg-gray-50 border border-gray-200 rounded p-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-semibold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={onReset}>
            Reset
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {filterGroups.map((group) => (
          <div key={group.id} className="border-b border-gray-200 pb-4 last:border-0">
            <h3 className="font-body text-base font-semibold text-gray-800 mb-3">
              {group.label}
            </h3>

            <div className="space-y-2">
              {group.options.map((option) => {
                const isSelected = selectedFilters[group.id]?.includes(option.id) || false;

                return (
                  <label
                    key={option.id}
                    className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-100 transition-colors min-h-[44px]"
                  >
                    <input
                      type={group.type === 'single' ? 'radio' : 'checkbox'}
                      name={group.type === 'single' ? group.id : undefined}
                      checked={isSelected}
                      onChange={() => onFilterChange(group.id, option.id)}
                      className="w-4 h-4 accent-accent-blue cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
