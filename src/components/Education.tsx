import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

type EducationItem = {
  school: string;
  year: string;
  degree: string;
  description?: string;
  logo?: string;
};

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

  const sortedEducation = [...education].sort((a, b) => {
    const left = extractYearRanking(a.year);
    const right = extractYearRanking(b.year);

    if (left.latestYear !== right.latestYear) {
      return right.latestYear - left.latestYear;
    }

    return right.startYear - left.startYear;
  });

  return (
    <div id="education" className="space-y-6">
      <RevealOnScroll>
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--text-muted)] md:text-sm">
          Education
        </p>
      </RevealOnScroll>

      <div className="grid gap-5 md:grid-cols-2">
        {sortedEducation.map((item, index) => (
          <RevealOnScroll key={index} delayMs={index * 70}>
            <EducationCard item={item} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

function EducationCard({ item }: { item: EducationItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="relative h-full overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="relative z-10 p-5 md:p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0"
                style={{ backgroundColor: "var(--card-tag-bg)" }}
              >
                {!imgError && item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.school}
                    loading="lazy"
                    decoding="async"
                    className="w-6 h-6 object-contain"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <GraduationCap size={20} style={{ color: "var(--card-icon)" }} />
                )}
              </div>

              <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-3">
                <h3
                  className="font-medium text-base md:text-lg leading-tight"
                  style={{ color: "var(--card-text-primary)" }}
                >
                  {item.school}
                </h3>
              </div>
            </div>

            <span
              className="text-xs md:text-sm shrink-0"
              style={{ color: "var(--card-text-muted)" }}
            >
              {item.year}
            </span>
          </div>
        </div>

        {item.description && (
          <p
            className="text-sm font-light leading-relaxed"
            style={{ color: "var(--card-text-secondary)" }}
          >
            {item.description}
          </p>
        )}

        <div className="mt-5">
          <span
            className="inline-flex rounded-md px-3 py-1 text-[10px] uppercase tracking-[0.12em]"
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
