import React from "react";
import AboutMeImg from "./AboutMeImg";
import AboutMeContent from "./AboutMeContent";

const AboutMeMain = () => {
  return (
    <div className="flex justify-between p-[70px]  bg-slate-950 mx-[50px] rounded-lg  items-center">
      <AboutMeImg />
      <AboutMeContent />
    </div>
  );
};

export default AboutMeMain;
