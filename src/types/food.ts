// Raw API response structure from TheMealDB
export interface RawMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube?: string;
}

// Cleaned-up internal application model
export interface FoodItem {
  id: string;
  name: string;
  category: string;
  area: string;
  instructions: string;
  image: string;
  youtubeUrl?: string;
}

export interface FoodApiResponse {
  meals: RawMeal[] | null;
}