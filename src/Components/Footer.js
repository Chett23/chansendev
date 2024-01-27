import React from "react";

import { Github, Linkedin } from "./svgs";

const Footer = ({ classes }) => {
  return (
    <div
      className={`flex flex-grow-[2] p-6 gap-6 items-end justify-between lg:justify-start ${classes}`}
    >
      <div className="group flex justify-start items-center cursor-pointer w-11 max-w-11 h-11 max-11">
        <Github
          classes={"w-8 h-8 m-1 fill-font-500 group-hover:fill-accent-500"}
        />
      </div>
      <div className="group flex justify-start items-center cursor-pointer w-11 max-w-11 h-11 max-11">
        <Linkedin
          classes={"w-8 h-8 m-1 fill-font-500 group-hover:fill-accent-500"}
        />
      </div>
    </div>
  );
};

export default Footer;
