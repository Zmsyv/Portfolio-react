import React from "react";

const HeroContent = () => {
  return (
    <div className="">
      <h2 className="text-[72px] text-white">Hi, I’m Ada</h2>
      <p className="text-[30px] text-white">
        I’m a full-stack developer with 5 years of experience using React and
        NodeJS. Reach out if you’d like to learn more!
      </p>
      <div className="pt-5">
        <button type="button" className="p-[5px] bg-slate-700 rounded-full">
          <p className="text-[30px] text-white">Contact Me</p>
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
