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
};

type SkillSection = {
  title: string;
  items: Skill[];
};

const sections: SkillSection[] = [
  {
    title: "Design",
    items: [
      { name: "Figma", icon: FigmaSimpleIcon },
      { name: "Adobe Photoshop", icon: AdobePhotoshopSimpleIcon },
      { name: "Adobe Illustrator", icon: AdobeIllustratorSimpleIcon },
      { name: "Adobe InDesign", icon: AdobeInDesignSimpleIcon },
    ],
  },
  {
    title: "Development",
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
    title: "CMS & Web",
    items: [
      { name: "WordPress", icon: WordPressSimpleIcon },
      { name: "Elementor", icon: ElementorSimpleIcon },
    ],
  },
  {
    title: "Video",
    items: [
      { name: "Adobe Premiere Pro", icon: AdobePremiereProSimpleIcon },
      { name: "Adobe After Effects", icon: AdobeAfterEffectsSimpleIcon },
    ],
  },
  {
    title: "Professional",
    items: [
      { name: "Problem Solving", icon: Puzzle },
      { name: "Communication", icon: MessagesSquare },
      { name: "Adaptability", icon: RefreshCw },
      { name: "Self-Learning", icon: BookOpen },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Tagalog", icon: Languages },
      { name: "English", icon: Languages },
      { name: "Cebuano", icon: Languages },
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
            <SkillRow section={primarySection} />
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
                <SkillRow key={section.title} section={section} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ section }: { section: SkillSection }) {
  return (
    <div className="skill-row">
      <h3 className="skill-category">{section.title}</h3>

      <ul className="skill-item-list" aria-label={`${section.title} skills`}>
        {section.items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.name} className="skill-item">
              <Icon aria-hidden="true" focusable="false" />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
