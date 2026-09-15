import type { ComponentType, SVGProps } from "react";
import {
  BookOpen,
  Languages,
  MessagesSquare,
  Puzzle,
  RefreshCw,
} from "lucide-react";
import { ExpandableSection } from "./ExpandableSection";
import { skillGroups, type SkillGroup, type SkillIconName } from "../data/skills";
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

const skillIcons = {
  figma: FigmaSimpleIcon,
  adobePhotoshop: AdobePhotoshopSimpleIcon,
  adobeIllustrator: AdobeIllustratorSimpleIcon,
  adobeInDesign: AdobeInDesignSimpleIcon,
  html5: Html5SimpleIcon,
  css3: Css3SimpleIcon,
  javaScript: JavaScriptSimpleIcon,
  react: ReactSimpleIcon,
  gitHub: GitHubSimpleIcon,
  tailwindCss: TailwindCssSimpleIcon,
  vite: ViteSimpleIcon,
  typeScript: TypeScriptSimpleIcon,
  wordPress: WordPressSimpleIcon,
  elementor: ElementorSimpleIcon,
  adobePremierePro: AdobePremiereProSimpleIcon,
  adobeAfterEffects: AdobeAfterEffectsSimpleIcon,
  puzzle: Puzzle,
  messagesSquare: MessagesSquare,
  refreshCw: RefreshCw,
  bookOpen: BookOpen,
  languages: Languages,
} satisfies Record<SkillIconName, ComponentType<SVGProps<SVGSVGElement>>>;

export function SkillsSection() {
  return (
    <ExpandableSection
      id="skills"
      title="Skills"
      items={skillGroups}
      getKey={(group) => group.title}
      renderItem={(group) => <SkillRow group={group} />}
    />
  );
}

function SkillRow({ group }: { group: SkillGroup }) {
  return (
    <div className="skill-row">
      <h3 className="skill-category">{group.title}</h3>

      <ul role="list" className="skill-item-list" aria-label={`${group.title} skills`}>
        {group.items.map((item) => {
          const Icon = skillIcons[item.icon];

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
