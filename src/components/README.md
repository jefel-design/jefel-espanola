# Components Guide

- `HomeHero.tsx`: homepage intro, homepage nav links, and "Get in touch" link.
- `SectionPageLayout.tsx`: shared layout for Experience, Education, Skills, and Awards pages.
- `ExperiencePage.tsx`: Experience page title, index, and description.
- `RouteSeo.tsx`: route-aware browser metadata updates from `src/data/seoRoutes.json`.
- `ExperienceSection.tsx`: Experience cards and role content.
- `EducationSection.tsx`: Education cards and school content.
- `SkillsSection.tsx`: Skills cards and skill lists.
- `AwardsSection.tsx`: Award cards and award content.
- `AboutPage.tsx`: About page layout and profile content.
- `RevealOnScroll.tsx`: reusable scroll animation helper.

Most visual page-frame changes belong in `SectionPageLayout.tsx` or `src/index.css`.
Most card/content edits belong in the matching `*Section.tsx` file.
Most route title and meta description edits belong in `src/data/seoRoutes.json`.
Simple page-load animation styles live in `src/index.css` as `slide-fade-up`.
