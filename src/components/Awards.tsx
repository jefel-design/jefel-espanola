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

export function Awards() {
  return (
    <div id="awards" className="space-y-6">
      <RevealOnScroll>
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--text-muted)] md:text-sm">
          Awards & Nominations
        </p>
      </RevealOnScroll>

      <div className="grid gap-5 md:grid-cols-2">
        {awards.map((award, index) => (
          <RevealOnScroll key={index} delayMs={index * 70}>
            <AwardCard award={award} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

function AwardCard({ award }: { award: AwardItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="relative h-full overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="relative z-10 p-5 md:p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
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
                  <Award size={20} style={{ color: "var(--card-icon)" }} />
                )}
              </div>

              <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-3">
                <h3
                  className="font-medium text-base md:text-lg leading-tight"
                  style={{ color: "var(--card-text-primary)" }}
                >
                  {award.title}
                </h3>
              </div>
            </div>

            <span
              className="text-xs md:text-sm shrink-0"
              style={{ color: "var(--card-text-muted)" }}
            >
              {award.year}
            </span>
          </div>
        </div>

        <p
          className="text-sm font-light leading-relaxed"
          style={{ color: "var(--card-text-secondary)" }}
        >
          {award.description}
        </p>

        <div className="mt-5">
          <span
            className="inline-flex rounded-md px-3 py-1 text-[10px] uppercase tracking-[0.12em]"
            style={{
              backgroundColor: "var(--card-tag-bg)",
              color: "var(--card-tag-text)",
            }}
          >
            {award.org}
          </span>
        </div>
      </div>
    </div>
  );
}
