import React from "react";
import SectionWrapper from "../components/SectionWrapper";

export default function ProcessSection({ id }) {
  const steps = [
    {
      id: "01",
      title: "Discover",
      desc: "Understand the problem, user needs, and project goals before designing anything.",
      points: [
        "User mindset & goals",
        "Problem identification",
        "Requirement gathering",
      ],
      highlight: true,
    },
    {
      id: "02",
      title: "Structure",
      desc: "Translate ideas into structure and flow before visual design.",
      points: ["User flows", "Information architecture", "Lo-fi wireframes"],
    },
    {
      id: "03",
      title: "Design",
      desc: "Create clean and usable interfaces based on structure.",
      points: ["UI design", "Design systems", "Prototyping"],
      highlight: true,
    },
    {
      id: "04",
      title: "Build",
      desc: "Turn designs into functional and responsive interfaces.",
      points: [
        "React implementation",
        "Tailwind CSS",
        "Component-based structure",
      ],
    },
    {
      id: "05",
      title: "Refine",
      desc: "Improve usability and polish the final experience.",
      points: ["UI polish", "Performance tweaks", "Iteration & feedback"],
    },
  ];

  return (
    <SectionWrapper id={id} className="relative min-h-screen w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full pt-10 md:pt-0">
        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col gap-12 relative">
          {/* HEADER */}
          <div className="flex flex-col gap-3">
            <h2 className="text-h1 font-semibold font-display text-text">
              Process
            </h2>

            <p className="text-bodyLg text-muted max-w-md leading-relaxed">
              My approach to designing and building digital products — from idea
              to final implementation.
            </p>
          </div>

          {/* TIMELINE LINE */}
          <div className="absolute left-[9px] top-[150px] bottom-0 w-[1px] bg-border hidden md:block" />

          {/* STEPS */}
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col gap-4 py-10 ${
                  index === 0 ? "pt-0" : ""
                }`}
              >
                {/* DOT */}
                <div
                  className={`hidden md:block absolute left-0 top-[42px] w-5 h-5 rounded-full border ${
                    step.highlight
                      ? "bg-accent border-accent"
                      : "bg-background border-border"
                  }`}
                />

                {/* HEADER */}
                <div className="flex items-start gap-4 md:pl-10">
                  <span className="text-bodyMd text-muted">{step.id}</span>

                  <div className="flex flex-col gap-2">
                    <h3
                      className={`text-h3 font-medium ${
                        step.highlight ? "text-accent" : "text-text"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-bodyLg text-muted max-w-md leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* POINTS */}
                <div className="flex flex-wrap gap-3 md:pl-10">
                  {step.points.map((p) => (
                    <span
                      key={p}
                      className="text-bodySm px-4 py-2 rounded-full border border-border/40 text-muted hover:text-text hover:border-text transition-all duration-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* DIVIDER */}
                {index !== steps.length - 1 && (
                  <div className="border-b border-border/40 mt-8 md:ml-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex items-center md:justify-end">
          <div className="max-w-lg w-full flex flex-col gap-6">
            <p className="text-bodyLg text-text leading-relaxed">
              I don’t jump straight into visuals. I start by understanding the
              problem first, then gradually move into structure, design, and
              development to ensure every decision has purpose.
            </p>

            <div className="border border-border/40 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:border-accent/60 transition-all duration-300">
              <p className="text-bodyMd text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Problem-first approach:
                </span>{" "}
                Every design decision is grounded in real user needs — not just
                aesthetics.
              </p>
            </div>

            <p className="text-bodyMd text-muted leading-relaxed">
              This process is applied across projects like Taskora and
              real-world UI systems I’ve built.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
