import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

type SectionHeadingProps = {
  id?: string;
  title: string;
  description?: string;
  toggle?: {
    isExpanded: boolean;
    controls: string;
    onToggle: () => void;
  };
};

export function SectionHeading({
  id,
  title,
  description,
  toggle,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("section-heading", toggle && "section-heading--expandable")}
    >
      <div>
        <h2 id={id} className="section-heading-title">{title}</h2>
        {description && (
          <p className="section-heading-description">{description}</p>
        )}
      </div>

      {toggle && (
        <button
          type="button"
          className="section-toggle"
          aria-label={`${toggle.isExpanded ? "See less" : "See more"} ${title.toLowerCase()}`}
          aria-expanded={toggle.isExpanded}
          aria-controls={toggle.controls}
          onClick={toggle.onToggle}
        >
          <span>{toggle.isExpanded ? "See less" : "See more"}</span>
          <ChevronDown
            aria-hidden="true"
            size={14}
            strokeWidth={1.75}
            className={cn("section-toggle-icon", toggle.isExpanded && "is-expanded")}
          />
        </button>
      )}
    </div>
  );
}
