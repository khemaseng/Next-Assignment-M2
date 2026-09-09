
"use client";

import { useEffect, useState } from "react";
import { searchFoods } from "@/services/foodApi";
import { FoodItem } from "@/types/food";
import FoodGrid from "@/components/FoodGrid";
import Loading from "@/components/Loading";
import { Plus_Jakarta_Sans } from "next/font/google";

// Google Sans is distributed as "Plus Jakarta Sans" on Google Fonts
const googleSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function FoodsPage() {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("chicken");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await searchFoods(searchTerm || "a");
      setFoods(data);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className={`${googleSans.className} w-full bg-background text-foreground min-h-screen`}>
      <main className="container mx-auto px-6 py-10 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 space-y-1.5">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Explore Recipes
          </h1>
          <p className="text-sm sm:text-base font-normal text-slate-500 dark:text-zinc-400">
            Browse our collection of meals or search for your favorite ingredients.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md">
            <input
              type="text"
              placeholder="Search food (e.g., chicken, beef, pasta)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 text-sm font-medium border border-slate-200 dark:border-zinc-800 rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 transition-all"
            />
          </div>
        </div>

        {/* Grid Display */}
        {loading ? <Loading /> : <FoodGrid items={foods} />}
      </main>
    </div>
  );
}