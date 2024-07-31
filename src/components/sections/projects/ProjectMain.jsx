import React from "react";
import ProjectList from "./ProjectList";

const ProjectMain = () => {
  return (
    <div className=" pl-[188px] pr-[187px] pb-[102px] ">
      <div className="pb-[37px]">
        <strong className="  text-[35px]  text-white">Projects</strong>
      </div>
      <div className="flex justify-between">
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectMain;
