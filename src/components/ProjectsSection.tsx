import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioProjects, type PortfolioProject } from "../data/experience";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

const primaryProjects = portfolioProjects.slice(0, 3);
const additionalProjects = portfolioProjects.slice(3);

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasAdditionalProjects = additionalProjects.length > 0;

  return (
    <section id="work" className="content-section projects-section">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            title="Projects"
            isExpanded={hasAdditionalProjects ? isExpanded : undefined}
            controls={
              hasAdditionalProjects ? "projects-additional-content" : undefined
            }
            onToggle={
              hasAdditionalProjects
                ? () => setIsExpanded((current) => !current)
                : undefined
            }
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <ul className="project-row-list" role="list">
            {primaryProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </ul>

          {hasAdditionalProjects && (
            <div id="projects-additional-content" hidden={!isExpanded}>
              <ul
                className="project-row-list project-row-list--additional"
                role="list"
              >
                {additionalProjects.map((project) => (
                  <ProjectRow key={project.slug} project={project} />
                ))}
              </ul>
            </div>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: PortfolioProject }) {
  return (
    <li className="project-row">
      <span className="project-row-date">{project.timeframe}</span>
      <span className="project-row-leader" aria-hidden="true" />
      <Link
        to={`/projects/${project.slug}`}
        className="project-row-link"
        aria-label={`${project.name} for ${project.client}`}
      >
        <span className="project-row-text">
          <span className="project-row-client">{project.client} · </span>
          <span className="project-row-name">{project.name}</span>
        </span>
        <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.75} />
      </Link>
    </li>
  );
}
