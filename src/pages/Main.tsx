import React, { memo } from "react";
import Header from "../shared/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import AllProjects from "../components/AllProjects";
import Experience from "../components/Experience";

function Main() {
  return (
    <div className="text-on-secondary">
      <div className="bg-gray-100">
        <Header />
        <Hero />
        <About />
      </div>
      <AllProjects />
      <div className="bg-gray-100">
        <Experience />
      </div>
    </div>
  );
}

export default memo(Main);
