import { Award } from "lucide-react";
import { useState } from "react";
import { publicAsset } from "../lib/assets";

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

export function AwardsSection() {
  return (
    <section
      id="awards"
      className="content-section"
    >
      <div className="section-container slide-fade-up slide-fade-up-delay-2">
        <div className="card-grid">
          {awards.map((award) => (
            <AwardCard key={`${award.title}-${award.year}`} award={award} />
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="section-content-divider" />
    </section>
  );
}

function AwardCard({ award }: { award: AwardItem }) {
  const [imgError, setImgError] = useState(false);
  const logoSrc = award.logo && !imgError ? publicAsset(award.logo) : null;

  return (
    <div className="portfolio-card">
      <div className="portfolio-card-content">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="portfolio-icon-frame">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={award.title}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Award size={20} className="portfolio-card-icon" />
              )}
            </div>

            <h3 className="portfolio-card-title">
              {award.title}
            </h3>
          </div>

          <span className="portfolio-card-meta shrink-0">
            {award.year}
          </span>
        </div>

        <p className="portfolio-card-copy">
          {award.description}
        </p>

        <div className="mt-5">
          <span className="portfolio-tag">
            {award.org}
          </span>
        </div>
      </div>
    </div>
  );
}
