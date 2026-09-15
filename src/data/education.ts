export type EducationItem = {
  school: string;
  year: string;
  degree: string;
  description?: string;
  logo?: string;
};

export const education: readonly EducationItem[] = [
  {
    school: "STI College Surigao",
    year: "2021 – 2025",
    degree: "Bachelor of Science in Information Technology",
    description:
      "Built a foundation in programming, then specialized in graphic and web design through self-directed learning and freelance client work.",
    logo: "sti-logo.png",
  },
  {
    school: "STI College Surigao",
    year: "2025",
    degree: "Internship / Academic Outreach",
    description:
      "Conducted face-to-face career presentations for graduating Senior High School students across Surigao City, introducing Graphic Design and Web Design pathways.",
    logo: "sti-logo.png",
  },
];

