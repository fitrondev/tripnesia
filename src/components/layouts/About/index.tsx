import { Compass } from "lucide-react";

import { about_features, about_stats, about_values } from "@/constants/data";

import SectionHeader from "@/components/common/SectionHeader";

import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section id="about" className="bg-gradient py-10 md:py-14">
      <div className="container space-y-16">
        {/* Header Section */}
        <SectionHeader
          badge_text="Tentang Tripnesia"
          badge_icon={Compass}
          title="Menjelajahi Indonesia dengan"
          highlight_text="Passion"
          description="Tripnesia adalah platform travel terpercaya yang telah membantu ribuan wisatawan menjelajahi keindahan Indonesia. Dengan pengalaman bertahun-tahun, kami berkomitmen memberikan pengalaman wisata yang tak terlupakan."
        />

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {about_stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div>
          <h3 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            Mengapa Memilih Tripnesia?
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {about_features.map((feature, index) => (
              <AboutCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="feature"
              />
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            Nilai-Nilai Kami
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {about_values.map((value, index) => (
              <AboutCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                variant="value"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
