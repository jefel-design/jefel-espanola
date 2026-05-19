import { Briefcase } from "lucide-react";
import { experienceEntries, type ExperienceEntry } from "../data/experience";
import { publicAsset } from "../lib/assets";

function TimelineCard({
  job,
  featured = false,
}: {
  job: ExperienceEntry;
  featured?: boolean;
}) {
  const logoSrc = job.logo ? publicAsset(job.logo) : null;
  const cardRoleLabels = Array.isArray(job.cardRoleLabel)
    ? job.cardRoleLabel
    : job.cardRoleLabel
      ? [job.cardRoleLabel]
      : [];

  return (
    <div className={`group h-full ${featured ? "lg:col-span-2" : ""}`}>
      <div className="portfolio-card portfolio-card--column">
        <div className="portfolio-card-content flex h-full flex-col">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="portfolio-icon-frame portfolio-icon-frame--large">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={job.company}
                    loading="lazy"
                    decoding="async"
                    className="h-7 w-7 object-contain"
                  />
                ) : (
                  <Briefcase size={20} className="portfolio-card-icon" />
                )}
              </div>

              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="portfolio-card-title">
                    {job.company}
                  </h3>

                  <span className="status-pill">{job.engagement}</span>
                </div>

                <p className="portfolio-card-meta">
                  {job.timeframe}
                </p>
              </div>
            </div>
          </div>

          <p className="portfolio-card-copy mb-5">
            {job.cardSummary}
          </p>

          <div className="flex flex-wrap gap-2">
            {(cardRoleLabels.length ? cardRoleLabels : job.tools).map((item) => (
              <span
                key={item}
                className="portfolio-tag"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="content-section">
      <div className="section-container slide-fade-up slide-fade-up-delay-2">
        <div className="card-grid">
          {experienceEntries.map((job, index) => (
            <TimelineCard
              key={job.slug}
              job={job}
              featured={index === 0}
            />
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="section-content-divider" />
    </section>
  );
}
