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

export const destinations_data = [
  {
    id: 1,
    name: "Bali",
    location: "Pulau Dewata",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop&q=80",
    price: "Rp 2.500.000",
    rating: 4.8,
    description:
      "Pulau eksotis dengan pantai indah, budaya yang kaya, dan pengalaman spiritual yang tak terlupakan",
    category: "Pantai",
    duration: "4 Hari 3 Malam",
    highlights: ["Pantai Kuta", "Pura Tanah Lot", "Ubud", "Pantai Sanur"],
  },
  {
    id: 2,
    name: "Yogyakarta",
    location: "Daerah Istimewa Yogyakarta",
    image:
      "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?w=800&h=600&fit=crop&q=80",
    price: "Rp 1.800.000",
    rating: 4.9,
    description:
      "Kota budaya dan sejarah dengan candi-candi bersejarah dan kuliner yang lezat",
    category: "Budaya",
    duration: "3 Hari 2 Malam",
    highlights: ["Candi Borobudur", "Malioboro", "Keraton", "Candi Prambanan"],
  },
  {
    id: 3,
    name: "Raja Ampat",
    location: "Papua Barat",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
    price: "Rp 8.500.000",
    rating: 4.9,
    description:
      "Surga bawah laut dengan biodiversitas tertinggi di dunia, perfect untuk diving dan snorkeling",
    category: "Bahari",
    duration: "5 Hari 4 Malam",
    highlights: ["Diving", "Snorkeling", "Pianemo", "Wayag Island"],
  },
  {
    id: 4,
    name: "Gunung Bromo",
    location: "Jawa Timur",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
    price: "Rp 1.200.000",
    rating: 4.7,
    description:
      "Gunung berapi aktif dengan pemandangan sunrise yang menakjubkan dan lautan pasir yang memukau",
    category: "Gunung",
    duration: "2 Hari 1 Malam",
    highlights: [
      "Sunrise Point",
      "Kawah Bromo",
      "Bukit Teletubbies",
      "Lautan Pasir",
    ],
  },
  {
    id: 5,
    name: "Danau Toba",
    location: "Sumatera Utara",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
    price: "Rp 2.000.000",
    rating: 4.6,
    description:
      "Danau vulkanik terbesar di dunia dengan pulau Samosir yang mempesona dan budaya Batak yang kaya",
    category: "Danau",
    duration: "3 Hari 2 Malam",
    highlights: [
      "Pulau Samosir",
      "Desa Tomok",
      "Air Terjun Sipiso-piso",
      "Budaya Batak",
    ],
  },
  {
    id: 6,
    name: "Labuan Bajo",
    location: "Nusa Tenggara Timur",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    price: "Rp 4.500.000",
    rating: 4.8,
    description:
      "Gerbang menuju Taman Nasional Komodo dengan pemandangan laut yang spektakuler",
    category: "Bahari",
    duration: "4 Hari 3 Malam",
    highlights: ["Pulau Komodo", "Pink Beach", "Padar Island", "Manta Point"],
  },
];
