import { Fragment, type Key, type ReactNode, useState } from "react";
import { cn } from "../lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

type ExpandableSectionProps<T> = {
  id: string;
  title: string;
  items: readonly T[];
  getKey: (item: T) => Key;
  renderItem: (item: T) => ReactNode;
};

export function ExpandableSection<T>({
  id,
  title,
  items,
  getKey,
  renderItem,
}: ExpandableSectionProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const headingId = `${id}-heading`;
  const panelId = `${id}-additional-content`;
  const hasMore = items.length > 1;

  if (items.length === 0) return null;

  const renderItems = (entries: readonly T[]) => (
    <div className="section-list">
      {entries.map((item) => (
        <Fragment key={getKey(item)}>{renderItem(item)}</Fragment>
      ))}
    </div>
  );

  return (
    <section id={id} className="content-section" aria-labelledby={headingId}>
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            id={headingId}
            title={title}
            toggle={hasMore ? {
              isExpanded,
              controls: panelId,
              onToggle: () => setIsExpanded((current) => !current),
            } : undefined}
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          {renderItems(items.slice(0, 1))}
        </RevealOnScroll>

        {hasMore && (
          <div
            id={panelId}
            className={cn("expandable-panel", isExpanded && "is-visible")}
            aria-hidden={!isExpanded}
            ref={(element) => {
              if (element) element.inert = !isExpanded;
            }}
          >
            <div className="expandable-panel-inner">
              {renderItems(items.slice(1))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
