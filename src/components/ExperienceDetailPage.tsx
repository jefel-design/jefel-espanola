import { ArrowLeft, Briefcase, X } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getExperienceBySlug } from "../data/experience";
import { publicAsset } from "../lib/assets";

function MetadataItem({
  label,
  value,
}: {
  label: string;
  value: string | string[];
}) {
  return (
    <div className="border-b py-4 last:border-b-0" style={{ borderColor: "var(--border)" }}>
      <p
        className="mb-2 text-[11px] uppercase tracking-[0.24em]"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </p>

      {Array.isArray(value) ? (
        <div className="flex flex-wrap gap-2">
          {value.map((item) => (
            <span
              key={item}
              className="rounded-md px-3 py-1 text-xs"
              style={{
                backgroundColor: "var(--card-tag-bg)",
                color: "var(--card-tag-text)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm font-light" style={{ color: "var(--text-secondary)" }}>
          {value}
        </p>
      )}
    </div>
  );
}

export function ExperienceDetailPage() {
  const { slug } = useParams();
  const experience = slug ? getExperienceBySlug(slug) : undefined;
  const [activeProject, setActiveProject] = useState<null | {
    name: string;
    image: string;
    imageAlt?: string;
  }>(null);

  if (!experience) {
    return <Navigate to="/" replace />;
  }

  const logoSrc = experience.logo ? publicAsset(experience.logo) : null;

  return (
    <section
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-28 pb-16 md:pt-32 md:pb-24">
        <Link
          to="/#experience"
          className="mb-10 inline-flex items-center gap-2 text-sm font-light transition-colors duration-300 hover:text-[var(--text-primary)]"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={16} />
          Back to experience
        </Link>

        <div className="grid gap-12 pb-14 md:gap-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl"
                style={{ backgroundColor: "var(--card-tag-bg)" }}
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={experience.company}
                    loading="lazy"
                    decoding="async"
                    className="h-8 w-8 object-contain"
                  />
                ) : (
                  <Briefcase size={22} style={{ color: "var(--card-icon)" }} />
                )}
              </div>

            </div>

            <h1
              className="text-[40px] font-medium leading-[0.96] tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {experience.company}
            </h1>

            <p
              className="mt-8 max-w-2xl text-sm font-light leading-relaxed md:text-[0.95rem]"
              style={{ color: "var(--text-secondary)" }}
            >
              {experience.summary}
            </p>
          </div>

          <aside
            className="rounded-2xl p-5 md:p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            <MetadataItem label="Role" value={experience.role} />
            <MetadataItem label="Timeframe" value={experience.timeframe} />
            <MetadataItem label="Location" value={experience.location} />
            <MetadataItem label="Engagement" value={experience.engagement} />
          </aside>
        </div>

        <div className="pt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experience.projects.map((project) => (
              <button
                key={project.name}
                type="button"
                className="group flex h-full flex-col items-start overflow-hidden rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                style={{
                  backgroundColor: "var(--card-bg)",
                }}
                onClick={() =>
                  setActiveProject({
                    name: project.name,
                    image: publicAsset(project.image),
                    imageAlt: project.imageAlt,
                  })
                }
              >
                <div
                  className="aspect-square overflow-hidden"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <img
                    src={publicAsset(project.image)}
                    alt={project.imageAlt || project.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: "var(--card-text-muted)" }}
                  >
                    {project.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeProject ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative flex w-full max-w-6xl items-start justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/72 text-white transition-colors duration-300 hover:bg-black"
              onClick={() => setActiveProject(null)}
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.imageAlt || activeProject.name}
              className="max-h-[85vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
