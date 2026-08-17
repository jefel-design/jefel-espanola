type Skill = {
  name: string;
};

type SkillSection = {
  title: string;
  status?: string;
  description: string;
  items: Skill[];
};

const sections: SkillSection[] = [
  {
    title: "Development",
    status: "Developing",
    description:
      "Front-end tools used to build responsive interfaces and interactive websites.",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "GitHub" },
      { name: "Tailwind" },
      { name: "Vite" },
      { name: "Typescript" },
    ],
  },
  {
    title: "Design",
    status: "Advanced",
    description: "Design software used for branding, layout, and UI exploration.",
    items: [
      { name: "Figma" },
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "InDesign" },
    ],
  },
  {
    title: "CMS & Website Builders",
    status: "Proficient",
    description: "Website builders and publishing tools used for client delivery.",
    items: [{ name: "WordPress" }, { name: "Elementor" }],
  },
  {
    title: "Video Editing",
    status: "Proficient",
    description:
      "Tools used for editing motion content and short-form video assets.",
    items: [{ name: "Adobe Premiere Pro" }, { name: "After Effects" }],
  },
  {
    title: "Professional Strengths",
    description:
      "Core strengths that support communication, execution, and creative problem solving.",
    items: [
      { name: "Problem Solving" },
      { name: "Communication" },
      { name: "Adaptability" },
      { name: "Self-Learning" },
    ],
  },
  {
    title: "Languages",
    description: "Languages used for communication and collaboration.",
    items: [{ name: "Tagalog" }, { name: "English" }, { name: "Cebuano" }],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="content-section"
    >
      <h2 className="sr-only">Design and development skills</h2>

      <div className="section-container slide-fade-up slide-fade-up-delay-2">
        <div className="card-grid">
          {sections.map((section) => (
            <SkillCard key={section.title} section={section} />
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="section-content-divider" />
    </section>
  );
}

function SkillCard({ section }: { section: SkillSection }) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-content">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="portfolio-card-title">
              {section.title}
            </h3>

            {section.status && (
              <span className="status-pill">
                {section.status}
              </span>
            )}
          </div>
        </div>

        <p className="portfolio-card-copy mb-5">
          {section.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {section.items.map((item) => (
            <span
              key={item.name}
              className="portfolio-tag"
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
