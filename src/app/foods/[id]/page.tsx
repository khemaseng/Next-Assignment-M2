 
 import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getFoodById } from '@/services/foodApi';

interface FoodDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function FoodDetailPage({ params }: FoodDetailProps) {
  const { id } = await params;
  const food = await getFoodById(id);

  if (!food) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 py-12 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/foods"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition"
        >
          ← Back to All Foods
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm overflow-hidden">
          {/* Food Image (Standard HTML img) */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-800">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details & Info */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {food.category && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400">
                    {food.category}
                  </span>
                )}
                {food.area && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {food.area}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {food.name}
              </h1>

              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                  Instructions
                </h2>
                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed max-h-48 overflow-y-auto pr-2">
                  {food.instructions}
                </p>
              </div>
            </div>

            {/* Action Section */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-zinc-800">
              {food.youtubeUrl && (
                <a
                  href={food.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-semibold text-red-600 hover:text-red-700 dark:text-red-400"
                >
                  Watch Recipe Video on YouTube →
                </a>
              )}

              <button className="w-full py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-sm transition">
                Order Meal
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
// localhost:3000/foods/52772 (Corresponds to Teriyaki Chicken)

// localhost:3000/foods/52956 (Corresponds to Chicken Handi)