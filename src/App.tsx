import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutPage } from './components/AboutPage';
import { Experience } from './components/Experience';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';

function App() {
  const isAboutPage = window.location.pathname === '/about';

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main>
        {isAboutPage ? (
          <AboutPage />
        ) : (
          <>
            <Hero />
            <Experience />
          </>
        )}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
