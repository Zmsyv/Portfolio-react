import React from "react";
import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";

const HeroMain = () => {
  return (
    <div className="flex justify-between px-[188px] py-[70px] bg-slate-900">
      <HeroContent />
      <HeroImg />
    </div>
  );
};

export default HeroMain;
