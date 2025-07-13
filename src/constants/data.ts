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

export const testimonials_data = [
  {
    id: 1,
    name: "Sarah Wijaya",
    location: "Jakarta",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80&crop=face",
    rating: 5,
    review:
      "Perjalanan ke Bali bersama Tripnesia sangat luar biasa! Pelayanannya profesional dan destinasi yang dipilih sangat menakjubkan. Pasti akan booking lagi untuk trip selanjutnya.",
    destination: "Bali",
    trip_date: "Desember 2024",
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    location: "Bandung",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80&crop=face",
    rating: 5,
    review:
      "Trip ke Raja Ampat adalah pengalaman diving terbaik dalam hidup saya! Tim Tripnesia sangat berpengalaman dan memastikan keamanan kami selalu terjaga. Highly recommended!",
    destination: "Raja Ampat",
    trip_date: "November 2024",
  },
  {
    id: 3,
    name: "Putri Sari",
    location: "Surabaya",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80&crop=face",
    rating: 5,
    review:
      "Sunrise di Gunung Bromo bersama Tripnesia tak akan pernah saya lupakan. Guide yang ramah dan persiapan yang matang membuat perjalanan ini sangat berkesan.",
    destination: "Gunung Bromo",
    trip_date: "Oktober 2024",
  },
];

export const packages_data = [
  {
    id: 1,
    name: "Paket Honeymoon Bali",
    category: "Romantis",
    duration: "5 Hari 4 Malam",
    price: 4500000,
    original_price: 5500000,
    discount: 18,
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop&q=80",
    rating: 4.9,
    reviews_count: 128,
    description:
      "Paket romantis untuk pasangan dengan pengalaman tak terlupakan di Pulau Dewata",
    highlights: [
      "Hotel bintang 5 dengan private pool",
      "Candlelight dinner di pantai",
      "Spa couple treatment",
      "Foto pre-wedding gratis",
      "Private tour guide",
    ],
    includes: [
      "Tiket pesawat PP",
      "Hotel 4 malam",
      "Transportasi selama tour",
      "Makan 3x sehari",
      "Guide profesional",
      "Tiket masuk wisata",
    ],
    destinations: ["Ubud", "Pantai Kuta", "Tanah Lot", "Uluwatu", "Seminyak"],
    max_participants: 2,
    departure_dates: ["15 Feb 2025", "1 Mar 2025", "15 Mar 2025"],
    featured: true,
  },
  {
    id: 2,
    name: "Adventure Raja Ampat",
    category: "Petualangan",
    duration: "6 Hari 5 Malam",
    price: 8500000,
    original_price: 10000000,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
    rating: 4.8,
    reviews_count: 95,
    description:
      "Eksplorasi surga bawah laut dengan biodiversitas terkaya di dunia",
    highlights: [
      "Diving di 4 spot terbaik",
      "Snorkeling dengan Manta Ray",
      "Island hopping Pianemo",
      "Photography underwater",
      "Sunset di Arborek Village",
    ],
    includes: [
      "Penerbangan Jakarta-Sorong PP",
      "Speedboat antar pulau",
      "Homestay tradisional",
      "Peralatan diving lengkap",
      "Underwater camera",
      "Guide diving bersertifikat",
    ],
    destinations: ["Pianemo", "Wayag", "Arborek", "Yenbuba", "Friwen Wall"],
    max_participants: 8,
    departure_dates: ["20 Feb 2025", "5 Mar 2025", "20 Mar 2025"],
    featured: true,
  },
  {
    id: 3,
    name: "Wisata Budaya Jogja",
    category: "Budaya",
    duration: "4 Hari 3 Malam",
    price: 2200000,
    original_price: 2700000,
    discount: 19,
    image:
      "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?w=800&h=600&fit=crop&q=80",
    rating: 4.7,
    reviews_count: 156,
    description:
      "Jelajahi kekayaan budaya dan sejarah Daerah Istimewa Yogyakarta",
    highlights: [
      "Sunrise di Candi Borobudur",
      "Workshop batik tradisional",
      "Kuliner khas Gudeg Yu Djum",
      "Pertunjukan wayang kulit",
      "Belanja oleh-oleh Malioboro",
    ],
    includes: [
      "Hotel heritage di pusat kota",
      "Transportasi AC",
      "Tiket masuk semua wisata",
      "Makan tradisional",
      "Guide berlisensi",
      "Oleh-oleh khas Jogja",
    ],
    destinations: [
      "Borobudur",
      "Prambanan",
      "Keraton",
      "Malioboro",
      "Kotagede",
    ],
    max_participants: 15,
    departure_dates: ["10 Feb 2025", "25 Feb 2025", "10 Mar 2025"],
    featured: false,
  },
  {
    id: 4,
    name: "Family Trip Lombok",
    category: "Keluarga",
    duration: "4 Hari 3 Malam",
    price: 3200000,
    original_price: 3800000,
    discount: 16,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&q=80",
    rating: 4.6,
    reviews_count: 89,
    description:
      "Liburan keluarga yang sempurna dengan pemandangan alam yang menakjubkan",
    highlights: [
      "Pantai Pink yang eksotis",
      "Gili Trawangan island hopping",
      "Snorkeling untuk pemula",
      "Sunset point Malimbu",
      "Aktivitas ramah anak",
    ],
    includes: [
      "Tiket pesawat keluarga",
      "Resort family room",
      "Fast boat ke Gili",
      "Peralatan snorkeling",
      "Kids club activities",
      "Family photoshoot",
    ],
    destinations: [
      "Pantai Pink",
      "Gili Trawangan",
      "Malimbu Hill",
      "Senggigi",
      "Pusuk Monkey",
    ],
    max_participants: 20,
    departure_dates: ["12 Feb 2025", "26 Feb 2025", "12 Mar 2025"],
    featured: false,
  },
];
