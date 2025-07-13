import { ArrowRight, MapPin, MessageCircle } from "lucide-react";

import { destinations_data } from "@/constants/data";

import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

import DestinationCard from "./DestinationCard";

const Destinations = () => {
  // Show only first 6 destinations for homepage
  const featured_destinations = destinations_data.slice(0, 6);

  return (
    <section id="destinations" className="bg-gradient py-16 md:py-24">
      <div className="container space-y-16">
        {/* Header Section */}
        <SectionHeader
          badge_text="Destinasi Populer"
          badge_icon={MapPin}
          title="Jelajahi Keindahan"
          highlight_text="Indonesia"
          description="Dari Sabang sampai Merauke, temukan destinasi wisata terbaik Indonesia yang siap memukau mata dan hati Anda. Setiap tempat memiliki cerita dan keunikan tersendiri."
        />

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured_destinations.map(destination => (
            <DestinationCard
              key={destination.id}
              name={destination.name}
              location={destination.location}
              image={destination.image}
              price={destination.price}
              rating={destination.rating}
              description={destination.description}
              category={destination.category}
              duration={destination.duration}
              highlights={destination.highlights}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Masih Banyak Destinasi Menakjubkan Lainnya!
          </h3>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
            Jangan lewatkan kesempatan untuk menjelajahi lebih banyak tempat
            indah di Indonesia. Lihat koleksi lengkap destinasi wisata kami.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Lihat Semua Destinasi
              <ArrowRight className="size-5" />
            </Button>

            <Button variant="outline" size="lg">
              <MessageCircle className="size-5" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
