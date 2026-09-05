import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { publicAsset } from "../lib/assets";
import { ResumeEntry } from "./ResumeEntry";
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
            <EducationEntry item={primaryEducation} />
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
                  <EducationEntry
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

function EducationEntry({ item }: { item: EducationItem }) {
  const [imgError, setImgError] = useState(false);
  const logoSrc = item.logo && !imgError ? publicAsset(item.logo) : null;

  return (
    <ResumeEntry
      title={item.school}
      subtitle={item.degree}
      date={item.year}
      details={item.description ? [item.description] : []}
      logo={
        logoSrc ? (
          <img
            src={logoSrc}
            alt={item.school}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <GraduationCap size={20} aria-hidden="true" />
        )
      }
    />
  );
}
