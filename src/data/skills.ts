export type SkillIconName =
  | "figma"
  | "adobePhotoshop"
  | "adobeIllustrator"
  | "adobeInDesign"
  | "html5"
  | "css3"
  | "javaScript"
  | "react"
  | "gitHub"
  | "tailwindCss"
  | "vite"
  | "typeScript"
  | "wordPress"
  | "elementor"
  | "adobePremierePro"
  | "adobeAfterEffects"
  | "puzzle"
  | "messagesSquare"
  | "refreshCw"
  | "bookOpen"
  | "languages";

export type Skill = {
  name: string;
  icon: SkillIconName;
};

export type SkillGroup = {
  title: string;
  items: readonly Skill[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Design",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Adobe Photoshop", icon: "adobePhotoshop" },
      { name: "Adobe Illustrator", icon: "adobeIllustrator" },
      { name: "Adobe InDesign", icon: "adobeInDesign" },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javaScript" },
      { name: "React", icon: "react" },
      { name: "GitHub", icon: "gitHub" },
      { name: "Tailwind CSS", icon: "tailwindCss" },
      { name: "Vite", icon: "vite" },
      { name: "TypeScript", icon: "typeScript" },
    ],
  },
  {
    title: "CMS & Web",
    items: [
      { name: "WordPress", icon: "wordPress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "Video",
    items: [
      { name: "Adobe Premiere Pro", icon: "adobePremierePro" },
      { name: "Adobe After Effects", icon: "adobeAfterEffects" },
    ],
  },
  {
    title: "Professional",
    items: [
      { name: "Problem Solving", icon: "puzzle" },
      { name: "Communication", icon: "messagesSquare" },
      { name: "Adaptability", icon: "refreshCw" },
      { name: "Self-Learning", icon: "bookOpen" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Tagalog", icon: "languages" },
      { name: "English", icon: "languages" },
      { name: "Cebuano", icon: "languages" },
    ],
  },
];

