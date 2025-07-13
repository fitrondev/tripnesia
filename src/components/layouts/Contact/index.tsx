import { Mail } from "lucide-react";

import { contact_cards } from "@/constants/data";

import SectionHeader from "@/components/common/SectionHeader";

const Contact = () => {
  return (
    <section className="bg-gradient py-10 md:py-14">
      <div className="container space-y-12">
        <SectionHeader
          badge_text="Kontak Kami"
          badge_icon={Mail}
          title="Hubungi Kami"
          description="Jika Anda memiliki pertanyaan, saran, atau ingin bekerja sama dengan Tripnesia, silakan hubungi kami melalui informasi di bawah ini."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contact_cards.map(card => {
            const Icon = card.icon;
            return (
              <div
                key={card._field}
                className="bg-card border-border flex flex-col items-center rounded-2xl border p-8 text-center shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-primary/10 mb-4 flex size-12 items-center justify-center rounded-full">
                  <Icon className="text-primary size-6" />
                </div>
                <h3 className="text-primary mb-1 text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="text-foreground text-base">{card.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
