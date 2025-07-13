import Image from "next/image";

import { ArrowRight, Clock, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DestinationCardProps = {
  name: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  category: string;
  duration: string;
  highlights: string[];
};

const DestinationCard = ({
  name,
  location,
  image,
  price,
  rating,
  description,
  category,
  duration,
  highlights,
}: DestinationCardProps) => {
  return (
    <Card className="group gap-4 overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80"
          }
          alt={`${name} - ${location}`}
          fill
          className="object-cover brightness-75 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium">
            {category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1">
          <Star className="size-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>

      <CardHeader className="space-y-2">
        <CardTitle className="group-hover:text-primary mb-2 text-xl font-bold transition-colors">
          {name}
        </CardTitle>

        <div className="flex items-center gap-1">
          <MapPin className="text-muted-foreground size-4" />
          <span className="text-muted-foreground text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-primary text-lg font-bold">{price}</div>
          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            <Clock className="size-3" />
            <span>{duration}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="leading-relaxed">
          {description}
        </CardDescription>

        {/* Highlights */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Highlights:</h4>
          <div className="flex flex-wrap gap-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-xs"
              >
                {highlight}
              </span>
            ))}
            {highlights.length > 3 && (
              <span className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-xs">
                +{highlights.length - 3} lainnya
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full" variant="outline">
          <span>Lihat Detail</span>
          <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
