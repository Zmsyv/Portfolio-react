import React from "react";

const ProjectListItem = (props) => {
  return (
    <div className=" w-[345px] h-[505px] bg-slate-600 mt-[20px] rounded-[10px] text-white">
      <div className="h-[200px] w-[298px] pt-[20px] pb-[26px] m-[20px]">
        <img src={props.item.img} alt="" />
      </div>
      <div className="ml-[14px]">
        <strong className="text-[25px] pb-[6px]">{props.item.content}</strong>
        <p className="text-[25px] h-[96px] w-[286px] pb-[14px]">
          {props.item.title}
        </p>
      </div>
      <div className="pb-[28px] pt-[20px] flex justify-between ml-[7px] mr-[7px]">
        <button className=" h-[36px] w-[97px] bg-gray-500 rounded-[50px]">
          {props.item.btn1}
        </button>
        <button className="h-[36px] w-[97px] bg-gray-500 rounded-[50px]">
          {props.item.btn2}
        </button>
        <button className="h-[36px] w-[97px] bg-gray-500 rounded-[50px]">
          {props.item.btn3}
        </button>
      </div>
      <div className="flex justify-between ml-[39px] mr-[33px]">
        <button className=" h-[40px] w-[126px] bg-gray-400 rounded-[50px]">
          {props.item.src1}
        </button>
        <button className=" h-[40px] w-[126px] bg-gray-400 rounded-[50px]">
          {props.item.src2}
        </button>
      </div>
    </div>
  );
};

export default ProjectListItem;
