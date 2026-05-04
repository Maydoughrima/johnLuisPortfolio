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
    <main className="overflow-x-hidden">







      <Navbar />
      <Hero id="home" />
      <WorksSection id="works" />
      <SkillsSection id="skills" />
      <ProcessSection id="process" />
      <AboutMeSection id="about" />
      <Contact id="contact" />
      <Footer />
    </main>

  );
}
