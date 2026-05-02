import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}
