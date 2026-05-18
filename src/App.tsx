import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AboutPage } from "./components/AboutPage";
import { AwardsSection } from "./components/AwardsSection";
import { EducationSection } from "./components/EducationSection";
import { ExperiencePage } from "./components/ExperiencePage";
import { HomeHero } from "./components/HomeHero";
import { RouteSeo } from "./components/RouteSeo";
import { SectionPageLayout } from "./components/SectionPageLayout";
import { SkillsSection } from "./components/SkillsSection";

function HomePage() {
  return <HomeHero />;
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);

      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RouteSeo />
      <ScrollToTop />
      <div className="portfolio-shell min-h-screen font-sans">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route
              path="/education"
              element={
                <SectionPageLayout
                  index="02"
                  title="Education"
                  description="Academic foundation in information technology, web design, and design communication."
                >
                  <EducationSection />
                </SectionPageLayout>
              }
            />
            <Route
              path="/skills"
              element={
                <SectionPageLayout
                  index="03"
                  title="Skills"
                  description="Tools and strengths used to design, build, and ship responsive digital experiences."
                >
                  <SkillsSection />
                </SectionPageLayout>
              }
            />
            <Route
              path="/awards"
              element={
                <SectionPageLayout
                  index="04"
                  title="Awards"
                  description="Recognition for product thinking, visual design, and student-led technology work."
                >
                  <AwardsSection />
                </SectionPageLayout>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
