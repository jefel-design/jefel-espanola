import { Briefcase } from "lucide-react";
import { useState } from "react";
import { experienceEntries, type ExperienceEntry } from "../data/experience";
import { publicAsset } from "../lib/assets";
import { ResumeEntry } from "./ResumeEntry";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

function ExperienceItem({ job }: { job: ExperienceEntry }) {
  const logoSrc = job.logo ? publicAsset(job.logo) : null;

  return (
    <ResumeEntry
      title={job.company}
      subtitle={job.title}
      date={job.timeframe}
      details={job.responsibilities}
      logo={
        logoSrc ? (
          <img
            src={logoSrc}
            alt={job.company}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Briefcase size={20} aria-hidden="true" />
        )
      }
    />
  );
}

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [primaryExperience, ...additionalExperiences] = experienceEntries;

  return (
    <section id="experience" className="content-section">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            title="Experience"
            isExpanded={isExpanded}
            controls="experience-additional-content"
            onToggle={() => setIsExpanded((current) => !current)}
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="section-card-list">
            <ExperienceItem job={primaryExperience} />
          </div>
        </RevealOnScroll>

        <div
          id="experience-additional-content"
          className={`expandable-panel ${isExpanded ? "is-visible" : ""}`}
          aria-hidden={!isExpanded}
        >
          <div className="expandable-panel-inner">
            <div className="section-card-list">
              {additionalExperiences.map((job) => (
                <ExperienceItem key={job.slug} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
