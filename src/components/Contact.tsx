import { ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

type Highlight = {
  title: string;
  category: string;
  image: string;
  link: string;
};

const highlights: Highlight[] = [
  {
    title: 'Product Configurator Redesign',
    category: 'UI/Web Design',
    image: 'webproject1.png',
    link: 'https://productconfigurator.nl/',
  },
  {
    title: 'ArkDesign Website Redesign',
    category: 'Web Experience',
    image: 'ark2.png',
    link: 'https://www.arkdesign.nl/',
  },
  {
    title: 'Bren Esports Campaign Visual',
    category: 'Esports Creative',
    image: 'apbr2.jpg',
    link: 'https://www.facebook.com/photo.php?fbid=1149090933895563&set=pb.100063840020177.-2207520000&type=3',
  },
  {
    title: 'SEC Broadcast Visuals',
    category: 'Brand + Event Design',
    image: 'surcol1.jpg',
    link: 'https://www.facebook.com/photo.php?fbid=122123598602098189&set=pb.61552945697929.-2207520000&type=3',
  },
  {
    title: 'TNC Kaiserin Roster Reveal',
    category: 'Social Campaign',
    image: 'poster-2.jpg',
    link: 'https://www.facebook.com/photo.php?fbid=1228044165994904&set=pb.100063679975758.-2207520000&type=3',
  },
  {
    title: 'Jefel Arts Apparel Poster',
    category: 'Poster',
    image: 'max1.jpg',
    link: 'https://www.facebook.com/photo?fbid=867026052813571&set=a.116471364535714',
  },
];

export function Contact() {
  const carouselItems = [...highlights, ...highlights];

  return (
    <section
      id="contact"
      className="pt-12 pb-14 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-8">
        <RevealOnScroll className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
            Project Highlights
          </h2>
          <p className="text-sm md:text-base font-light text-[var(--text-secondary)] max-w-2xl">
            A curated look at selected branding, UI/web, and campaign projects.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative">
            <div className="project-fade-left hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-20" />
            <div className="project-fade-right hidden sm:block pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-20" />

            <div className="project-carousel overflow-hidden">
              <div className="project-track flex items-stretch gap-4 md:gap-5 w-max">
                {carouselItems.map((item, index) => (
                  <a
                    key={`${item.title}-${index}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 shrink-0 w-[260px] sm:w-[300px] lg:w-[320px]"
                    style={{
                      borderColor: 'var(--card-border)',
                      backgroundColor: 'var(--card-bg)',
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ExternalLink size={18} className="text-white" />
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <p className="text-[11px] uppercase tracking-[0.14em] font-light text-[var(--text-muted)]">
                        {item.category}
                      </p>
                      <p className="text-sm font-medium text-[var(--text-primary)] leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
