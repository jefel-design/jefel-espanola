import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ProjectPage } from "./components/ProjectPage";
import { RouteSeo } from "./components/RouteSeo";

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
            <Route path="/projects/:projectSlug" element={<ProjectPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
