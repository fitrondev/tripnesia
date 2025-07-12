import {
  Calendar,
  Camera,
  Heart,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";

export const navigation_links = [
  { name: "Tentang", href: "#about" },
  { name: "Destinasi", href: "/destinations" },
  { name: "Paket Wisata", href: "/packages" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "Kontak", href: "#contact" },
];

export const about_features = [
  {
    icon: MapPin,
    title: "Destinasi Terpercaya",
    description:
      "Lebih dari 500+ destinasi wisata terbaik di seluruh Indonesia yang telah terpercaya",
  },
  {
    icon: Users,
    title: "Pengalaman Terbaik",
    description:
      "Tim profesional dengan pengalaman lebih dari 10 tahun di industri pariwisata",
  },
  {
    icon: Calendar,
    title: "Fleksibilitas Jadwal",
    description:
      "Paket wisata yang dapat disesuaikan dengan jadwal dan kebutuhan Anda",
  },
  {
    icon: Star,
    title: "Layanan Premium",
    description:
      "Pelayanan berkualitas tinggi dengan rating kepuasan customer 4.9/5",
  },
];

export const about_stats = [
  { number: "10K+", label: "Wisatawan Bahagia" },
  { number: "500+", label: "Destinasi Wisata" },
  { number: "50+", label: "Kota di Indonesia" },
  { number: "98%", label: "Tingkat Kepuasan" },
];

export const about_values = [
  {
    icon: Heart,
    title: "Kecintaan pada Indonesia",
    description: "Kami bangga memperkenalkan keindahan Indonesia kepada dunia",
  },
  {
    icon: Camera,
    title: "Menciptakan Kenangan",
    description: "Setiap perjalanan adalah cerita yang akan diingat selamanya",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Keselamatan dan kenyamanan Anda adalah prioritas utama kami",
  },
];
