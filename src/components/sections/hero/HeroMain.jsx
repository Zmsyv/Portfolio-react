import React from "react";
import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";

const HeroMain = () => {
  return (
    <div className="flex justify-between p-[70px] bg-slate-400">
      <HeroContent />
      <HeroImg />
    </div>
  );
};

export default HeroMain;
