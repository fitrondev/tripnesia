import Image from "next/image";

import { CheckCircle, Clock, MapPin, Star, Tag, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type PackageCardProps = {
  id: number;
  name: string;
  category: string;
  duration: string;
  price: number;
  original_price: number;
  discount: number;
  image: string;
  rating: number;
  reviews_count: number;
  description: string;
  highlights: string[];
  includes: string[];
  destinations: string[];
  max_participants: number;
  departure_dates: string[];
  featured: boolean;
};

const PackageCard = ({
  name,
  category,
  duration,
  price,
  original_price,
  discount,
  image,
  rating,
  reviews_count,
  description,
  highlights,
  destinations,
  max_participants,
  featured,
}: PackageCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group hover:shadow-primary/10 relative h-full gap-4 overflow-hidden border-0 bg-white pt-0 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-2 py-1 text-xs font-bold text-white shadow-lg">
          ⭐ Featured
        </div>
      )}

      {/* Discount Badge */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-lg">
        <Tag className="size-3" />
        {discount}%
      </div>

      {/* Image Section */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="text-muted-foreground rounded-full bg-white/90 px-2 py-1 text-xs font-semibold backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Card Header */}
      <CardHeader>
        <div>
          <h3 className="group-hover:text-primary text-muted-foreground mb-1 line-clamp-2 text-lg font-bold transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
            {description}
          </p>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="size-3 fill-amber-400 text-amber-400" />
            <span className="text-muted-foreground text-sm font-semibold">
              {rating}
            </span>
          </div>
          <span className="text-muted-foreground text-xs">
            ({reviews_count})
          </span>
        </div>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="space-y-3">
        {/* Quick Info */}
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <Clock className="text-primary size-3" />
            <span className="text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-primary size-3" />
            <span className="text-muted-foreground">
              Max {max_participants}
            </span>
          </div>
        </div>

        {/* Destinations */}
        <div>
          <div className="mb-1 flex items-center gap-1">
            <MapPin className="text-primary size-3" />
            <span className="text-muted-foreground text-xs font-medium">
              Destinasi:
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {destinations.slice(0, 2).map((destination, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs"
              >
                {destination}
              </span>
            ))}
            {destinations.length > 2 && (
              <span className="text-muted-foreground rounded bg-gray-100 px-2 py-0.5 text-xs">
                +{destinations.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h4 className="text-muted-foreground mb-1 text-xs font-medium">
            Highlight:
          </h4>
          <div className="space-y-0.5">
            {highlights.slice(0, 2).map((highlight, index) => (
              <div key={index} className="flex items-start gap-1">
                <CheckCircle className="mt-0.5 size-2 flex-shrink-0 text-green-500" />
                <span className="text-muted-foreground line-clamp-1 text-xs">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter>
        <div className="w-full space-y-3">
          <div className="text-center">
            <div className="mb-1 flex items-center justify-center gap-2">
              <span className="text-primary text-lg font-bold">
                {formatPrice(price)}
              </span>
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(original_price)}
              </span>
            </div>
            <span className="text-muted-foreground text-xs">per orang</span>
          </div>
          <Button size="sm" className="w-full">
            Detail
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
