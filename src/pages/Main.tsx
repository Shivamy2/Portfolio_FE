import React, { memo } from "react";
import Header from "../shared/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import AllProjects from "../components/AllProjects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="text-on-secondary">
      <div className="bg-gray-100">
        <Header />
        <Hero />
        <About />
      </div>
      <Experience />
      <div className="bg-gray-100">
        <AllProjects />
      </div>
      <Certifications />
      <Footer />
    </div>
  );
}

export default memo(Main);
