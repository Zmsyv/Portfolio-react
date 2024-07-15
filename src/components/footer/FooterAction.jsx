import React from "react";

const FooterAction = () => {
  return (
    <div>
      <div className="flex gap-[25px] pb-[40px]">
        <img src="./src/assets/contact/emailIcon.png" alt="" />
        <a href="" className="text-[30px] text-white">
          myemail@email.com
        </a>
      </div>
      <div className="flex gap-[25px] pb-[40px]">
        <img src="./src/assets/contact/linkedinIcon.png" alt="" />
        <a href="" className="text-[30px] text-white">
          linkedin.com/myname
        </a>
      </div>
      <div className="flex gap-[25px] pb-[40px]">
        <img src="./src/assets/contact/githubIcon.png" alt="" />
        <a href="" className="text-[30px] text-white">
          github.com/myname
        </a>
      </div>
    </div>
  );
};

export default FooterAction;
