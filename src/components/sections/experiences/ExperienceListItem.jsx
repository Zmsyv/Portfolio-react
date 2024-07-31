import React from "react";

const ExperienceListItem = ({ item }) => {
  return (
    <div>
      <div className="bg-white rounded-[50%] h-[120px] w-[120px]">
        <img
          className=" h-[75px] w-[75px] relative left-[23px] top-[22px]"
          src={item.src}
          alt=""
        />
      </div>
      <p className=" flex justify-center text-white">{item.text}</p>
    </div>
  );
};

export default ExperienceListItem;
