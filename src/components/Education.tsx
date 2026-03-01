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

export function Education() {
  const education: EducationItem[] = [
    {
      school: "STI College Surigao",
      year: "2025",
      degree: "Internship / Academic Outreach",
      description:
        "Conducted face-to-face career presentations for graduating Senior High School students across Surigao City, presenting on Graphic Design and Web Design.",
      logo: "sti-logo.png",
    },
    {
      school: "STI College Surigao",
      year: "2021 – 2025",
      degree: "Bachelor of Science in Information Technology",
      description:
        "Gained foundational experience in programming and later specialized in graphic and web design through self-directed learning and freelance client work.",
      logo: "sti-logo.png",
    },
  ];

  function EducationCard({ item }: { item: EducationItem }) {
    const [imgError, setImgError] = useState(false);

    return (
      <div
        className="group relative overflow-hidden rounded-xl border p-6 
                   transition-all duration-500 hover:-translate-y-1"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
      >
        {/* Gradient Hover Layer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "var(--card-hover-gradient)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-start gap-4">
          {/* Logo Container */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0"
            style={{ backgroundColor: "var(--card-tag-bg)" }}
          >
            {!imgError && item.logo ? (
              <img
                src={item.logo}
                alt={item.school}
                className="w-6 h-6 object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <GraduationCap
                size={18}
                style={{ color: "var(--card-icon)" }}
              />
            )}
          </div>

          <div className="space-y-2 w-full">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3
                className="font-medium text-lg"
                style={{ color: "var(--card-text-primary)" }}
              >
                {item.school}
              </h3>

              <span
                className="text-sm"
                style={{ color: "var(--card-text-muted)" }}
              >
                {item.year}
              </span>
            </div>

            <p
              className="text-sm font-light"
              style={{ color: "var(--card-text-secondary)" }}
            >
              {item.degree}
            </p>

            {item.description && (
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "var(--card-text-secondary)" }}
              >
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="education"
      className="pt-12 pb-14 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-10">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
          Education & Training
        </h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <RevealOnScroll key={index} delayMs={index * 70}>
              <EducationCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
