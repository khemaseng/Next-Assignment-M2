 
 import Link from "next/link";
import { FoodItem } from "@/types/food";

interface FoodGridProps {
  items: FoodItem[];
}

export default function FoodGrid({ items }: FoodGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 border rounded-xl bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-500 text-lg">No recipes found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <Link 
          key={item.id} 
          href={`/foods/${item.id}`} 
          className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900 flex flex-col"
        >
          <div className="overflow-hidden h-48 bg-gray-100">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-emerald-600 transition-colors">
              {item.name}
            </h3>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-medium">
                {item.category}
              </span>
              <span>{item.area}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}