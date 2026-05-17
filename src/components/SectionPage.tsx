import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type SectionPageProps = {
  index: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionPage({
  index,
  title,
  description,
  children,
}: SectionPageProps) {
  return (
    <div className="section-page-grid min-h-screen bg-[var(--bg-primary)]">
      <div aria-hidden="true" className="figma-vline figma-vline-left" />
      <div aria-hidden="true" className="figma-vline figma-vline-right" />
      <div aria-hidden="true" className="section-page-hline section-page-hline-top" />
      <div aria-hidden="true" className="section-page-hline section-page-hline-bottom" />

      <section className="relative min-h-[360px] pb-0 pt-24">
        <div className="mx-auto max-w-5xl px-12 sm:px-6 lg:px-10">
          <Link
            to="/"
            aria-label="Back home"
            className="inline-flex items-center justify-center text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
          >
            <ArrowLeft size={18} strokeWidth={1.75} />
          </Link>

          <div className="mt-12 max-w-2xl">
            <p className="font-heading text-xs text-[var(--text-faint)]">
              {index}
            </p>

            <h1 className="mt-4 font-heading text-[20px] font-normal leading-7 text-[var(--text-primary)]">
              {title}
            </h1>

            <p className="mt-5 font-body text-[16px] leading-7 text-[var(--text-muted)]">
              {description}
            </p>
          </div>
        </div>
      </section>

      {children}

      <footer className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-5xl px-12 pb-8 pt-16 sm:px-6 lg:px-10">
          <div className="max-w-full break-words font-body text-[clamp(28px,8vw,82px)] font-normal leading-none tracking-[-0.06em] text-[#131313]">
            jefeljohnmaitem@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}