import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderMenu from "./HeaderMenu";

const HeaderMain = () => {
  return (
    <div className="flex justify-between p-[70px] bg-slate-900 pt-[61px] pl-[188px] pr-[188px]">
      <HeaderLogo />
      <HeaderNav />
      <HeaderMenu />
    </div>
  );
};

export default HeaderMain;
