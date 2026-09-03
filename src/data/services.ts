export type Service = {
  num: string;
  name: string;
  description: string;
  previewImage: string;
};

export const services: Service[] = [
  {
    num: "01",
    name: "Residential Interiors",
    description: "Homes designed around your lifestyle.",
    previewImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "02",
    name: "Modular Kitchens",
    description: "Functional kitchens with modern aesthetics.",
    previewImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "03",
    name: "Commercial Interiors",
    description: "Workspaces designed for productivity and impact.",
    previewImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "04",
    name: "Living Room Design",
    description: "Spaces made for connection and comfort.",
    previewImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "05",
    name: "Bedroom Design",
    description: "Personal spaces designed for rest.",
    previewImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "06",
    name: "Renovation & Remodeling",
    description: "Transforming existing spaces into something extraordinary.",
    previewImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "07",
    name: "3D Visualization",
    description: "See your dream space before execution.",
    previewImage:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Consultation",
    description: "Understanding your vision, lifestyle, and requirements.",
  },
  {
    num: "02",
    title: "Space Planning",
    description: "Creating functional layouts optimized for everyday living.",
  },
  {
    num: "03",
    title: "3D Visualization",
    description: "Bringing your future space to life before execution.",
  },
  {
    num: "04",
    title: "Material Selection",
    description: "Selecting textures, finishes, furniture, and lighting.",
  },
  {
    num: "05",
    title: "Execution",
    description: "Turning carefully planned designs into reality.",
  },
  {
    num: "06",
    title: "Final Styling",
    description: "Adding the finishing details that complete the space.",
  },
];

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
  { value: 100, suffix: "+", label: "Spaces Designed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
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
