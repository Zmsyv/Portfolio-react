import React from "react";
import AboutMeImg from "./AboutMeImg";
import AboutMeContent from "./AboutMeContent";

const AboutMeMain = () => {
  return (
    <div className="flex justify-between p-[70px] bg-slate-950 rounded-lg" >
      <AboutMeImg />
      <AboutMeContent />
    </div>
  );
};

export default AboutMeMain;
