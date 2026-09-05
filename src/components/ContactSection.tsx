import { Mail } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

export function ContactSection() {
  return (
    <footer id="contact" className="content-section contact-section">
      <div className="page-container contact-section-inner">
        <RevealOnScroll className="contact-reveal">
          <p className="contact-message">
            <span className="shining-text">Let’s create what’s possible.</span>
          </p>

          <div className="contact-social">
            <a
              href="mailto:jefel.maitem@gmail.com"
              className="footer-contact-link"
            >
              <Mail
                aria-hidden="true"
                className="footer-contact-icon"
                size={16}
                strokeWidth={1.75}
              />
              <span>Get in touch</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
