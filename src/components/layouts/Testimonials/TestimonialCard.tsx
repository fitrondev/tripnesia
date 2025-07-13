import Image from "next/image";

import { Calendar, MapPin, Quote, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  destination: string;
  trip_date: string;
};

const TestimonialCard = ({
  name,
  location,
  avatar,
  rating,
  review,
  destination,
  trip_date,
}: TestimonialCardProps) => {
  return (
    <Card className="group to-primary/5 hover:shadow-primary/10 relative h-full gap-4 overflow-hidden border-0 bg-gradient-to-br from-white via-white py-0 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* Decorative Background Pattern */}
      <div className="to-primary/5 absolute inset-0 bg-gradient-to-br from-transparent via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
        <Quote className="text-primary size-8" />
      </div>

      <CardContent className="relative space-y-6 p-8">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, index) => (
            <Star
              key={index}
              className="size-5 fill-amber-400 text-amber-400 transition-transform duration-200 group-hover:scale-110"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
          <span className="ml-2 text-sm font-medium text-amber-600">
            {rating}.0
          </span>
        </div>

        {/* Review Text */}
        <div className="relative">
          <p className="text-foreground/80 text-lg leading-relaxed italic">
            &quot;{review}&quot;
          </p>
        </div>

        {/* Customer Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="ring-primary/20 group-hover:ring-primary/30 relative size-16 overflow-hidden rounded-full ring-2 transition-all duration-300 group-hover:ring-4">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="64px"
              />
            </div>
            {/* Online status indicator */}
            <div className="absolute -right-1 -bottom-1 size-5 rounded-full border-2 border-white bg-green-500 shadow-sm" />
          </div>
          <div className="flex-1">
            <h4 className="text-foreground group-hover:text-primary text-lg font-bold transition-colors duration-200">
              {name}
            </h4>
            <div className="text-muted-foreground flex items-center gap-1">
              <MapPin className="size-3" />
              <span className="text-sm font-medium">{location}</span>
            </div>
          </div>
        </div>

        {/* Trip Info */}
        <div className="from-primary/10 via-primary/5 relative overflow-hidden rounded-xl bg-gradient-to-r to-transparent p-4 backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary size-4" />
                <span className="text-muted-foreground text-sm font-medium">
                  Destinasi
                </span>
              </div>
              <span className="text-primary font-bold">{destination}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="text-primary size-4" />
                <span className="text-muted-foreground text-sm font-medium">
                  Perjalanan
                </span>
              </div>
              <span className="text-foreground/80 font-semibold">
                {trip_date}
              </span>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div className="bg-primary/20 absolute -top-2 -right-2 size-8 rotate-45 rounded-lg" />
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
