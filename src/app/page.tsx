/**
 * v0 by Vercel.
 * @see https://v0.app/t/FcZtQ81FJOW
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  category: string;
  price: number;
  calories: number;
  preparation_time_minutes: number;
  image_url: string;
  average_rating: number | null;
  rating_count: number;
}

async function getFoodItems(): Promise<FoodItem[]> {
  const res = await fetch(
    "https://sombobaeb.cheat.casa/food-items?skip=0&limit=100",
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch food items");
  return res.json();
}

async function FeaturedFoods() {
  const items = await getFoodItems();
  const foodItems = items.filter((item) => item.category === "food");
  const featured = foodItems.slice(1, 5);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-8">
      {featured.map((item) => (
        <Card key={item.id}>
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full aspect-video overflow-hidden rounded-t-lg object-cover"
          />
          <CardContent className="space-y-2 p-4">
            <h3 className="text-lg font-semibold line-clamp-1">{item.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.cuisine} • ${item.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-1 text-yellow-500">
              <div className="h-4 w-4" />
              <span className="text-sm font-medium">
                {item.average_rating ?? "N/A"}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({item.rating_count})
              </span>
            </div>
            <Button size="sm" className="w-full">
              Order Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

async function SpecialOffers() {
  const items = await getFoodItems();
  const foodItems = items.filter((item) => item.category === "food");
  const offers = foodItems.slice(5, 9);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-8">
      {offers.map((item) => (
        <Card key={item.id}>
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full aspect-video overflow-hidden rounded-t-lg object-cover"
          />
          <CardContent className="space-y-2 p-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
              ${item.price.toFixed(2)}
            </div>
            <h3 className="text-lg font-semibold line-clamp-1">{item.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              {item.description}
            </p>
            <Button size="sm" className="w-full">
              Order Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default async function Component() {
  const items = await getFoodItems();
  const foodItems = items.filter((item) => item.category === "food");
  const heroImage = foodItems[0]?.image_url ?? "/placeholder.svg";

  return (
    <div className="overflow-x-hidden">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              src={heroImage}
              alt="Hero"
              className="mx-auto w-full max-w-[550px] aspect-video overflow-hidden rounded-xl object-cover lg:order-last lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Authentic Khmer Cuisine Delivered
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore traditional Cambodian dishes from the best local
                  restaurants and have them delivered straight to your door.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <form className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search for Khmer dishes or cuisines"
                    className="pl-10 pr-8 h-10 rounded-md border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:ring-gray-300"
                  />
                </form>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="ghost" size="sm" className="rounded-full">
                  Soups
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  Grilled
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  Noodles
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  Seafood
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  Desserts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Popular Khmer Dishes
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover authentic Cambodian flavors from the best local
                restaurants.
              </p>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-12">
                <p className="text-gray-500">Loading restaurants...</p>
              </div>
            }
          >
            <FeaturedFoods />
          </Suspense>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Must-Try Favorites
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don&apos;t miss out on these beloved Cambodian classics.
              </p>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-12">
                <p className="text-gray-500">Loading offers...</p>
              </div>
            }
          >
            <SpecialOffers />
          </Suspense>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Download Our App
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get authentic Khmer food delivered right to your doorstep with our
              easy-to-use mobile app.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Download on iOS
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Download on Android
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
