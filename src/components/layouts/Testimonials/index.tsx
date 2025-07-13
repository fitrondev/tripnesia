import { MessageSquareQuote } from "lucide-react";

import { testimonials_data } from "@/constants/data";

import SectionHeader from "@/components/common/SectionHeader";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient py-10 md:py-14">
      <div className="container space-y-12">
        {/* Header Section */}
        <SectionHeader
          badge_text="Testimoni Pelanggan"
          badge_icon={MessageSquareQuote}
          title="Apa Kata Mereka Tentang"
          highlight_text="Tripnesia"
          description="Dengarkan pengalaman langsung dari para wisatawan yang telah menjelajahi Indonesia bersama kami. Kepuasan dan kepercayaan Anda adalah prioritas utama kami."
        />

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials_data.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              review={testimonial.review}
              destination={testimonial.destination}
              trip_date={testimonial.trip_date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
