import { Award } from "lucide-react";
import { useState } from "react";
import { publicAsset } from "../lib/assets";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

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

export function AwardsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [primaryAward, ...additionalAwards] = awards;

  return (
    <section
      id="awards"
      className="content-section"
    >
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            title="Awards"
            isExpanded={isExpanded}
            controls="awards-additional-content"
            onToggle={() => setIsExpanded((current) => !current)}
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="section-card-list">
            <AwardCard award={primaryAward} />
          </div>
        </RevealOnScroll>

        <div
          id="awards-additional-content"
          className={`expandable-panel ${isExpanded ? "is-visible" : ""}`}
          aria-hidden={!isExpanded}
        >
          <div className="expandable-panel-inner">
            <div className="section-card-list">
              {additionalAwards.map((award) => (
                <AwardCard
                  key={`${award.title}-${award.year}`}
                  award={award}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award }: { award: AwardItem }) {
  const [imgError, setImgError] = useState(false);
  const logoSrc = award.logo && !imgError ? publicAsset(award.logo) : null;

  return (
    <div className="portfolio-card">
      <div className="portfolio-card-content">
        <div className="entry-card-header">
          <div className="entry-card-identity">
            <div className="portfolio-icon-frame">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={`${award.org} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Award size={20} className="portfolio-card-icon" />
              )}
            </div>

            <div className="entry-card-heading-copy">
              <h3 className="portfolio-card-title">{award.org}</h3>
              <p className="entry-card-subtitle content-headline">
                {award.title}
              </p>
            </div>
          </div>

          <span className="portfolio-card-meta entry-card-meta">
            {award.year}
          </span>
        </div>

        <p className="portfolio-card-copy entry-card-copy">
          {award.description}
        </p>
      </div>
    </div>
  );
}
