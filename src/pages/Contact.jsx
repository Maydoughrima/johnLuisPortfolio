import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Buttons/Button";

export default function Contact({ id }) {
  return (
    <SectionWrapper id={id} className="relative w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full pt-10 md:pt-0">
        {/* ================= LEFT SIDE ================= */}
        <div className="md:w-1/2 flex flex-col gap-12">
          {/* HEADER */}
          <div className="flex flex-col gap-3">
            <h2 className="text-h1 font-semibold font-display text-text">
              Let’s Work Together
            </h2>

            <p className="text-bodyLg text-muted max-w-md leading-relaxed">
              I’m currently open for freelance projects, collaborations, and
              full-time opportunities. If you have an idea, let’s build it into
              something real.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4 w-full md:w-fit">
            <Button
              as="a"
              href="mailto:johnluismercado863@gmail.com"
              variant="primary"
              size="responsive"
              className="w-full md:w-fit"
            >
              Email Me
            </Button>

            <Button
              as="a"
              href="/MERCADO-JOHN LUIS NATHANIEL-RESUME.pdf"
              download
              variant="ghost"
              size="responsive"
              className="w-full md:w-fit"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* ================= RIGHT SIDE (PROCESS-ALIGNED STYLE) ================= */}
        <div className="md:w-1/2 flex items-center md:justify-end">
          <div className="max-w-lg w-full flex flex-col gap-6">
            {/* MAIN TEXT */}
            <p className="text-bodyLg text-text leading-relaxed">
              I’m always open to collaborating on meaningful digital products —
              from early ideas to fully built systems.
            </p>

            {/* CARD */}
            <div className="border border-border/40 rounded-xl p-6 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:border-accent/50">
              <p className="text-bodyMd text-text leading-relaxed">
                <span className="text-accent font-medium">Availability:</span>{" "}
                Freelance, collaborations, and full-time opportunities.
              </p>

              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="text-bodySm text-muted leading-relaxed">
                  Open to product-focused teams and startup environments.
                </p>
              </div>
            </div>

            {/* RESPONSE TIME */}
            <p className="text-bodyMd text-muted leading-relaxed">
              I usually respond within 24–48 hours depending on scope.
            </p>

            {/* SOCIALS (FIXED + CLEAN INTERACTION) */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/Maydoughrima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bodySm px-4 py-2 rounded-full border border-border/40 text-muted
                hover:text-text hover:border-text transition-all duration-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/john-luis-nathaniel-mercado-98b1a5298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bodySm px-4 py-2 rounded-full border border-border/40 text-muted
                hover:text-text hover:border-text transition-all duration-300"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/bigdaddyzzzzzzuil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bodySm px-4 py-2 rounded-full border border-border/40 text-muted
                hover:text-text hover:border-text transition-all duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
