 
 "use client";

import { useEffect, useState } from "react";
import { searchFoods } from "@/services/foodApi";
import { FoodItem } from "@/types/food";
import FoodGrid from "@/components/FoodGrid";
import Loading from "@/components/Loading";

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
    <main className="container mx-auto px-6 py-10 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Explore Recipes
        </h1>
        <p className="text-base font-normal text-slate-500 dark:text-slate-400">
          Browse our collection of meals or search for your favorite ingredients.
        </p>

        {/* Professional Search Bar */}
        <div className="pt-3 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search food (e.g., chicken, beef, pasta)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 text-sm font-medium border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-900 dark:border-slate-800 text-slate-800 placeholder-slate-400 transition"
            />
          </div>
        </div>
      </div>

      {/* Grid Display */}
      {loading ? <Loading /> : <FoodGrid items={foods} />}
    </main>
  );
}