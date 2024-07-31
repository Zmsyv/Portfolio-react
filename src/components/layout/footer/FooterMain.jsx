import React from "react";
import FooterContent from "./FooterContent";
import FooterAction from "./FooterAction";

const FooterMain = () => {
  return (
    <div className="flex justify-between pr-[188px] pl-[188px] bg-slate-500">
      <FooterContent />
      <FooterAction />
    </div>
  );
};

export default FooterMain;
