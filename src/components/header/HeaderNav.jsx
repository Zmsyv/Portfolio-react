import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="flex gap-[45px]">
      <button className="text-[25px] text-white">About</button>
      <button className="text-[25px] text-white">Experience</button>
      <button className="text-[25px] text-white">Projects</button>
      <button className="text-[25px] text-white">Contact</button>
    </div>
  );
};

export default HeaderNav;
