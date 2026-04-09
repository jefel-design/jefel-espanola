import { Briefcase, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

type Project = {
  name: string;
  link: string;
  image: string;
  imageAlt?: string;
};

type Job = {
  company: string;
  period: string;
  title: string;
  highlights: string[];
  logo?: string;
  type?: string;
  projects: Project[];
};

const jobs: Job[] = [
  {
    company: "Ark Design B.V.",
    period: "2024 – Present",
    title:
      "Graphic & UI/Web Designer at Ark Design B.V., building responsive WordPress websites, creating digital ads and branding, and designing user-focused web and software interfaces.",
    highlights: ["WordPress/Elementor", "UI Design", "Branding"],
    logo: "ark-design.png",
    type: "Full-time",
    projects: [
      {
        name: "Product Configurator Website Redesign",
        link: "https://productconfigurator.nl/",
        image: "webproject1.png",
        imageAlt: "Ark Design Corporate Website",
      },
      {
        name: "Brand Identity Package",
        link: "https://www.linkedin.com/company/arkdesign/posts/?feedView=all",
        image: "arkad1.jpeg",
        imageAlt: "Ark Design Brand Identity",
      },
      {
        name: "ArkDesign Redesign",
        link: "https://www.arkdesign.nl/",
        image: "ark2.png",
        imageAlt: "Ark Design Redesign",
      },
    ],
  },
  {
    company: "TNC Kaiserin",
    period: "2024",
    title:
      "Led graphic design projects, created promotional materials, and supported branding initiatives.",
    highlights: ["Head Designer", "Posters", "Branding"],
    logo: "tnc-kaiserin.png",
    type: "Freelance",
    projects: [
      {
        name: "Roster",
        link: "https://www.facebook.com/photo.php?fbid=1265132472286073&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-1.jpg",
        imageAlt: "TNC Event Campaign",
      },
      {
        name: "Roster Reveal",
        link: "https://www.facebook.com/photo.php?fbid=1228044165994904&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-2.jpg",
        imageAlt: "TNC Brand Refresh",
      },
      {
        name: "MVP",
        link: "https://www.facebook.com/photo.php?fbid=1216178023848185&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-3.jpg",
        imageAlt: "TNC Brand Refresh",
      },
    ],
  },
  {
    company: "Bren Esports",
    period: "2024",
    title:
      "Player-specific Graphic Designer for Bren Esports, creating branded content and visuals for professional player Shizou.",
    highlights: ["Player-specific Design", "Posters", "Branding"],
    logo: "ap-bren.png",
    type: "Freelance",
    projects: [
      {
        name: "Roster",
        link: "https://www.facebook.com/photo.php?fbid=1126063892864934&set=pb.100063840020177.-2207520000&type=3",
        image: "apbr1.jpg",
        imageAlt: "Bren Player Branding",
      },
      {
        name: "Game Day",
        link: "https://www.facebook.com/photo.php?fbid=1149090933895563&set=pb.100063840020177.-2207520000&type=3",
        image: "apbr2.jpg",
        imageAlt: "Bren Tournament Graphics",
      },
    ],
  },
  {
    company: "Surigao Esports Collective",
    period: "2023 – 2024",
    title:
      "Led design for broadcast graphics, social media content, promotional posters, and brand assets.",
    highlights: ["Head Designer", "Broadcast Visuals", "Branding"],
    logo: "surigao-esports.png",
    type: "Contract",
    projects: [
      {
        name: "CEAP",
        link: "https://www.facebook.com/photo.php?fbid=375363668895238&set=pb.100092648244877.-2207520000&type=3",
        image: "ceap1.jpg",
        imageAlt: "SEC Broadcast Graphics",
      },
      {
        name: "Surecol 1",
        link: "https://www.facebook.com/photo.php?fbid=122123598602098189&set=pb.61552945697929.-2207520000&type=3",
        image: "surcol1.jpg",
        imageAlt: "SEC League Branding",
      },
    ],
  },

  // ✅ NEWLY ADDED — JEFEL ARTS
  {
    company: "Jefel Arts",
    period: "2022 – Present",
    title:
      "Custom commission-based designs for streetwear, esports, and merchandise brands.",
    highlights: ["Apparel Design", "Commission Work", "Merch Graphics"],
    logo: "jefel-arts-preview.jpg",
    type: "Freelance",
    projects: [
      {
        name: "Max Poster",
        link: "https://www.facebook.com/photo?fbid=867026052813571&set=a.116471364535714",
        image: "max1.jpg",
        imageAlt: "Jefel Arts Apparel Designs",
      },
      {
        name: "Ant Poster",
        link: "https://www.facebook.com/photo?fbid=871515925697917&set=a.116471364535714",
        image: "ant1.jpg",
        imageAlt: "Jefel Arts Apparel Designs",
      },
      {
        name: "YG",
        link: "https://www.facebook.com/photo/?fbid=719676287548549&set=pcb.719676417548536",
        image: "yg1.jpg",
        imageAlt: "Jefel Arts Apparel Designs",
      },
    ],
  },
];

function extractPeriodRanking(period: string) {
  const years = Array.from(period.matchAll(/\d{4}/g)).map((match) =>
    Number(match[0]),
  );
  const latestYear = years.length ? Math.max(...years) : 0;
  const startYear = years.length ? years[0] : 0;
  const isCurrent = /present/i.test(period);

  return { isCurrent, latestYear, startYear };
}

const sortedJobs = [...jobs].sort((a, b) => {
  const left = extractPeriodRanking(a.period);
  const right = extractPeriodRanking(b.period);

  if (left.isCurrent !== right.isCurrent) {
    return Number(right.isCurrent) - Number(left.isCurrent);
  }

  if (left.latestYear !== right.latestYear) {
    return right.latestYear - left.latestYear;
  }

  return right.startYear - left.startYear;
});

function TimelineCard({
  job,
  delayMs = 0,
  featured = false,
}: {
  job: Job;
  delayMs?: number;
  featured?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <RevealOnScroll
      className={`group h-full ${featured ? "lg:col-span-2" : ""}`}
      delayMs={delayMs}
    >
      {/* Card */}
      <div
        className="relative h-full overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        style={{
          backgroundColor: "var(--card-bg)",
        }}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="relative z-10 p-5 md:p-6">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0"
                  style={{ backgroundColor: "var(--card-tag-bg)" }}
                >
                  {!imgError && job.logo ? (
                    <img
                      src={job.logo}
                      alt={job.company}
                      loading="lazy"
                      decoding="async"
                      className="w-6 h-6 object-contain"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <Briefcase size={20} style={{ color: "var(--card-icon)" }} />
                  )}
                </div>

                <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-3">
                  <h3
                    className="font-medium text-base md:text-lg leading-tight"
                    style={{ color: "var(--card-text-primary)" }}
                  >
                    {job.company}
                  </h3>

                  {job.type && (
                    <span className="job-type-badge mt-1 md:mt-0">
                      {job.type}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className="text-xs md:text-sm"
                  style={{ color: "var(--card-text-muted)" }}
                >
                  {job.period}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  style={{ color: "var(--card-text-muted)" }}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-sm font-light leading-relaxed mb-5"
            style={{ color: "var(--card-text-secondary)" }}
          >
            {job.title}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {job.highlights.map((item, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-md"
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

        {/* Expanded Section */}
        {isExpanded && (
          <div className="relative z-10">
            <div className="p-5 md:p-6 space-y-4">
              <h4
                className="text-sm font-medium"
                style={{ color: "var(--card-text-primary)" }}
              >
                Project Highlights
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {job.projects.map((project, idx) => (
                  <a
                    key={idx}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-square group/project"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="relative w-full h-full rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/project:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/project:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <ExternalLink size={22} className="text-white" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="pt-0 pb-16"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedJobs.map((job, index) => (
            <TimelineCard
              key={`${job.company}-${job.period}`}
              job={job}
              delayMs={index * 70}
              featured={index === 0}
            />
          ))}
        </div>
      </div>

      <style>{`
        .job-type-badge {
          font-size: 10px;
          padding: 4px 8px;
          height: 22px;
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
