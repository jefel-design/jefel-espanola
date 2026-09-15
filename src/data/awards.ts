export type AwardItem = {
  title: string;
  org: string;
  year: string;
  description: string;
  logo?: string;
};

export const awards: readonly AwardItem[] = [
  {
    title: "Best Capstone Project",
    org: "STI College Surigao",
    year: "2025",
    description:
      "Collaboratively proposed and developed a student-focused accommodation platform as part of a three-member thesis team (with Franz Mozar and Raymond Sales). The system enables students to find and rent boarding houses through automated processes and user-centered features.",
    logo: "sti-logo.png",
  },
  {
    title: "Challenge 4: Champion",
    org: "DOST Caraga Startup Pitch Fest",
    year: "2025",
    description:
      "Contributed to the proposal and design of Sentra, a government transparency platform created as a solution to a challenge presented by DOST. The platform enhances public access to information by centralizing data on government projects, services, and public fund utilization.",
    logo: "dostlogo.png",
  },
  {
    title: "3rd Place – Logo Design Competition",
    org: "PSITE Caraga Region 2024",
    year: "2024",
    description:
      "Designed the official logo for PSITE Caraga Region 2024, competing against student participants across the region and earning 3rd place.",
    logo: "psite.png",
  },
];

