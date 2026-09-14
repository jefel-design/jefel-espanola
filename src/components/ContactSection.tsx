import { RevealOnScroll } from "./RevealOnScroll";

export function ContactSection() {
  return (
    <footer id="contact" className="content-section contact-section">
      <div className="page-container contact-section-inner">
        <RevealOnScroll className="contact-reveal">
          <p className="contact-message">
            <span className="shining-text">Let’s create what’s possible.</span>
          </p>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
