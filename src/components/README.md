# Components Guide

- `HomePage.tsx`: homepage composition inside `.home-page`, which controls the 600px maximum width, outer padding, and vertical centering. Its `<main className="home-page-content">` groups the page sections, followed by the contact footer.
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
Typography uses the shared Geist Light font at weight 300, with 15px headings/body text and 14px section controls.
Most card/content edits belong in the matching `*Section.tsx` file.
Most route title and meta description edits belong in `src/data/seoRoutes.json`.
Page-load, scroll-reveal, reduced-motion, and expand/collapse animation styles live in `src/index.css`.

## Markup and class names

Each route owns one `<main>` element. Use `<section>` for a named content section, `<header>` for introductory content, and `<footer>` for the closing message.

CSS class names use lowercase words separated by hyphens, with the component name first: `home-page`, `hero-header`, `hero-title`, and `hero-description`. Give styled elements explicit class names instead of targeting generic children such as `> div`.

The hero uses a 16px gap below its header and above the contact button. Update matching class names in both the component and `src/index.css`, including responsive rules.
