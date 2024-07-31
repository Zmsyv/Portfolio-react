import React from "react";

const ExperienceListItem = ({ item }) => {
  return (
    <div>
      <div className="bg-white rounded-[50%] h-[120px] w-[120px]">
        <img className=" flex justify-center items-center" src={item.src} alt="" />
      </div>
      <p className=" flex justify-center">{item.text}</p>
    </div>
  );
};

export default ExperienceListItem;
