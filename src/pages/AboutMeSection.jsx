import React from "react";
import SectionWrapper from "../components/SectionWrapper";

export default function AboutMeSection({ id }) {
  return (
    <SectionWrapper id={id} className="relative min-h-screen w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full pt-10 md:pt-0">
        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col gap-10">
          {/* HEADER */}
          <div className="flex flex-col gap-3">
            <h2 className="text-h1 font-semibold font-display text-text">
              About
            </h2>

            <p className="text-bodyLg text-muted max-w-md leading-relaxed">
              A UI/UX designer and front-end developer focused on building
              structured, scalable digital products.
            </p>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col">
            {/* BLOCK 1 */}
            <div className="flex flex-col gap-4 pb-10 border-b border-border/40">
              <p className="text-bodyLg text-text leading-relaxed max-w-md">
                I approach projects by understanding the problem first — not
                just the visuals — then translating that into clear user flows
                and functional interfaces.
              </p>
            </div>

            {/* BLOCK 2 */}
            <div className="flex flex-col gap-4 py-10 border-b border-border/40">
              <p className="text-bodyLg text-text leading-relaxed max-w-md">
                My work combines design thinking with development, allowing me
                to create experiences that are not only intuitive, but also
                practical to build and scale.
              </p>
            </div>

            {/* BLOCK 3 */}
            <div className="flex flex-col gap-4 pt-8">
              <p className="text-bodyLg text-text leading-relaxed max-w-md">
                I’ve built real-world systems including a payroll platform and a
                task management application, applying this process from concept
                to implementation.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex items-center md:justify-end">
          <div className="max-w-lg w-full flex flex-col gap-6">
            <p className="text-bodyLg text-text leading-relaxed">
              I design with structure and build with intention — making sure
              every decision connects back to real user needs.
            </p>

            <div className="border border-border/40 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:border-accent/60 transition-all duration-300">
              <p className="text-bodyMd text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Problem-first mindset:
                </span>{" "}
                I prioritize clarity, usability, and scalability over visual
                noise.
              </p>
            </div>

            <p className="text-bodyMd text-muted leading-relaxed">
              This approach allows me to bridge the gap between design and
              development — creating systems, not just screens.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
