import React from "react";
import Button from "./Buttons/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function WorksCard({
  id,
  date,
  techStack = [],
  title,
  description,
}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 pb-10 border-b border-border group">
      {/* header */}
      <div className="flex items-center gap-2 text-sm text-muted">
        {/* date */}
        <span className="text-bodySm font-body text-muted shrink-0">
          {date}
        </span>

        {/* dot separator */}
        <span className="w-1 h-1 rounded-full bg-muted opacity-60" />

        {/* tech stack */}
        <div className="flex flex-wrap gap-2 items-center">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-transparent font-body border border-border text-muted rounded-full text-bodyXs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* title */}
      <h3 className="text-h3 font-semibold font-display text-text leading-tight group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* description */}
      <p className="text-muted text-bodyLg leading-relaxed max-w-2xl">
        {description}
      </p>

      {/* button */}
      <div className="w-full md:w-auto relative z-50">
        <Button
          variant="ghost"
          size="responsive"
          className="w-full md:w-auto"
          onClick={() => {
            console.log("clicked");
            navigate(`/projects/${id}`);
          }}
        >
          View Project
        </Button>
      </div>
    </div>
  );
}
