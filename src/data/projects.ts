export type Project = {
  id: number;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Kitchen" | "Bedroom";
  secondaryCategory?: "Living Room" | "Bedroom" | "Kitchen";
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

// Replace these Unsplash placeholder URLs with real project photography at:
// /public/images/projects/project-01.webp etc. Keep the same object shape.
export const projects: Project[] = [
  {
    id: 1,
    slug: "urban-elegance",
    title: "Urban Elegance",
    category: "Residential",
    secondaryCategory: "Living Room",
    location: "Noida",
    year: "2026",
    style: "Modern Luxury",
    area: "2500 sq.ft",
    coverImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description:
      "A luxury residence built around warm materials, restrained detailing, and generous natural light — a home that feels calm the moment you step in.",
    challenge:
      "The original layout felt disconnected, with poor light flow between the living and dining zones.",
    solution:
      "We opened up the plan, introduced a layered lighting scheme, and used warm timber tones to unify the space.",
    materials: ["White Oak Veneer", "Italian Marble", "Boucle Upholstery", "Brushed Brass"],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 2,
    slug: "minimal-haven",
    title: "Minimal Haven",
    category: "Residential",
    secondaryCategory: "Living Room",
    location: "Delhi NCR",
    year: "2025",
    style: "Modern Minimal",
    area: "1800 sq.ft",
    coverImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    description:
      "A modern apartment refined down to its essentials, where every material and object earns its place in the room.",
    challenge: "The client wanted a calm, clutter-free home without it feeling cold or sparse.",
    solution:
      "We balanced a minimal material palette with soft textiles, warm lighting, and a few considered statement pieces.",
    materials: ["Limewash Plaster", "Natural Linen", "Blackened Steel", "Travertine"],
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 3,
    slug: "warm-residence",
    title: "The Warm Residence",
    category: "Residential",
    secondaryCategory: "Bedroom",
    location: "Gurgaon",
    year: "2025",
    style: "Contemporary Warm",
    area: "3200 sq.ft",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Layered textiles, timber tones, and soft architectural lighting bring an enveloping warmth to this family home.",
    challenge: "A large family home that needed to feel intimate in every room, not just grand.",
    solution:
      "We used zoned lighting and warm textures throughout so every room, large or small, felt lived-in and calm.",
    materials: ["Walnut Veneer", "Bouclé", "Handwoven Rugs", "Terracotta Tile"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 4,
    slug: "executive-workspace",
    title: "Executive Workspace",
    category: "Commercial",
    location: "Noida",
    year: "2026",
    style: "Modern Corporate",
    area: "6000 sq.ft",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A workspace designed for focus and collaboration in equal measure, with materials chosen to feel premium without being precious.",
    challenge: "An open-plan office that felt noisy, generic, and disconnected from the brand.",
    solution:
      "We introduced acoustic zoning, a warm material palette, and brand-led detailing throughout the floor.",
    materials: ["Micro-cement", "Oak Slat Panelling", "Wool Felt", "Matte Black Steel"],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 5,
    slug: "modern-culinary-space",
    title: "Modern Culinary Space",
    category: "Kitchen",
    secondaryCategory: "Kitchen",
    location: "Delhi NCR",
    year: "2025",
    style: "Modular Contemporary",
    area: "420 sq.ft",
    coverImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description:
      "A modular kitchen built for real cooking — efficient storage, durable surfaces, and a quiet material palette.",
    challenge: "A tight kitchen footprint that needed to support serious daily cooking.",
    solution:
      "We maximised vertical storage, used a durable quartz worktop, and kept the material palette calm and tonal.",
    materials: ["Matte Laminate", "Quartz Worktop", "Brushed Steel Handles"],
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 6,
    slug: "serene-bedroom",
    title: "Serene Bedroom",
    category: "Bedroom",
    secondaryCategory: "Bedroom",
    location: "Noida",
    year: "2026",
    style: "Soft Contemporary",
    area: "340 sq.ft",
    coverImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    description:
      "A personal retreat designed around rest — muted tones, layered lighting, and textures that invite touch.",
    challenge: "A bedroom that was overly bright and offered no sense of retreat from the rest of the home.",
    solution:
      "We softened the light with layered fixtures and dressed the room in tactile, muted textiles.",
    materials: ["Boucle", "Washed Linen", "Oak", "Handloom Wool"],
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export const portfolioFilters = [
  "All",
  "Residential",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Commercial",
] as const;
