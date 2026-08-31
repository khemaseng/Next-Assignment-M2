import { FoodItem, FoodApiResponse, RawMeal } from "@/types/food";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Helper function to map API response to clean FoodItem format
const transformMeal = (meal: RawMeal): FoodItem => ({
  id: meal.idMeal,
  name: meal.strMeal,
  category: meal.strCategory,
  area: meal.strArea,
  instructions: meal.strInstructions,
  image: meal.strMealThumb,
  youtubeUrl: meal.strYoutube,
});

/**
 * Search foods by keyword (e.g., "Chicken", "Arrabiata")
 */
export async function searchFoods(query: string = "Chicken"): Promise<FoodItem[]> {
  try {
    const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`, {
      cache: "no-store", // or next: { revalidate: 3600 } for ISR
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch foods: ${res.statusText}`);
    }

    const data: FoodApiResponse = await res.json();
    if (!data.meals) return [];

    return data.meals.map(transformMeal);
  } catch (error) {
    console.error("Error fetching foods:", error);
    return [];
  }
}

/**
 * Fetch a single food item by ID
 */
export async function getFoodById(id: string): Promise<FoodItem | null> {
  try {
    const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch food with ID ${id}`);
    }

    const data: FoodApiResponse = await res.json();
    if (!data.meals || data.meals.length === 0) return null;

    return transformMeal(data.meals[0]);
  } catch (error) {
    console.error(`Error fetching food ${id}:`, error);
    return null;
  }
}