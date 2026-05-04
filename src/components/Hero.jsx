import React from "react";
import SectionWrapper from "./SectionWrapper";
import Blob from "../assets/blob.svg";
import Blob2 from "../assets/blob2.svg";
import Button from "./Buttons/Button";
import { FiArrowDown } from "react-icons/fi";

export default function Hero({ id }) {
  return (
    <SectionWrapper id={id} className="relative min-h-screen flex items-center">
      {/* Top Right Blob */}
      <img
        src={Blob}
        alt="blob"
        className="
          absolute
          top-[-20%] right-[-45%]
          md:top-[-40%] md:right-[-40%]
          lg:top-[-50%] lg:right-[-35%]

          /* ✅ 4K ONLY FIX */
          2xl:top-[-75%] 2xl:right-[-25%] 2xl:w-[1400px] 2xl:opacity-50

          w-[500px] md:w-[800px] lg:w-[1050px]
          max-w-none opacity-40
          rotate-240 blur-[40px]
          pointer-events-none select-none
          transition-all duration-700 ease-in-out
        "
      />

      {/* Bottom Left Blob */}
      <img
        src={Blob2}
        alt="blob"
        className="
          absolute
          bottom-[-14%] left-[-80%]
          md:bottom-[-20%] md:left-[-40%]
          lg:bottom-[-42%] lg:left-[-25%]

          /* ✅ 4K ONLY FIX */
          2xl:bottom-[-55%] 2xl:left-[-30%] 2xl:w-[1200px] 2xl:opacity-50

          w-[500px] md:w-[700px] lg:w-[900px]
          max-w-none opacity-40
          rotate-360 blur-[30px]
          pointer-events-none select-none
          transition-all duration-700 ease-in-out
        "
      />

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-auto lg:left-auto lg:bottom-[10%] lg:right-[5%] lg:translate-x-0 lg:translate-y-0 z-10 flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto px-6 lg:px-0">
        <div className="flex flex-col gap-[4px] items-center lg:items-end">
          <div className="text-heroXl font-display font-bold leading-tight">
            <h1>John Luis Nathaniel</h1>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-bodyLg font-body text-muted">
              <p>UI/UX DESIGNER & FRONT-END DEVELOPER</p>
            </div>
            <div className="text-bodyLg font-body text-muted">
              <p>Crafting intuitive and scalable digital experiences</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <Button as="a" href="#contact" variant="primary" size="responsive">
            Hire Me Now
          </Button>

          <a
            href="/MERCADO-JOHN LUIS NATHANIEL-RESUME.pdf"
            download="Luis-Mercado-CV.pdf"
          >
            <Button variant="ghost" size="responsive">
              Download CV
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float z-20 cursor-pointer group hover:opacity-80 transition-opacity"
      >
        <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
          <FiArrowDown size={24} />
        </div>
        <span className="text-muted text-bodySm font-body">Scroll Down</span>
      </a>
    </SectionWrapper>
  );
}
