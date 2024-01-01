import React, { memo, useContext, useEffect } from "react";
import Header from "../shared/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import AllProjects from "../components/AllProjects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import { IMasterContext } from "../context/interface";
import { ProfileContext } from "../App";

function Main() {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;
  useEffect(() => {
    document.title = `${currentProfile?.details[0]?.name} | Portfolio`;
  }, []);
  return (
    <div className="text-on-secondary">
      <Header />
      <div className="bg-gray-100">
        <Hero />
        <About />
      </div>
      {currentProfile?.details[0]?.experience?.title && <Experience />}
      {currentProfile?.details[0]?.projects?.title && (
        <div className="bg-gray-100">
          <AllProjects />
        </div>
      )}
      {currentProfile?.details[0]?.certification?.title && <Certifications />}
      <Footer />
    </div>
  );
}

export default memo(Main);
