export type ExperienceProject = {
  name: string;
  link: string;
  image: string;
  imageAlt?: string;
  summary?: string;
  label?: string;
};

export type ExperienceEntry = {
  slug: string;
  company: string;
  title: string;
  summary: string;
  cardSummary: string;
  cardRoleLabel?: string | string[];
  role: string;
  timeframe: string;
  location: string;
  engagement: string;
  tools: string[];
  logo?: string;
  projects: ExperienceProject[];
};

const experiences: ExperienceEntry[] = [
  {
    slug: "ark-design",
    company: "Ark Design B.V.",
    title: "Graphic & UI/Web Designer",
    summary:
      "Designing responsive websites, digital campaigns, and brand systems with a focus on clarity, usability, and polished visual presentation.",
    cardSummary:
      "Graphic & UI/Web Designer at Ark Design B.V., building responsive WordPress websites, creating digital ads and branding, and designing user-focused web and software interfaces.",
    cardRoleLabel: [
      "Graphic Designer",
      "UI/WEB Design",
      "Wordpress Developer",
      "SMM",
    ],
    role: "Graphic Designer, UI/WEB Design, WordPress Developer, SMM",
    timeframe: "2024 – Present",
    location: "Netherlands - Remote",
    engagement: "Full-time",
    tools: ["WordPress", "Elementor", "UI Design", "Branding"],
    logo: "ark-design.png",
    projects: [
      {
        name: "Product Configurator Website Redesign",
        link: "https://productconfigurator.nl/",
        image: "webproject1.png",
        imageAlt: "Ark Design corporate website redesign",
        label: "UI Redesign",
        summary: "Responsive website refresh focused on structure, clarity, and conversion.",
      },
      {
        name: "Social Media Graphics",
        link: "https://www.linkedin.com/company/arkdesign/posts/?feedView=all",
        image: "arkad1.jpeg",
        imageAlt: "Ark Design brand identity package",
        label: "Brand Identity",
        summary: "Brand collateral and visual identity work for digital and client-facing touchpoints.",
      },
      {
        name: "ArkDesign Redesign",
        link: "https://www.arkdesign.nl/",
        image: "ark2.png",
        imageAlt: "Ark Design website redesign",
        label: "Website Redesign",
        summary: "Website redesign work balancing modern presentation with a premium studio feel.",
      },
    ],
  },
  {
    slug: "tnc-kaiserin",
    company: "TNC Kaiserin",
    title: "Head Designer",
    summary:
      "Led visual design for esports campaigns, promotional assets, and branded content built to energize the audience and strengthen team identity.",
    cardSummary:
      "Led graphic design projects, created promotional materials, and supported branding initiatives.",
    cardRoleLabel: "Graphic Designer",
    role: "Graphic Designer",
    timeframe: "March 2024 - June 2024",
    location: "Philippines",
    engagement: "Freelance",
    tools: ["Campaign Design", "Posters", "Branding", "Social Graphics"],
    logo: "tnc-kaiserin.png",
    projects: [
      {
        name: "Roster",
        link: "https://www.facebook.com/photo.php?fbid=1265132472286073&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-1.jpg",
        imageAlt: "TNC Kaiserin roster campaign",
        label: "Roster Reveal",
        summary: "Announcement creative highlighting lineup identity and event energy.",
      },
      {
        name: "Roster Reveal",
        link: "https://www.facebook.com/photo.php?fbid=1228044165994904&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-2.jpg",
        imageAlt: "TNC Kaiserin roster reveal graphics",
        label: "Campaign Poster",
        summary: "Reveal campaign visuals created for social rollout and audience engagement.",
      },
      {
        name: "MVP",
        link: "https://www.facebook.com/photo.php?fbid=1216178023848185&set=pb.100063679975758.-2207520000&type=3",
        image: "poster-3.jpg",
        imageAlt: "TNC Kaiserin MVP feature poster",
        label: "Player Feature",
        summary: "Player spotlight visual designed to celebrate standout performance with a bold editorial style.",
      },
    ],
  },
  {
    slug: "bren-esports",
    company: "Bren Esports - Shizou",
    title: "Player-specific Graphic Designer",
    summary:
      "Created branded player content and promotional visuals tailored to a professional esports identity, with fast-turnaround execution for social media moments.",
    cardSummary:
      "Player-specific Graphic Designer for Bren Esports, creating branded content and visuals for professional player Shizou.",
    cardRoleLabel: "Graphic Designer",
    role: "Graphic Designer",
    timeframe: "Feb 2024 - April 2024",
    location: "Philippines",
    engagement: "Freelance",
    tools: ["Player Branding", "Posters", "Social Graphics"],
    logo: "ap-bren.png",
    projects: [
      {
        name: "Roster",
        link: "https://www.facebook.com/photo.php?fbid=1126063892864934&set=pb.100063840020177.-2207520000&type=3",
        image: "apbr1.jpg",
        imageAlt: "Bren Esports roster graphic",
        label: "Roster Graphic",
        summary: "Team announcement visual designed around player branding and competitive presence.",
      },
      {
        name: "Game Day",
        link: "https://www.facebook.com/photo.php?fbid=1149090933895563&set=pb.100063840020177.-2207520000&type=3",
        image: "apbr2.jpg",
        imageAlt: "Bren Esports game day graphic",
        label: "Match-Day Graphic",
        summary: "Match-day creative built for urgency, readability, and mobile-first viewing.",
      },
    ],
  },
  {
    slug: "surigao-esports-collective",
    company: "Surigao Esports Collective",
    title: "Head Designer",
    summary:
      "Directed visual design across broadcasts, social content, and event promotions to give the organization a stronger and more cohesive competitive identity.",
    cardSummary:
      "Led design for broadcast graphics, social media content, promotional posters, and brand assets.",
    cardRoleLabel: "Graphic Designer",
    role: "Graphic Designer",
    timeframe: "2023 – 2024",
    location: "Philippines",
    engagement: "Contract",
    tools: ["Broadcast Visuals", "League Branding", "Posters", "Social Graphics"],
    logo: "surigao-esports.png",
    projects: [
      {
        name: "CEAP",
        link: "https://www.facebook.com/photo.php?fbid=375363668895238&set=pb.100092648244877.-2207520000&type=3",
        image: "ceap1.jpg",
        imageAlt: "Surigao Esports Collective broadcast graphics",
        label: "Broadcast Design",
        summary: "Broadcast-facing graphics package created for tournament presentation and promotion.",
      },
      {
        name: "Surecol 1",
        link: "https://www.facebook.com/photo.php?fbid=122123598602098189&set=pb.61552945697929.-2207520000&type=3",
        image: "surcol1.jpg",
        imageAlt: "Surigao Esports Collective league branding",
        label: "League Branding",
        summary: "League identity work combining event energy with clear branded storytelling.",
      },
    ],
  },
  {
    slug: "jefel-arts",
    company: "Jefel Arts",
    title: "Freelance Visual Designer",
    summary:
      "Producing custom commission work for streetwear, esports, and merchandise brands through expressive visuals, apparel graphics, and campaign-led design pieces.",
    cardSummary:
      "Custom commission-based designs for streetwear, esports, and merchandise brands.",
    cardRoleLabel: "Graphic Designer",
    role: "Graphic Designer",
    timeframe: "2022 – Present",
    location: "Philippines",
    engagement: "Freelance",
    tools: ["Apparel Design", "Commission Work", "Merch Graphics", "Posters"],
    logo: "jefel-arts-preview.jpg",
    projects: [
      {
        name: "Max Poster",
        link: "https://www.facebook.com/photo?fbid=867026052813571&set=a.116471364535714",
        image: "max1.jpg",
        imageAlt: "Jefel Arts Max poster design",
        label: "Poster Design",
        summary: "Commission poster built with a streetwear-inspired graphic approach.",
      },
      {
        name: "Ant Poster",
        link: "https://www.facebook.com/photo?fbid=871515925697917&set=a.116471364535714",
        image: "ant1.jpg",
        imageAlt: "Jefel Arts Ant poster design",
        label: "Poster Design",
        summary: "Merch-driven promotional visual combining apparel cues and bold typographic treatment.",
      },
      {
        name: "YG",
        link: "https://www.facebook.com/photo/?fbid=719676287548549&set=pcb.719676417548536",
        image: "yg1.jpg",
        imageAlt: "Jefel Arts YG commission design",
        label: "Jersey Design",
        summary: "Commission piece focused on impact, mood, and collectible poster energy.",
      },
    ],
  },
];

function extractPeriodRanking(period: string) {
  const years = Array.from(period.matchAll(/\d{4}/g)).map((match) =>
    Number(match[0]),
  );
  const latestYear = years.length ? Math.max(...years) : 0;
  const startYear = years.length ? years[0] : 0;
  const isCurrent = /present/i.test(period);

  return { isCurrent, latestYear, startYear };
}

export const experienceEntries = [...experiences].sort((a, b) => {
  const left = extractPeriodRanking(a.timeframe);
  const right = extractPeriodRanking(b.timeframe);

  if (left.isCurrent !== right.isCurrent) {
    return Number(right.isCurrent) - Number(left.isCurrent);
  }

  if (left.latestYear !== right.latestYear) {
    return right.latestYear - left.latestYear;
  }

  return right.startYear - left.startYear;
});

export function getExperienceBySlug(slug: string) {
  return experienceEntries.find((experience) => experience.slug === slug);
}
