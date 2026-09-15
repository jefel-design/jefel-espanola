import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { publicAsset } from "../lib/assets";
import { ResumeEntry } from "./ResumeEntry";
import { ExpandableSection } from "./ExpandableSection";
import { education, type EducationItem } from "../data/education";

export function EducationSection() {
  return (
    <ExpandableSection
      id="education"
      title="Education"
      items={education}
      getKey={(item) => `${item.school}-${item.year}-${item.degree}`}
      renderItem={(item) => <EducationEntry item={item} />}
    />
  );
}

function EducationEntry({ item }: { item: EducationItem }) {
  const [imgError, setImgError] = useState(false);
  const logoSrc = item.logo && !imgError ? publicAsset(item.logo) : null;

  return (
    <ResumeEntry
      title={item.school}
      subtitle={item.degree}
      date={item.year}
      details={item.description ? [item.description] : []}
      logo={
        logoSrc ? (
          <img
            src={logoSrc}
            alt={item.school}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <GraduationCap size={20} aria-hidden="true" />
        )
      }
    />
  );
}
