import React from "react";
import SectionWrapper from "../components/SectionWrapper";

export default function SkillsSection() {
  return (
    <SectionWrapper className="relative min-h-screen w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full pt-10 md:pt-0">
        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col gap-14">
          {/* HEADER */}
          <div className="flex flex-col gap-3">
            <h2 className="text-h1 font-semibold font-display text-text">
              Skills
            </h2>

            <p className="text-bodyLg text-muted max-w-md leading-relaxed">
              A combination of design thinking and development skills used to
              build intuitive and scalable digital products.
            </p>
          </div>

          {/* GROUPS */}
          <div className="flex flex-col">
            {/* UX */}
            <div className="flex flex-col gap-6 py-10 border-b border-border/40 first:pt-0">
              <div className="flex flex-col gap-2">
                <h3 className="text-h3 font-medium text-text">UX Thinking</h3>
                <p className="text-bodyLg text-muted max-w-md leading-relaxed">
                  Understanding users and structuring meaningful experiences
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "UX Research",
                  "Information Architecture",
                  "User Flows",
                  "Usability Testing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-bodySm px-4 py-2 rounded-full border border-border/40 text-muted hover:text-text hover:border-text transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DESIGN */}
            <div className="flex flex-col gap-6 py-10 border-b border-border/40">
              <div className="flex flex-col gap-2">
                <h3 className="text-h3 font-medium text-text">Design</h3>
                <p className="text-bodyLg text-muted max-w-md leading-relaxed">
                  Crafting interfaces that are clear, usable, and consistent
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Wireframing", "Prototyping", "Interaction Design"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-bodySm px-4 py-2 rounded-full border border-border/40 text-muted hover:text-text hover:border-text transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* DEV */}
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-h3 font-medium text-text">
                  Systems & Development
                </h3>
                <p className="text-bodyLg text-muted max-w-md leading-relaxed">
                  Building scalable interfaces and reusable design systems
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Design Systems",
                  "React.js",
                  "Tailwind CSS",
                  "JavaScript",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-bodySm px-4 py-2 rounded-full border border-border/40 text-muted hover:text-text hover:border-text transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex items-center md:justify-end">
          <div className="max-w-lg w-full">
            <p className="text-bodyLg text-text leading-relaxed">
              I design and build systems that balance usability and performance.
              From user flows to fully functional interfaces, I focus on
              creating experiences that are both intuitive and scalable.
            </p>

            <p className="mt-6 text-bodyMd text-muted leading-relaxed">
              Built real-world systems including a payroll platform and a task
              management application.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
