import React from "react";
import dealSvg from "../assets/dealSvg.svg";
import Button from "./Buttons/Button";

export default function ContactPreview() {
  return (
    <div className="flex flex-col items-center text-center gap-6 border border-border p-6 md:p-8 rounded-2xl">
      {/* SVG on top */}
      <div className="w-full flex justify-center">
        <img
          src={dealSvg}
          alt="Handshake"
          className="w-[220px] md:w-[280px] opacity-70"
        />
      </div>

      {/* text content */}
      <div className="flex flex-col gap-3">
        <h3 className="text-h3 font-display font-semibold text-text">
          Got a project in mind?
        </h3>

        <p className="text-muted text-bodySm leading-relaxed max-w-sm">
          Let’s build something meaningful together. I’m open to freelance work
          and collaborations.
        </p>
      </div>

      {/* button */}
      <div className="w-full flex justify-center pt-2">
        <Button
          variant="primary"
          size="responsive"
          className="w-full md:w-auto"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}
