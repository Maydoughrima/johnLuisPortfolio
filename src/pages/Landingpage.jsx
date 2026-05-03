import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WorksSection from "../pages/WorksSection";
import SkillsSection from "./SkillsSection";
import ProcessSection from "./ProcessSection";
import AboutMeSection from "./AboutMeSection";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Landingpage() {
  return (
    <main className="overflow-x-hidden w-full relative">
      <Navbar />
      <Hero />
      <WorksSection />
      <SkillsSection />
      <ProcessSection />
      <AboutMeSection />
      <Contact />
      <Footer />
    </main>
  );
}
