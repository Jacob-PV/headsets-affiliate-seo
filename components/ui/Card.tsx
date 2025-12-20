import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-gray-200 rounded shadow-sm p-6',
        hover && 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
        className
      )}
    >
      {children}
    </div>
  );
}
