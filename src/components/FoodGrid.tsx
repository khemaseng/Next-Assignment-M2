 
 'use client';

import React from 'react';
import { FoodItem } from '@/types/food';
import FoodCard from './FoodCards';

interface FoodGridProps {
  items: FoodItem[];
}

export default function FoodGrid({ items }: FoodGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 border border-slate-200 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-zinc-900/50">
        <p className="text-slate-500 dark:text-zinc-400 text-lg">
          No recipes found matching your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
}