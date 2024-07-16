import React from "react";

const AboutMeContent = () => {
  return (
    <div className=" pt-[50px] bg-slate-950">
      <div className="flex  bg-gray-300 rounded-lg">
        <img src="./src/assets/about/cursorIcon.png" alt="" />
        <div>
          <strong className="text-[25px] text-white">Frontend Developer</strong>
          <p className="text-[25px] text-white">
            I’m a front-end developer with experience <br />
            in building responsive and optimized sites
          </p>
        </div>
      </div>
      <div className="flex py-[50px]">
        <img src="./src/assets/about/serverIcon.png" alt="" />
        <div>
          <strong className="text-[25px] text-white">Backend Developer</strong>
          <p className="text-[25px] text-white">
            I have experience developing fast and <br />
            optimised back-end systems and APIs
          </p>
        </div>
      </div>
      <div className="flex">
        <img src="./src/assets/about/uiIcon.png" alt="" />
        <div>
          <strong className="text-[25px] text-white">UI Designer</strong>
          <p className="text-[25px] text-white">
            I have designed multiple landing pages and <br />
            have created design systems as well
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
