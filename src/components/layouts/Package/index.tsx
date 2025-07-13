import Link from "next/link";

import { Package2 } from "lucide-react";

import { packages_data } from "@/constants/data";

import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

import PackageCard from "./PackageCard";

const Package = () => {
  return (
    <section id="packages" className="bg-gradient py-10 md:py-14">
      <div className="container space-y-12">
        {/* Header Section */}
        <SectionHeader
          badge_text="Paket Wisata"
          badge_icon={Package2}
          title="Pilihan Paket Terbaik untuk"
          highlight_text="Liburan Impian"
          description="Temukan paket wisata yang sesuai dengan keinginan dan budget Anda. Semua paket dirancang khusus untuk memberikan pengalaman tak terlupakan."
        />

        {/* All Packages */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages_data.map(package_item => (
            <PackageCard key={package_item.id} {...package_item} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm">
            <h3 className="text-foreground mb-4 text-2xl font-bold">
              Tidak Menemukan Paket yang Sesuai?
            </h3>
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
              Tim kami siap membantu merancang paket wisata custom sesuai dengan
              kebutuhan dan budget Anda. Hubungi kami untuk konsultasi gratis!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg">Konsultasi Gratis</Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={"/packages"}>Lihat Semua Paket</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
