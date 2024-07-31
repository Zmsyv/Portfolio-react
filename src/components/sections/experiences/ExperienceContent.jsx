import React from "react";

const ExperienceContent = () => {
  return (
    <div>
      <div className="flex gap-[30px] h-[160px] w-[525px] bg-white rounded-[10px] ">
        <div className="h-[50px] pt-[55px] pl-[16px]">
          <img src="./src/assets/history/google.png" alt="" />
        </div>
        <div className="">
          <h2 className="text-[30px]">Software Engineer, Google</h2>
          <p className="text-[20px]">Sept, 2022 - Present</p>
          <ul>
            <li className="text-[25px]">Worked on Google Maps</li>
            <li className="text-[25px]">Reduced load times by 50%</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-[30px] h-[160px] w-[525px] bg-white rounded-[10px] mt-[40px] mb-[40px]">
        <div className="h-[50px] pt-[55px] pl-[16px]">
          <img src="./src/assets/history/microsoft.png" alt="" />
        </div>
        <div className="">
          <h2 className="text-[30px]">Software Engineer, Google</h2>
          <p className="text-[20px]">Sept, 2022 - Present</p>
          <ul>
            <li className="text-[25px]">Worked on Google Maps</li>
            <li className="text-[25px]">Reduced load times by 50%</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-[30px] h-[160px] w-[525px] bg-white rounded-[10px]">
        <div className="h-[50px] pt-[55px] pl-[16px]">
          <img src="./src/assets/history/netflix.png" alt="" />
        </div>
        <div className="">
          <h2 className="text-[30px]">Software Engineer, Google</h2>
          <p className="text-[20px]">Sept, 2022 - Present</p>
          <ul>
            <li className="text-[25px]">Worked on Google Maps</li>
            <li className="text-[25px]">Reduced load times by 50%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;
