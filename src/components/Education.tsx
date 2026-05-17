import { GraduationCap } from "lucide-react";
import { useState } from "react";

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

export function Education() {
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
      className="pt-0 pb-0"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {sortedEducation.map((item) => (
            <EducationCard key={`${item.school}-${item.year}`} item={item} />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="-mt-px h-px w-full"
        style={{ backgroundColor: "rgba(37, 37, 37, 0.54)" }}
      />
    </section>
  );
}

function EducationCard({ item }: { item: EducationItem }) {
  const [imgError, setImgError] = useState(false);
  const showLogo = item.logo && !imgError;

  return (
    <div
      className="relative h-full overflow-hidden border border-[var(--grid-line)] transition-colors"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="relative z-10 p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg"
              style={{ backgroundColor: "var(--card-tag-bg)" }}
            >
              {showLogo ? (
                <img
                  src={item.logo}
                  alt={item.school}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <GraduationCap
                  size={20}
                  style={{ color: "var(--card-icon)" }}
                />
              )}
            </div>

            <h3
              className="font-body text-[18px] font-normal leading-7"
              style={{ color: "var(--card-text-primary)" }}
            >
              {item.school}
            </h3>
          </div>

          <span
            className="shrink-0 font-body text-[14px]"
            style={{ color: "var(--card-text-muted)" }}
          >
            {item.year}
          </span>
        </div>

        {item.description && (
          <p
            className="font-body text-[16px] font-normal leading-7"
            style={{ color: "var(--card-text-secondary)" }}
          >
            {item.description}
          </p>
        )}

        <div className="mt-5">
          <span
            className="inline-flex border border-[var(--grid-line)] px-3 py-1 font-body text-[14px]"
            style={{
              backgroundColor: "var(--card-tag-bg)",
              color: "var(--card-tag-text)",
            }}
          >
            {item.degree}
          </span>
        </div>
      </div>
    </div>
  );
}