import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Hero } from "./components/Hero";
import { AboutPage } from "./components/AboutPage";
import { Awards } from "./components/Awards";
import { Education } from "./components/Education";
import { ExperiencePage } from "./components/ExperiencePage";
import { SectionPage } from "./components/SectionPage";
import { Skills } from "./components/Skills";

function HomePage() {
  return <Hero />;
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
      <ScrollToTop />
      <div className="portfolio-shell min-h-screen font-sans">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route
              path="/education"
              element={
                <SectionPage
                  index="02"
                  title="Education"
                  description="Academic foundation in information technology, web design, and design communication."
                >
                  <Education />
                </SectionPage>
              }
            />
            <Route
              path="/skills"
              element={
                <SectionPage
                  index="03"
                  title="Skills"
                  description="Tools and strengths used to design, build, and ship responsive digital experiences."
                >
                  <Skills />
                </SectionPage>
              }
            />
            <Route
              path="/awards"
              element={
                <SectionPage
                  index="04"
                  title="Awards"
                  description="Recognition for product thinking, visual design, and student-led technology work."
                >
                  <Awards />
                </SectionPage>
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
