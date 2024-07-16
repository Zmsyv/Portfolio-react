import React from "react";
import HeroMain from "./hero/HeroMain";
import AboutMeMain from "./aboutme/AboutMeMain";

const SectionsMain = () => {
  return (
    <div className="bg-slate-400">
      <HeroMain />
      <AboutMeMain />
    </div>
  );
};

export default SectionsMain;
