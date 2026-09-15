import { Briefcase } from "lucide-react";
import { experienceEntries, type ExperienceEntry } from "../data/experience";
import { publicAsset } from "../lib/assets";
import { ResumeEntry } from "./ResumeEntry";
import { ExpandableSection } from "./ExpandableSection";

function ExperienceItem({ job }: { job: ExperienceEntry }) {
  const logoSrc = job.logo ? publicAsset(job.logo) : null;

  return (
    <ResumeEntry
      title={job.company}
      subtitle={job.title}
      date={job.timeframe}
      details={job.responsibilities}
      logo={
        logoSrc ? (
          <img
            src={logoSrc}
            alt={job.company}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Briefcase size={20} aria-hidden="true" />
        )
      }
    />
  );
}

export function ExperienceSection() {
  return (
    <ExpandableSection
      id="experience"
      title="Experience"
      items={experienceEntries}
      getKey={(job) => job.slug}
      renderItem={(job) => <ExperienceItem job={job} />}
    />
  );
}
