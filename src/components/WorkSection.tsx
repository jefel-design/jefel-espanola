import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioProjects } from "../data/experience";
import { publicAsset } from "../lib/assets";
import { SectionHeading } from "./SectionHeading";

export function WorkSection() {
  return (
    <section id="work" className="content-section">
      <div className="section-container">
        <SectionHeading
          title="Selected Work"
          description="A selection of website, brand, campaign, and esports design projects."
        />

        <div className="card-grid">
          {portfolioProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="portfolio-card portfolio-card--column project-card"
            >
              <div className="project-card-image-frame">
                <img
                  src={publicAsset(project.image)}
                  alt={project.imageAlt ?? project.name}
                  loading="lazy"
                  decoding="async"
                  className="project-card-image"
                />
              </div>

              <div className="portfolio-card-content flex flex-1 flex-col">
                <div className="project-card-heading">
                  <div>
                    <h3 className="portfolio-card-title">{project.name}</h3>
                    <p className="portfolio-card-meta">{project.client}</p>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="project-card-icon"
                    size={18}
                    strokeWidth={1.75}
                  />
                </div>

                {project.summary && (
                  <p className="portfolio-card-copy mt-4">
                    {project.summary}
                  </p>
                )}

                {project.label && (
                  <div className="mt-5">
                    <span className="portfolio-tag">{project.label}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
