import { type ElementType, useState } from "react";
import {
  BookOpen,
  Languages,
  MessagesSquare,
  Puzzle,
  RefreshCw,
} from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";
import {
  AdobeAfterEffectsSimpleIcon,
  AdobeIllustratorSimpleIcon,
  AdobeInDesignSimpleIcon,
  AdobePhotoshopSimpleIcon,
  AdobePremiereProSimpleIcon,
  Css3SimpleIcon,
  ElementorSimpleIcon,
  FigmaSimpleIcon,
  GitHubSimpleIcon,
  Html5SimpleIcon,
  JavaScriptSimpleIcon,
  ReactSimpleIcon,
  TailwindCssSimpleIcon,
  TypeScriptSimpleIcon,
  ViteSimpleIcon,
  WordPressSimpleIcon,
} from "./SimpleBrandIcons";

type Skill = {
  name: string;
  icon: ElementType;
  showLabel?: boolean;
};

type SkillSection = {
  title: string;
  description: string;
  items: Skill[];
};

const sections: SkillSection[] = [
  {
    title: "Design",
    description: "Design software used for branding, layout, and UI exploration.",
    items: [
      { name: "Figma", icon: FigmaSimpleIcon },
      { name: "Adobe Photoshop", icon: AdobePhotoshopSimpleIcon },
      { name: "Adobe Illustrator", icon: AdobeIllustratorSimpleIcon },
      { name: "Adobe InDesign", icon: AdobeInDesignSimpleIcon },
    ],
  },
  {
    title: "Development",
    description:
      "Front-end tools used to build responsive interfaces and interactive websites.",
    items: [
      { name: "HTML5", icon: Html5SimpleIcon },
      { name: "CSS3", icon: Css3SimpleIcon },
      { name: "JavaScript", icon: JavaScriptSimpleIcon },
      { name: "React", icon: ReactSimpleIcon },
      { name: "GitHub", icon: GitHubSimpleIcon },
      { name: "Tailwind CSS", icon: TailwindCssSimpleIcon },
      { name: "Vite", icon: ViteSimpleIcon },
      { name: "TypeScript", icon: TypeScriptSimpleIcon },
    ],
  },
  {
    title: "CMS & Website Builders",
    description: "Website builders and publishing tools used for client delivery.",
    items: [
      { name: "WordPress", icon: WordPressSimpleIcon },
      { name: "Elementor", icon: ElementorSimpleIcon },
    ],
  },
  {
    title: "Video Editing",
    description:
      "Tools used for editing motion content and short-form video assets.",
    items: [
      { name: "Adobe Premiere Pro", icon: AdobePremiereProSimpleIcon },
      { name: "Adobe After Effects", icon: AdobeAfterEffectsSimpleIcon },
    ],
  },
  {
    title: "Professional Strengths",
    description:
      "Core strengths that support communication, execution, and creative problem solving.",
    items: [
      { name: "Problem Solving", icon: Puzzle, showLabel: true },
      { name: "Communication", icon: MessagesSquare, showLabel: true },
      { name: "Adaptability", icon: RefreshCw, showLabel: true },
      { name: "Self-Learning", icon: BookOpen, showLabel: true },
    ],
  },
  {
    title: "Languages",
    description: "Languages used for communication and collaboration.",
    items: [
      { name: "Tagalog", icon: Languages, showLabel: true },
      { name: "English", icon: Languages, showLabel: true },
      { name: "Cebuano", icon: Languages, showLabel: true },
    ],
  },
];

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [primarySection, ...additionalSections] = sections;

  return (
    <section id="skills" className="content-section">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            title="Skills"
            isExpanded={isExpanded}
            controls="skills-additional-content"
            onToggle={() => setIsExpanded((current) => !current)}
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="section-card-list">
            <SkillCard section={primarySection} />
          </div>
        </RevealOnScroll>

        <div
          id="skills-additional-content"
          className={`expandable-panel ${isExpanded ? "is-visible" : ""}`}
          aria-hidden={!isExpanded}
        >
          <div className="expandable-panel-inner">
            <div className="section-card-list">
              {additionalSections.map((section) => (
                <SkillCard key={section.title} section={section} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ section }: { section: SkillSection }) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-content">
        <div className="skill-card-header">
          <div className="skill-card-heading">
            <h3 className="portfolio-card-title">
              {section.title}
            </h3>
          </div>

          <div className="skill-item-list" aria-label={`${section.title} skills`}>
            {section.items.map((item) => {
              const Icon = item.icon;

              return item.showLabel ? (
                <span
                  key={item.name}
                  title={item.name}
                  className="skill-item-label"
                  aria-label={item.name}
                >
                  <Icon aria-hidden="true" focusable="false" />
                  <span>{item.name}</span>
                </span>
              ) : (
                <span
                  key={item.name}
                  role="img"
                  aria-label={item.name}
                  title={item.name}
                  className="skill-item-icon"
                >
                  <Icon aria-hidden="true" focusable="false" />
                </span>
              );
            })}
          </div>
        </div>

        <p className="portfolio-card-copy skill-card-description">
          {section.description}
        </p>
      </div>
    </div>
  );
}
