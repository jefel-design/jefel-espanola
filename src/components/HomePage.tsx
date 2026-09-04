import { AwardsSection } from "./AwardsSection";
import { ContactSection } from "./ContactSection";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { HomeHero } from "./HomeHero";
import { SkillsSection } from "./SkillsSection";

export function HomePage() {
  return (
    <div className="one-page-portfolio">
      <HomeHero />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
}
