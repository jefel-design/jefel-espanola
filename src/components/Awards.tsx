import { Award } from "lucide-react";
import { useState } from "react";

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
    <section
      id="awards"
      className="pt-0 pb-0"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto px-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {awards.map((award) => (
            <AwardCard key={`${award.title}-${award.year}`} award={award} />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="-mt-px h-px w-full"
        style={{ backgroundColor: "rgba(37, 37, 37, 0.54)" }}
      />
    </section>
  );
}

function AwardCard({ award }: { award: AwardItem }) {
  const [imgError, setImgError] = useState(false);
  const showLogo = award.logo && !imgError;

  return (
    <div
      className="relative h-full overflow-hidden border border-[var(--grid-line)]"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="relative z-10 p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg"
              style={{ backgroundColor: "var(--card-tag-bg)" }}
            >
              {showLogo ? (
                <img
                  src={award.logo}
                  alt={award.title}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Award size={20} style={{ color: "var(--card-icon)" }} />
              )}
            </div>

            <h3
              className="font-body text-[18px] font-normal leading-7"
              style={{ color: "var(--card-text-primary)" }}
            >
              {award.title}
            </h3>
          </div>

          <span
            className="shrink-0 font-body text-[14px]"
            style={{ color: "var(--card-text-muted)" }}
          >
            {award.year}
          </span>
        </div>

        <p
          className="font-body text-[16px] font-normal leading-7"
          style={{ color: "var(--card-text-secondary)" }}
        >
          {award.description}
        </p>

        <div className="mt-5">
          <span
            className="inline-flex border border-[var(--grid-line)] px-3 py-1 font-body text-[14px]"
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