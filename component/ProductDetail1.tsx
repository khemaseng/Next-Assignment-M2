"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, Star, StarHalf } from "lucide-react";
import type { ControllerRenderProps } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const MAX_STARS = 5;

const formSchema = z.object({
  color: z.string().optional(),
  quantity: z.number().min(1),
  size: z.string().optional(),
});

type FormType = z.infer<typeof formSchema>;

export default function ProductDetail1({ food }: { food: any }) {
  const images = food.images?.length
    ? food.images.map((img: string) => ({
        src: img,
        alt: food.name || "Food item",
      }))
    : [
        {
          src: food.image || "/placeholder.jpg",
          alt: food.name || "Food item",
        },
      ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Gallery */}
          <div>
            <ProductImages images={images} />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                    {food.name || food.title}
                  </h1>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <Reviews
                      rate={food.rating || 4.5}
                      totalReviewers={
                        food.reviewsCount ? `${food.reviewsCount}` : "50"
                      }
                    />
                    <Badge variant="secondary">
                      <CircleCheck className="mr-1 size-4" />
                      In Stock
                    </Badge>
                  </div>
                </div>
                <Price
                  regular={food.price}
                  sale={food.salePrice}
                  currency="USD"
                />
              </div>

              <p className="text-muted-foreground">{food.description}</p>
            </div>

            <Button size="lg" className="w-full">
              Add to Order
            </Button>

            <ProductInfo
              info={[
                ...(food.category
                  ? [{ label: "Category", value: food.category }]
                  : []),
                ...(food.ingredients
                  ? [
                      {
                        label: "Ingredients",
                        value: Array.isArray(food.ingredients)
                          ? food.ingredients.join(", ")
                          : food.ingredients,
                      },
                    ]
                  : []),
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const ProductInfo = ({
  info,
}: {
  info: Array<{ label: string; value: string }>;
}) => {
  if (!info || info.length === 0) return null;

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Details</h2>
      <dl>
        {info.map((item, index) => (
          <div
            key={`info-${index}`}
            className="flex items-center justify-between border-b py-3 last:border-b-0">
            <dt className="text-sm font-medium text-muted-foreground">
              {item.label}
            </dt>
            <dd className="text-sm font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

const ProductImages = ({
  images,
}: {
  images: Array<{ src: string; alt: string }>;
}) => {
  return (
    <div className="mx-auto max-w-md">
      {" "}
      {/* Constrains width like a menu item */}
      <Carousel>
        <CarouselContent className="gap-4 md:m-0 md:grid md:grid-cols-1">
          {images.map((img, index) => (
            <CarouselItem key={`img-${index}`} className="md:p-0">
              <AspectRatio
                ratio={4 / 3} // Changed from 1 to 4/3 for a standard menu card aspect ratio
                className="overflow-hidden rounded-xl bg-muted shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block size-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to placeholder if the URL is broken
                    e.currentTarget.src =
                      "https://placehold.co/600x450?text=Food+Image";
                  }}
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const Reviews = ({
  rate,
  totalReviewers,
}: {
  rate: number;
  totalReviewers: string;
}) => {
  const renderStars = () => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="size-4 fill-yellow-500 stroke-yellow-500"
        />,
      );
    }
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative size-4">
          <StarHalf className="absolute top-0 right-0 size-full fill-yellow-500 stroke-yellow-500" />
        </div>,
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="size-4 fill-black/15 stroke-black/15"
        />,
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">{renderStars()}</div>
      <p className="text-sm text-muted-foreground">{totalReviewers} reviews</p>
    </div>
  );
};

const Price = ({
  regular,
  sale,
  currency,
}: {
  regular: number;
  sale?: number;
  currency: string;
}) => {
  if (!regular) return null;
  const format = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency }).format(val);

  return (
    <div className="flex items-center gap-2">
      {sale && (
        <span className="text-2xl font-bold text-primary">{format(sale)}</span>
      )}
      <span
        className={`text-2xl font-bold ${sale ? "text-muted-foreground line-through" : ""}`}>
        {format(regular)}
      </span>
    </div>
  );
};
