import React from "react";
import ExperienceContent from "./ExperienceContent";
import ExperienceList from "./ExperienceList";

const ExperienceMain = () => {
  return (
    <>
      <div className=" pt-[70px] pl-[70px] ">
        <strong className="text-[35px] text-white">EXPERIENCE</strong>
      </div>
      <div className="flex justify-between pl-[70px] pr-[70px]">
        <ExperienceList />
        <ExperienceContent />
      </div>
    </>
  );
};

export default ExperienceMain;
