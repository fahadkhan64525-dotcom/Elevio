export type Service = {
  num: string;
  name: string;
  description: string;
  icon: "residential" | "kitchen" | "commercial" | "renovation" | "visualization";
};

export const services: Service[] = [
  {
    num: "01",
    name: "Residential",
    description: "Complete home interiors, room by room.",
    icon: "residential",
  },
  {
    num: "02",
    name: "Modular Kitchen",
    description: "Kitchens planned for daily use and easy storage.",
    icon: "kitchen",
  },
  {
    num: "03",
    name: "Commercial Interior",
    description: "Offices, shops, and cafés built for the work they do.",
    icon: "commercial",
  },
  {
    num: "04",
    name: "Renovation & Remodeling",
    description: "Updating existing spaces without starting from zero.",
    icon: "renovation",
  },
  {
    num: "05",
    name: "3D Visualization",
    description: "A clear 3D view of your space before we build it.",
    icon: "visualization",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Meeting",
    description: "Understanding what you need and how you use the space.",
  },
  {
    num: "02",
    title: "Measurement",
    description: "Taking accurate site measurements before any planning.",
  },
  {
    num: "03",
    title: "Furniture Layout",
    description: "Planning where everything goes and how you'll move through the space.",
  },
  {
    num: "04",
    title: "Moodboards",
    description: "Reference images to understand your taste before we design.",
  },
  {
    num: "05",
    title: "3D Render",
    description: "A 3D view of the space so you can see the design and how it will work.",
  },
  {
    num: "06",
    title: "Approval",
    description: "You review the 3D renders and the complete design before we proceed.",
  },
  {
    num: "07",
    title: "Working Drawings",
    description: "Detailed drawings are prepared and signed off before execution.",
  },
  {
    num: "08",
    title: "Site Execution",
    description: "The design is built on site, from start to handover.",
  },
];

// Still Unsplash placeholders — no real "before" (pre-renovation) shots were
// provided, only finished-space photography.
export const beforeAfterData = [
  {
    title: "Living Room Transformation",
    before:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bedroom Renovation",
    before:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Kitchen Upgrade",
    before:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=80",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 0, suffix: "", label: "End-to-End Execution", display: "End-to-End" },
];

export const benefits = [
  "Personalized Design",
  "Transparent Process",
  "Premium Materials",
  "Expert Execution",
  "Attention To Detail",
];

export const hotspotData: Record<
  string,
  { title: string; description: string; top: string; left: string }
> = {
  "1": {
    title: "Premium Lighting",
    description: "Layered lighting designed to create warmth, depth, and architectural character.",
    top: "22%",
    left: "60%",
  },
  "2": {
    title: "Curated Furniture",
    description: "Pieces selected for proportion, comfort, and long-term durability.",
    top: "55%",
    left: "40%",
  },
  "3": {
    title: "Natural Flooring",
    description: "Warm wood and stone finishes that ground the space.",
    top: "85%",
    left: "70%",
  },
  "4": {
    title: "Wall Finish",
    description: "Subtle textures and tones that add quiet depth to every room.",
    top: "35%",
    left: "15%",
  },
  "5": {
    title: "Considered Decor",
    description: "Details layered in with restraint, never for their own sake.",
    top: "65%",
    left: "85%",
  },
};
