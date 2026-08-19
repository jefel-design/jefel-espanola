import { ExperienceSection } from "./ExperienceSection";
import { SectionPageLayout } from "./SectionPageLayout";

export function ExperiencePage() {
  return (
    <SectionPageLayout
      title="Experience"
      description="Recent roles across interface design, front-end work, branding, websites, and creative works."
    >
      <ExperienceSection />
    </SectionPageLayout>
  );
}
