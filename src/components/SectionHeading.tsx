import { ChevronDown } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  isExpanded?: boolean;
  controls?: string;
  onToggle?: () => void;
};

export function SectionHeading({
  title,
  description,
  isExpanded,
  controls,
  onToggle,
}: SectionHeadingProps) {
  const isExpandable =
    typeof isExpanded === "boolean" && Boolean(controls && onToggle);

  return (
    <div
      className={`section-heading ${isExpandable ? "section-heading--expandable" : ""}`}
    >
      <div>
        <h2 className="section-heading-title">{title}</h2>
        {description && (
          <p className="section-heading-description">{description}</p>
        )}
      </div>

      {isExpandable && (
        <button
          type="button"
          className="section-toggle"
          aria-expanded={isExpanded}
          aria-controls={controls}
          onClick={onToggle}
        >
          <span>{isExpanded ? "See less" : "See more"}</span>
          <ChevronDown
            aria-hidden="true"
            size={14}
            strokeWidth={1.75}
            className={`section-toggle-icon ${isExpanded ? "is-expanded" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
