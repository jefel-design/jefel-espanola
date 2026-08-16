import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { publicAsset } from "../lib/assets";

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
    year: "2025",
    degree: "Internship / Academic Outreach",
    description:
      "Conducted face-to-face career presentations for graduating Senior High School students across Surigao City, introducing Graphic Design and Web Design pathways.",
    logo: "sti-logo.png",
  },
  {
    school: "STI College Surigao",
    year: "2021 – 2025",
    degree: "Bachelor of Science in Information Technology",
    description:
      "Built a foundation in programming, then specialized in graphic and web design through self-directed learning and freelance client work.",
    logo: "sti-logo.png",
  },
];

function extractYearRanking(year: string) {
  const years = Array.from(year.matchAll(/\d{4}/g)).map((match) =>
    Number(match[0]),
  );

  return {
    latestYear: years.length ? Math.max(...years) : 0,
    startYear: years.length ? years[0] : 0,
  };
}

export function EducationSection() {
  const sortedEducation = [...education].sort((a, b) => {
    const left = extractYearRanking(a.year);
    const right = extractYearRanking(b.year);

    if (left.latestYear !== right.latestYear) {
      return right.latestYear - left.latestYear;
    }

    return right.startYear - left.startYear;
  });

  return (
    <section
      id="education"
      className="content-section"
    >
      <div className="section-container slide-fade-up slide-fade-up-delay-2">
        <div className="card-grid">
          {sortedEducation.map((item) => (
            <EducationCard key={`${item.school}-${item.year}`} item={item} />
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="section-content-divider" />
    </section>
  );
}

function EducationCard({ item }: { item: EducationItem }) {
  const [imgError, setImgError] = useState(false);
  const logoSrc = item.logo && !imgError ? publicAsset(item.logo) : null;

  return (
    <div className="portfolio-card">
      <div className="portfolio-card-content">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
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

            <h3 className="portfolio-card-title">
              {item.school}
            </h3>
          </div>

          <span className="portfolio-card-meta shrink-0">
            {item.year}
          </span>
        </div>

        {item.description && (
          <p className="portfolio-card-copy">
            {item.description}
          </p>
        )}

        <div className="mt-5">
          <span className="portfolio-tag">
            {item.degree}
          </span>
        </div>
      </div>
    </div>
  );
}
