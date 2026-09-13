export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Yusuf",
    role: "Founder",
    bio: "Leads client relationships and oversees every project from the first meeting to handover.",
  },
  {
    name: "Faisal",
    role: "Designer",
    bio: "Plans layouts, moodboards, and 3D renders, and shapes the final look of every space.",
  },
];
