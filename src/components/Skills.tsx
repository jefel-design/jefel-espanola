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

export function Skills() {
  return (
    <section
      id="skills"
      className="pt-0 pb-0"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <SkillCard key={section.title} section={section} />
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

function SkillCard({ section }: { section: SkillSection }) {
  return (
    <div
      className="relative h-full overflow-hidden border border-[var(--grid-line)]"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="relative z-10 p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-3">
            <h3
              className="font-body text-[18px] font-normal leading-7"
              style={{ color: "var(--card-text-primary)" }}
            >
              {section.title}
            </h3>

            {section.status && (
              <span
                className="mt-1 inline-flex w-fit self-start border border-[var(--grid-line)] px-3 py-1 font-body text-[14px] md:mt-0"
                style={{
                  backgroundColor: "var(--card-tag-bg)",
                  color: "var(--card-tag-text)",
                }}
              >
                {section.status}
              </span>
            )}
          </div>
        </div>

        <p
          className="mb-5 font-body text-[16px] font-normal leading-7"
          style={{ color: "var(--card-text-secondary)" }}
        >
          {section.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {section.items.map((item) => (
            <span
              key={item.name}
              className="border border-[var(--grid-line)] px-3 py-1 font-body text-[14px]"
              style={{
                backgroundColor: "var(--card-tag-bg)",
                color: "var(--card-tag-text)",
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}