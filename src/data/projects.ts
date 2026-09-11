export type Project = {
  id: number;
  slug: string;
  title: string;
  category: "Café" | "Office" | "Bedroom" | "Bathroom";
  location: string;
  year: string;
  style: string;
  area: string;
  coverImage: string;
  description: string;
  challenge: string;
  solution: string;
  materials: string[];
  gallery: string[];
};

// TODO: Replace title / location / year / style / area / description / challenge /
// solution / materials with the real project details — images are already live.
export const projects: Project[] = [
  {
    id: 1,
    slug: "lemaya-cafe",
    title: "Lemaya Café",
    category: "Café",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/cafe-lemaya-01.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: ["/images/projects/cafe-lemaya-01.jpg"],
  },
  {
    id: 2,
    slug: "matcha-cafe",
    title: "Matcha Café",
    category: "Café",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/cafe-matcha-01.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: ["/images/projects/cafe-matcha-01.jpg"],
  },
  {
    id: 3,
    slug: "executive-office-i",
    title: "Executive Office I",
    category: "Office",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/office-executive-01.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: ["/images/projects/office-executive-01.jpg"],
  },
  {
    id: 4,
    slug: "executive-office-ii",
    title: "Executive Office II",
    category: "Office",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/office-executive-02.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: ["/images/projects/office-executive-02.jpg"],
  },
  {
    id: 5,
    slug: "spa-style-powder-room",
    title: "Spa-Style Powder Room",
    category: "Bathroom",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/bathroom-spa-01.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: [
      "/images/projects/bathroom-spa-01.jpg",
      "/images/projects/bathroom-spa-02.jpg",
    ],
  },
  {
    id: 6,
    slug: "warm-wood-retreat",
    title: "Warm Wood Retreat",
    category: "Bedroom",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/bedroom-warmwood-01.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: ["/images/projects/bedroom-warmwood-01.jpg"],
  },
  {
    id: 7,
    slug: "arch-headboard-suite",
    title: "Arch Headboard Suite",
    category: "Bedroom",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/bedroom-archsuite-01.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: [
      "/images/projects/bedroom-archsuite-01.jpg",
      "/images/projects/bedroom-archsuite-02.jpg",
      "/images/projects/bedroom-archsuite-03.jpg",
    ],
  },
  {
    id: 8,
    slug: "floral-garden-bedroom",
    title: "Floral Garden Bedroom",
    category: "Bedroom",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/bedroom-floral-01.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: [
      "/images/projects/bedroom-floral-01.jpg",
      "/images/projects/bedroom-floral-02.jpg",
    ],
  },
  {
    id: 9,
    slug: "maroon-accent-suite",
    title: "Maroon Accent Suite",
    category: "Bedroom",
    location: "TBD",
    year: "2026",
    style: "TBD",
    area: "TBD",
    coverImage: "/images/projects/bedroom-maroon-03.jpg",
    description: "TBD",
    challenge: "TBD",
    solution: "TBD",
    materials: [],
    gallery: [
      "/images/projects/bedroom-maroon-01.jpg",
      "/images/projects/bedroom-maroon-02.jpg",
      "/images/projects/bedroom-maroon-03.jpg",
    ],
  },
];

export const portfolioFilters = [
  "All",
  "Café",
  "Office",
  "Bedroom",
  "Bathroom",
] as const;
