import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

type SectionPageLayoutProps = {
  index: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionPageLayout({
  index,
  title,
  description,
  children,
}: SectionPageLayoutProps) {
  return (
    <div className="section-page-grid min-h-screen">
      <div aria-hidden="true" className="figma-vline figma-vline-left" />
      <div aria-hidden="true" className="figma-vline figma-vline-right" />

      <section className="section-page-hero">
        <div className="page-container">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              aria-label="Back home"
              className="section-back-link slide-fade-up"
            >
              <ArrowLeft size={18} strokeWidth={1.75} />
            </Link>

            <ModeToggle className="slide-fade-up" />
          </div>

          <div className="section-page-heading slide-fade-up slide-fade-up-delay-1">
            <p className="section-page-index">
              {index}
            </p>

            <h1 className="section-page-title">
              {title}
            </h1>

            <p className="section-page-description">
              {description}
            </p>
          </div>
        </div>
      </section>

      {children}

      <footer className="section-page-footer">
        <div className="page-container section-page-footer-inner">
          <div
            className="section-footer-email slide-fade-up slide-fade-up-delay-3 max-w-full break-words font-body text-[clamp(28px,8vw,82px)] font-normal leading-none tracking-[-0.06em]"
          >
            jefel.maitem@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}
