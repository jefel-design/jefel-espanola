import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { AwardsSection } from "./AwardsSection";
import { EducationSection } from "./EducationSection";
import { SkillsSection } from "./SkillsSection";
import { publicAsset } from "../lib/assets";

export function AboutPage() {
  return (
    <div id="about" className="about-page">
      <section className="relative overflow-hidden pb-14">
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div className="about-accent-blob" />
          <div className="about-light-blob" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.48fr)] lg:gap-14">
            <RevealOnScroll className="space-y-8">
              <Link
                to="/"
                aria-label="Back to home"
                className="about-back-link"
              >
                <ArrowLeft size={18} />
              </Link>

              <div className="flex items-center gap-4">
                <h1 className="about-title">
                  I design digital work that feels clear, useful, and
                  intentional.
                </h1>
              </div>

              <div className="max-w-3xl space-y-4">
                <p className="about-copy mb-5 text-sm font-light leading-relaxed md:text-base">
                  I work across graphic design, UI/web design, and front-end
                  implementation, shaping visuals that communicate clearly and
                  feel deliberate.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll
              className="relative mx-auto w-full max-w-[12rem] px-2 pt-4 sm:max-w-[14rem] lg:max-w-[15rem]"
              delayMs={120}
            >
              <div className="absolute inset-x-10 bottom-0 h-24 rounded-full bg-black/50 blur-2xl" />
              <div className="about-photo-card">
                <div className="overflow-hidden rounded-[0.95rem] bg-black">
                  <img
                    src={publicAsset("jefel.jpeg")}
                    alt="Jefel Espanola portrait"
                    loading="eager"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>

                <div className="px-2 pb-1 pt-4">
                  <div>
                    <p className="about-person-name">
                      Jefel Espanola
                    </p>
                    <p className="about-person-role">
                      Graphic Designer and UI/Web Designer
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="pb-32 pt-8 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
          <EducationSection />
          <SkillsSection />
          <AwardsSection />
        </div>
      </section>
    </div>
  );
}
