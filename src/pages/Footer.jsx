import React from "react";
import SectionWrapper from "../components/SectionWrapper";

export default function Footer() {
  return (
    <SectionWrapper className="relative w-full">
      <div className="flex flex-col gap-12 pt-10 border-t border-border">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-md">
            <h3 className="text-h3 font-semibold font-display text-text">
              John Luis Mercado
            </h3>

            <p className="text-bodyMd text-muted leading-relaxed">
              UI/UX Designer & Front-End Developer focused on building
              structured, scalable, and user-centered digital products.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-bodySm">
            <p className="text-muted uppercase tracking-wider">Navigation</p>
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-muted hover:text-text transition"
              >
                About
              </a>
              <a
                href="#process"
                className="text-muted hover:text-text transition"
              >
                Process
              </a>
              <a
                href="#works"
                className="text-muted hover:text-text transition"
              >
                Works
              </a>
              <a
                href="#contact"
                className="text-muted hover:text-text transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-bodySm">
            <p className="text-muted uppercase tracking-wider">Socials</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/Maydoughrima"
                className="text-muted hover:text-text transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/john-luis-nathaniel-mercado-98b1a5298/"
                className="text-muted hover:text-text transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/bigdaddyzzzzzzuil/"
                className="text-muted hover:text-text transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-border/30" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p className="text-bodySm text-muted">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <p className="text-bodySm text-muted">
            Designed & Built with intention.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
