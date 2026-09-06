// src/app/foods/[id]/page.tsx

import { notFound } from "next/navigation";
import ProductDetail1 from "@/components/ui/ProductDetail1";

const API_BASE = "https://sombobaeb.cheat.casa";

function formatImageUrl(url?: string): string {
  if (!url || typeof url !== "string")
    return "https://placehold.co/600x450?text=Food+Image";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${API_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

function processFoodItem(food: any) {
  if (!food) return null;

  const rawImage =
    food.image ||
    food.imageUrl ||
    food.image_url ||
    food.photo ||
    (Array.isArray(food.images) && food.images[0]);

  const formattedSingle = formatImageUrl(rawImage);

  const formattedArray =
    Array.isArray(food.images) && food.images.length > 0
      ? food.images.map((img: any) =>
          formatImageUrl(typeof img === "string" ? img : img?.url || img?.src),
        )
      : [formattedSingle];

  return { ...food, image: formattedSingle, images: formattedArray };
}

async function getFoodItem(id: string) {
  try {
    // Attempt 1: Fetch directly from single item endpoint
    const res = await fetch(`${API_BASE}/food-items/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      return processFoodItem(data);
    }

    const listRes = await fetch(`${API_BASE}/food-items?skip=0&limit=100`, {
      cache: "no-store",
    });

    if (!listRes.ok) return null;

    const items = await listRes.json();

    const index = Number(id) - 1;
    let targetItem = null;

    if (!isNaN(index) && items[index]) {
      targetItem = items[index];
    } else {
      targetItem = items.find((item: any) => item.id === id) || null;
    }

    return targetItem ? processFoodItem(targetItem) : null;
  } catch (error) {
    console.error("Failed to fetch food item:", error);
    return null;
  }
}

export default async function FoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const food = await getFoodItem(id);

  if (!food) {
    notFound();
  }

  return <ProductDetail1 food={food} />;
}
