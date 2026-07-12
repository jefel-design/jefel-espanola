import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
      <div aria-hidden="true" className="section-page-hline section-page-hline-bottom" />

      <section className="relative min-h-[360px] pb-0 pt-24">
        <div className="mx-auto max-w-5xl px-12 sm:px-6 lg:px-10">
          <Link
            to="/"
            aria-label="Back home"
            className="section-back-link slide-fade-up"
          >
            <ArrowLeft size={18} strokeWidth={1.75} />
          </Link>

          <div className="slide-fade-up slide-fade-up-delay-1 mt-12 max-w-2xl">
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
        <div className="mx-auto max-w-5xl px-12 py-16 sm:px-6 lg:px-10">
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
