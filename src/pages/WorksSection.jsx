import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import projects from "../config/projects";
import WorksCard from "../components/WorksCard";
import ContactPreview from "../components/ContactPreview";

export default function WorksSection({ id }) {
  return (
    <SectionWrapper id={id} className="relative min-h-screen w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full pt-10 md:pt-0">
        {/* LEFT */}
        <div className="md:w-2/3 flex flex-col gap-12 relative z-10">
          {/* HEADER */}
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-h1 font-semibold text-text">
              Recent Projects
            </h2>

            <p className="text-bodyLg text-muted max-w-md leading-relaxed">
              Selected work focused on building structured, scalable, and
              user-centered digital experiences.
            </p>
          </div>

          {/* CARDS */}
          <div className="flex flex-col gap-12">
            {projects.map((project) => (
              <WorksCard
                key={project.id}
                id={project.id}
                date={project.date}
                techStack={project.techStack}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/3 md:sticky md:top-32 h-fit">
          <ContactPreview />
        </div>
      </div>
    </SectionWrapper>
  );
}
