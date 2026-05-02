import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WorksSection from "../pages/WorksSection";

export default function Landingpage() {
  return (
    <main className="overflow-x-hidden w-full relative">
      <Navbar />
      <Hero />
      <WorksSection />
    </main>
  );
}
