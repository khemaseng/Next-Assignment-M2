 
 'use client';

import React from 'react';
import Link from 'next/link';

export interface FoodItem {
  id: string;
  name: string;
  image: string;
  category?: string;
  area?: string;
}

interface FoodCardProps {
  item: FoodItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <Link
      href={`/foods/${item.id}`}
      className="group flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-amber-400/50 dark:hover:border-zinc-700 transition-all duration-200"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-zinc-800">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
        <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
          {item.name}
        </h3>

        {/* Footer Badges */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-zinc-800 text-xs">
          <span className="px-2.5 py-1 rounded-md font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/80 dark:text-emerald-400 dark:border-emerald-800/50">
            {item.category || 'Recipe'}
          </span>
          <span className="font-medium text-slate-500 dark:text-zinc-400">
            {item.area || 'International'}
          </span>
        </div>
      </div>
    </Link>
  );
}