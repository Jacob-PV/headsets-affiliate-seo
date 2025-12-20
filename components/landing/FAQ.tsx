'use client';

import { useState } from 'react';
import { FAQItem } from '@/types/landingPage';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded overflow-hidden transition-all duration-200 hover:border-gray-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors min-h-[56px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2"
              aria-expanded={isOpen}
            >
              <h3 className="font-display text-lg font-semibold text-gray-900">
                {item.question}
              </h3>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6 animate-fadeIn">
                <p className="text-base text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
