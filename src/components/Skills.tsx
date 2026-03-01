import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiTailwindcss,
  SiVite,
  SiTypescript,
  SiWordpress,
  SiElementor,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import { RevealOnScroll } from "./RevealOnScroll";

type Skill = {
  name: string;
  icon?: React.ReactNode;
};

export function Skills() {
  const development: Skill[] = [
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Typescript", icon: <SiTypescript /> },
  ];

  const design: Skill[] = [
    { name: "Figma", icon: <SiFigma /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Illustrator", icon: <SiAdobeillustrator /> },
    { name: "InDesign", icon: <SiAdobeindesign /> },
  ];

  const cms: Skill[] = [
    { name: "WordPress", icon: <SiWordpress /> },
    { name: "Elementor", icon: <SiElementor /> },
  ];

  const video: Skill[] = [
    { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro /> },
    { name: "After Effects", icon: <SiAdobeaftereffects /> },
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

  const Badge = ({ skill }: { skill: Skill }) => (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-light"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid var(--card-border)",
        color: "var(--card-text-muted)",
      }}
    >
      {skill.icon && <span className="opacity-80 text-sm">{skill.icon}</span>}
      <span>{skill.name}</span>
    </div>
  );

  const SectionLabel = ({
    title,
    status,
  }: {
    title: string;
    status?: string;
  }) => (
    <h3 className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
      {title}
      {status && (
        <span
          className="text-[10px] px-2 py-1 rounded-full uppercase tracking-wide"
          style={{
            background: "var(--card-tag-bg)",
            border: "1px solid var(--card-border)",
            color: "var(--card-text-muted)",
          }}
        >
          {status}
        </span>
      )}
    </h3>
  );

  return (
    <section
      id="skills"
      className="pt-16 pb-20 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-10">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
            Skills
          </h2>
        </RevealOnScroll>

        {/* 2x2 Balanced Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Development */}
          <RevealOnScroll className="space-y-4" delayMs={40}>
            <SectionLabel title="Development" status="Developing" />
            <div className="flex flex-wrap gap-2">
              {development.map((skill, index) => (
                <Badge key={index} skill={skill} />
              ))}
            </div>
          </RevealOnScroll>

          {/* Design */}
          <RevealOnScroll className="space-y-4" delayMs={90}>
            <SectionLabel title="Design" status="Advanced" />
            <div className="flex flex-wrap gap-2">
              {design.map((skill, index) => (
                <Badge key={index} skill={skill} />
              ))}
            </div>
          </RevealOnScroll>

          {/* CMS */}
          <RevealOnScroll className="space-y-4" delayMs={140}>
            <SectionLabel title="CMS & Website Builders" status="Proficient" />
            <div className="flex flex-wrap gap-2">
              {cms.map((skill, index) => (
                <Badge key={index} skill={skill} />
              ))}
            </div>
          </RevealOnScroll>

          {/* Video Editing */}
          <RevealOnScroll className="space-y-4" delayMs={190}>
            <SectionLabel title="Video Editing" status="Proficient" />
            <div className="flex flex-wrap gap-2">
              {video.map((skill, index) => (
                <Badge key={index} skill={skill} />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Professional Strengths */}
        <RevealOnScroll className="space-y-4" delayMs={230}>
          <SectionLabel title="Professional Strengths" />
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <Badge key={index} skill={skill} />
            ))}
          </div>
        </RevealOnScroll>

        {/* Languages */}
        <RevealOnScroll className="space-y-4" delayMs={260}>
          <SectionLabel title="Languages" />
          <div className="flex flex-wrap gap-2">
            {languages.map((skill, index) => (
              <Badge key={index} skill={skill} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
