import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { publicAsset } from "../lib/assets";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

type EducationItem = {
  school: string;
  year: string;
  degree: string;
  description?: string;
  logo?: string;
};

const education: EducationItem[] = [
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

export function EducationSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [primaryEducation, ...additionalEducation] = education;
  const hasAdditionalEducation = additionalEducation.length > 0;

  return (
    <section
      id="education"
      className="content-section"
    >
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            title="Education"
            isExpanded={hasAdditionalEducation ? isExpanded : undefined}
            controls={
              hasAdditionalEducation
                ? "education-additional-content"
                : undefined
            }
            onToggle={
              hasAdditionalEducation
                ? () => setIsExpanded((current) => !current)
                : undefined
            }
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="section-card-list">
            <EducationCard item={primaryEducation} />
          </div>
        </RevealOnScroll>

        {hasAdditionalEducation && (
          <div
            id="education-additional-content"
            className={`expandable-panel ${isExpanded ? "is-visible" : ""}`}
            aria-hidden={!isExpanded}
          >
            <div className="expandable-panel-inner">
              <div className="section-card-list">
                {additionalEducation.map((item) => (
                  <EducationCard
                    key={`${item.school}-${item.year}-${item.degree}`}
                    item={item}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function EducationCard({ item }: { item: EducationItem }) {
  const [imgError, setImgError] = useState(false);
  const logoSrc = item.logo && !imgError ? publicAsset(item.logo) : null;

  return (
    <div className="portfolio-card">
      <div className="portfolio-card-content">
        <div className="entry-card-header">
          <div className="entry-card-identity">
            <div className="portfolio-icon-frame">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={item.school}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <GraduationCap
                  size={20}
                  className="portfolio-card-icon"
                />
              )}
            </div>

            <div className="entry-card-heading-copy">
              <h3 className="portfolio-card-title">{item.school}</h3>
              <p className="entry-card-subtitle">{item.degree}</p>
            </div>
          </div>

          <span className="portfolio-card-meta entry-card-meta">
            {item.year}
          </span>
        </div>

        {item.description && (
          <p className="portfolio-card-copy entry-card-copy">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}
