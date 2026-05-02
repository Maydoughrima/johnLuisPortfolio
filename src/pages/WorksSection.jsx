import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import projects from "../config/projects";
import WorksCard from "../components/WorksCard";
import ContactPreview from "../components/ContactPreview";

export default function WorksSection() {
  return (
    <SectionWrapper className="relative min-h-screen w-full">
      {/* container */}
      <div className="flex flex-col md:flex-row gap-16">
        {/* LEFT SIDE (works content) */}
        <div className="md:w-2/3 flex flex-col gap-12 relative z-10">
          {/* header */}
          <p className="font-display text-h2 font-semibold text-font">
            Recent Projects
          </p>

          {/* cards */}
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

        {/* RIGHT SIDE (contact preview) */}
        <div className="md:w-1/3 md:sticky md:top-24 h-fit relative z-0">
          <div className="pointer-events-auto">
            <ContactPreview />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
