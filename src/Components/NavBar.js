import React, { useRef } from "react";
import { useEffect, useState } from "react";

const NavBar = ({ handleNavClick,classes }) => {
	return (
		<div className={`flex flex-col justify-center items-start w-full p-6 ${classes}`}>
			<div className="group flex cursor-pointer items-center w-16 max-w-16 h-11 max-h-11 justify-start"
				id="about-nav"
				onClick={() => handleNavClick("about")}
			>
				<hr className="active min-w-8 mr-2 border-2 border-solid border-font-500 group-hover:border-accent-500 group-hover:min-w-10 group-active:border-accent-500 group-active:min-w"/>
				<a className="no-underline text-sm group-hover:text-accent-500 group-active:text-accent-500">About</a>
			</div>
			<div className="flex group cursor-pointer items-center w-16 max-w-16 h-11 max-h-11 justify-start"
				id="experience-nav"
				onClick={() => handleNavClick("experience")}
			>
				<hr className="min-w-8 mr-2 border-2 border-solid border-font-500 group-hover:border-accent-500 group-hover:min-w-10 group-active:border-accent-500 group-active:min-w"/>
				<a className="no-underline text-sm group-hover:text-accent-500 group-active:text-accent-500">Experience</a>
			</div>
			<div className="flex group cursor-pointer items-center w-16 max-w-16 h-11 max-h-11 justify-start"
				id="portfolio-nav"
				onClick={() => handleNavClick("portfolio")}
			>
				<hr className="min-w-8 mr-2 border-2 border-solid border-font-500 group-hover:border-accent-500 group-hover:min-w-10 group-active:border-accent-500 group-active:min-w"/>
				<a className="no-underline text-sm group-hover:text-accent-500 group-active:text-accent-500">Portfolio</a>
			</div>
		</div>
	);
};

export default NavBar;
