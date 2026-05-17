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
      <div
        className="relative flex h-full flex-col overflow-hidden border border-[var(--grid-line)] transition-colors"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                style={{ backgroundColor: "var(--card-tag-bg)" }}
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={job.company}
                    loading="lazy"
                    decoding="async"
                    className="h-7 w-7 object-contain"
                  />
                ) : (
                  <Briefcase size={20} style={{ color: "var(--card-icon)" }} />
                )}
              </div>

              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3
                    className="font-body text-[18px] font-normal leading-7"
                    style={{ color: "var(--card-text-primary)" }}
                  >
                    {job.company}
                  </h3>

                  <span className="job-type-badge">{job.engagement}</span>
                </div>

                <p
                  className="font-body text-[14px] font-light"
                  style={{ color: "var(--card-text-muted)" }}
                >
                  {job.timeframe}
                </p>
              </div>
            </div>
          </div>

          <p
            className="mb-5 font-body text-[16px] font-normal leading-7"
            style={{ color: "var(--card-text-secondary)" }}
          >
            {job.cardSummary}
          </p>

          <div className="flex flex-wrap gap-2">
            {(cardRoleLabels.length ? cardRoleLabels : job.tools).map((item) => (
              <span
                key={item}
                className="border border-[var(--grid-line)] px-3 py-1 font-body text-[14px]"
                style={{
                  backgroundColor: "var(--card-tag-bg)",
                  color: "var(--card-tag-text)",
                }}
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

export function Experience() {
  return (
    <section
      id="experience"
      className="pt-0 pb-0"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {experienceEntries.map((job, index) => (
            <TimelineCard
              key={job.slug}
              job={job}
              featured={index === 0}
            />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="-mt-px h-px w-full"
        style={{ backgroundColor: "rgba(37, 37, 37, 0.54)" }}
      />

      <style>{`
        .job-type-badge {
          font-size: 10px;
          padding: 4px 8px;
          min-height: 22px;
          border-radius: 9999px;
          background: var(--card-tag-bg);
          color: var(--card-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}