import { RevealOnScroll } from "./RevealOnScroll";

type Skill = {
  name: string;
};

type SkillSection = {
  title: string;
  status?: string;
  description: string;
  items: Skill[];
};

export function Skills() {
  const development: Skill[] = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "GitHub" },
    { name: "Tailwind" },
    { name: "Vite" },
    { name: "Typescript" },
  ];

  const design: Skill[] = [
    { name: "Figma" },
    { name: "Photoshop" },
    { name: "Illustrator" },
    { name: "InDesign" },
  ];

  const cms: Skill[] = [
    { name: "WordPress" },
    { name: "Elementor" },
  ];

  const video: Skill[] = [
    { name: "Adobe Premiere Pro" },
    { name: "After Effects" },
  ];

  const softSkills: Skill[] = [
    { name: "Problem Solving" },
    { name: "Communication" },
    { name: "Adaptability" },
    { name: "Self-Learning" },
  ];

  const languages: Skill[] = [
    { name: "Tagalog" },
    { name: "English" },
    { name: "Cebuano" },
  ];

  const sections: SkillSection[] = [
    {
      title: "Development",
      status: "Developing",
      description: "Front-end tools used to build responsive interfaces and interactive websites.",
      items: development,
    },
    {
      title: "Design",
      status: "Advanced",
      description: "Design software used for branding, layout, and UI exploration.",
      items: design,
    },
    {
      title: "CMS & Website Builders",
      status: "Proficient",
      description: "Website builders and publishing tools used for client delivery.",
      items: cms,
    },
    {
      title: "Video Editing",
      status: "Proficient",
      description: "Tools used for editing motion content and short-form video assets.",
      items: video,
    },
    {
      title: "Professional Strengths",
      description: "Core strengths that support communication, execution, and creative problem solving.",
      items: softSkills,
    },
    {
      title: "Languages",
      description: "Languages used for communication and collaboration.",
      items: languages,
    },
  ];

  return (
    <div id="skills" className="space-y-6">
      <RevealOnScroll>
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--text-muted)] md:text-sm">
          Skills
        </p>
      </RevealOnScroll>

      <div className="grid gap-5 md:grid-cols-2">
        {sections.map((section, index) => (
          <RevealOnScroll key={section.title} delayMs={40 + index * 50}>
            <div
              className="relative h-full overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <div className="relative z-10 p-5 md:p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-3">
                      <h3
                        className="font-medium text-base md:text-lg leading-tight"
                        style={{ color: "var(--card-text-primary)" }}
                      >
                        {section.title}
                      </h3>

                      {section.status && (
                        <span
                          className="mt-1 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] md:mt-0"
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
                </div>

                <p
                  className="text-sm font-light leading-relaxed mb-5"
                  style={{ color: "var(--card-text-secondary)" }}
                >
                  {section.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item.name}
                      className="text-xs px-3 py-1 rounded-md"
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
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
