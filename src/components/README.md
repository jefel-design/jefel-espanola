# Components Guide

- `HomePage.tsx`: one-page composition for the primary portfolio content.
- `HomeHero.tsx`: homepage intro, typing animation, utility controls, and short about copy.
- `ProjectsSection.tsx`: compact project rows with dates, dotted leaders, case-study links, and a See more control.
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
- `ContactSection.tsx`: closing footer message.
- `RevealOnScroll.tsx`: reusable one-time IntersectionObserver reveal helper.

Most visual layout changes belong in the matching section component or `src/index.css`.
Typography uses the shared Geist font at weight 400, with 15px headings/body text and 14px section controls.
Most card/content edits belong in the matching `*Section.tsx` file.
Most route title and meta description edits belong in `src/data/seoRoutes.json`.
Page-load, scroll-reveal, reduced-motion, and expand/collapse animation styles live in `src/index.css`.
