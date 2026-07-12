import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  absoluteRouteUrl,
  getSeoForPath,
  seoImageAltFor,
  seoImageFor,
  siteName,
  siteUrl,
} from "../lib/seo";

function upsertMeta(attribute: "name" | "property", value: string, content: string) {
  const selector = `meta[${attribute}="${value}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let element = document.getElementById(id) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(location.pathname);
    const canonicalUrl = absoluteRouteUrl(seo.path);
    const image = seoImageFor(seo);
    const imageAlt = seoImageAltFor(seo);

    document.title = seo.title;
    upsertCanonical(canonicalUrl);

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "robots", "index, follow");

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", imageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", image);
    upsertMeta("name", "twitter:image:alt", imageAlt);

    upsertJsonLd("schema-org", {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: "Jefel Española",
          jobTitle: "Graphic and UI/Web Designer",
          url: `${siteUrl}/`,
          image: `${siteUrl}/jefel.jpeg`,
          email: "mailto:jefel.maitem@gmail.com",
          knowsAbout: [
            "Graphic design",
            "UI design",
            "Web design",
            "Branding",
            "Front-end development",
            "WordPress",
            "Esports graphics",
          ],
          sameAs: [
            "https://www.linkedin.com/in/jefel/",
            "https://github.com/jefel-design",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: siteName,
          url: `${siteUrl}/`,
          publisher: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          name: seo.title,
          description: seo.description,
          url: canonicalUrl,
          isPartOf: {
            "@id": `${siteUrl}/#website`,
          },
          about: {
            "@id": `${siteUrl}/#person`,
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: image,
            caption: imageAlt,
          },
        },
      ],
    });
  }, [location.pathname]);

  return null;
}
