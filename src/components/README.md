# Components Guide

- `HomePage.tsx`: one-page composition for the primary portfolio content.
- `HomeHero.tsx`: homepage intro, typing animation, utility controls, and short about copy.
- `HeroNote.tsx`: accessible `NOTE / 01` disclosure and contact action.
- `mode-toggle.tsx`: shared light/dark theme control.
- `theme-provider.tsx` and `theme-context.ts`: persistent theme state.
- `SectionHeading.tsx`: shared heading, optional description, and expand/collapse control.
- `RouteSeo.tsx`: route-aware browser metadata updates from `src/data/seoRoutes.json`.
- `ExperienceSection.tsx`: primary and expandable Experience cards.
- `WorkSection.tsx`: selected project cards linking to case-study routes.
- `ProjectPage.tsx`: reusable project case-study route.
- `EducationSection.tsx`: primary and expandable Education cards.
- `SkillsSection.tsx`: primary and expandable Skills cards with right-aligned tool marks.
- `AwardsSection.tsx`: primary and expandable Award cards.
- `ContactSection.tsx`: outlined email footer, contact action, and LinkedIn link.
- `RevealOnScroll.tsx`: reusable one-time IntersectionObserver reveal helper.

Most visual layout changes belong in the matching section component or `src/index.css`.
Most card/content edits belong in the matching `*Section.tsx` file.
Most route title and meta description edits belong in `src/data/seoRoutes.json`.
Page-load, scroll-reveal, reduced-motion, and expand/collapse animation styles live in `src/index.css`.
