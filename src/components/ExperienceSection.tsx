import { Briefcase } from "lucide-react";
import { useState } from "react";
import { experienceEntries, type ExperienceEntry } from "../data/experience";
import { publicAsset } from "../lib/assets";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

function ExperienceCard({ job }: { job: ExperienceEntry }) {
  const logoSrc = job.logo ? publicAsset(job.logo) : null;

  return (
    <article className="portfolio-card">
      <div className="portfolio-card-content">
        <div className="experience-card-header">
          <div className="portfolio-icon-frame experience-card-logo">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={job.company}
                loading="lazy"
                decoding="async"
                className="h-6 w-6 object-contain"
              />
            ) : (
              <Briefcase size={18} className="portfolio-card-icon" />
            )}
          </div>

          <div className="experience-card-heading">
            <h3 className="portfolio-card-title">{job.company}</h3>
            <p className="entry-card-subtitle">{job.title}</p>
          </div>

          <p className="experience-card-date">{job.timeframe}</p>
        </div>

        <ul className="portfolio-card-copy experience-responsibilities">
          {job.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </article>
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
            <ExperienceCard job={primaryExperience} />
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
                <ExperienceCard key={job.slug} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
