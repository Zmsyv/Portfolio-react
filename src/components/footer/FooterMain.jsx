import React from "react";
import FooterContent from "./FooterContent";
import FooterAction from "./FooterAction";

const FooterMain = () => {
  return (
    <div className="flex justify-between p-[70px] bg-slate-400">
      <FooterContent />
      <FooterAction />
    </div>
  );
};

export default FooterMain;
