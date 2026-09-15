import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { HomeHero } from "./HomeHero";
import { SkillsSection } from "./SkillsSection";

export function HomePage() {
  return (
    <div className="home-page">
      <main className="home-page-content">
        <HomeHero />
        <ExperienceSection />
        <SkillsSection />
        {/* Education and Awards are temporarily hidden; their components are kept for later. */}
      </main>
      <ContactSection />
    </div>
  );
}
