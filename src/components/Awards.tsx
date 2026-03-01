import { Award } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

type AwardItem = {
  title: string;
  org: string;
  year: string;
  description: string;
  logo?: string;
};

const awards: AwardItem[] = [
  {
    title: "Best Capstone Project",
    org: "STI College Surigao",
    year: "2025",
    description:
      "Collaboratively proposed and developed a student-focused accommodation platform as part of a three-member thesis team (with Franz Mozar and Raymond Sales). The system enables students to find and rent boarding houses through automated processes and user-centered features.",
    logo: "sti-logo.png",
  },
  {
    title: "DOST Caraga Startup Pitch Fest",
    org: "Challenge 4: Champion",
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

function AwardCard({ award }: { award: AwardItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl p-6 
                 transition-all duration-500 hover:-translate-y-1 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      {/* Hover Gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "var(--card-hover-gradient)" }}
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0"
              style={{ backgroundColor: "var(--card-tag-bg)" }}
            >
              {!imgError && award.logo ? (
                <img
                  src={award.logo}
                  alt={award.title}
                  loading="lazy"
                  decoding="async"
                  className="w-6 h-6 object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Award size={18} style={{ color: "var(--card-icon)" }} />
              )}
            </div>

            <div>
              <h3
                className="font-medium text-lg leading-tight"
                style={{ color: "var(--card-text-primary)" }}
              >
                {award.title}
              </h3>

              <p
                className="text-sm font-light mt-1"
                style={{ color: "var(--card-text-muted)" }}
              >
                {award.org}
              </p>
            </div>
          </div>

          <span
            className="text-sm font-light shrink-0"
            style={{ color: "var(--card-text-muted)" }}
          >
            {award.year}
          </span>
        </div>

        <p
          className="text-sm font-light leading-relaxed"
          style={{ color: "var(--card-text-secondary)" }}
        >
          {award.description}
        </p>
      </div>
    </div>
  );
}

export function Awards() {
  return (
    <section
      id="awards"
      className="pt-12 pb-14 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-10">
        <h2
          className="text-3xl md:text-4xl font-medium tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Awards
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <RevealOnScroll key={index} delayMs={index * 70}>
              <AwardCard award={award} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
