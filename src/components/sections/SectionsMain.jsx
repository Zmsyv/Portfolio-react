import React from "react";
import HeroMain from "./hero/HeroMain";
import AboutMeMain from "./aboutme/AboutMeMain";
import ExperienceMain from "./experiences/ExperienceMain";
import ProjectMain from "./projects/ProjectMain";

const SectionsMain = () => {
  return (
    <div className="bg-slate-400">
      <HeroMain />
      <AboutMeMain />
      <ExperienceMain />
      <ProjectMain />
    </div>
  );
};

export default SectionsMain;
