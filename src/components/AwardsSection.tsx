import { Award } from "lucide-react";
import { useState } from "react";
import { publicAsset } from "../lib/assets";
import { ResumeEntry } from "./ResumeEntry";
import { ExpandableSection } from "./ExpandableSection";
import { awards, type AwardItem } from "../data/awards";

export function AwardsSection() {
  return (
    <ExpandableSection
      id="awards"
      title="Awards"
      items={awards}
      getKey={(award) => `${award.title}-${award.year}`}
      renderItem={(award) => <AwardEntry award={award} />}
    />
  );
}

function AwardEntry({ award }: { award: AwardItem }) {
  const [imgError, setImgError] = useState(false);
  const logoSrc = award.logo && !imgError ? publicAsset(award.logo) : null;

  return (
    <ResumeEntry
      title={award.org}
      subtitle={award.title}
      date={award.year}
      details={[award.description]}
      logo={
        logoSrc ? (
          <img
            src={logoSrc}
            alt={`${award.org} logo`}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <Award size={20} aria-hidden="true" />
        )
      }
    />
  );
}
