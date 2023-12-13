import React, { useRef } from "react";
import { useEffect, useState } from "react";

import { NavBarCont } from "./containers";
import { NavBarButtonCont, NavButton } from "./interactables";
import { AccentLine } from "./text";

const NavBar = ({ handleNavClick }) => {
	return (
		<NavBarCont>
			<NavBarButtonCont
				id="about-nav"
				className="active"
				onClick={() => handleNavClick("about")}
			>
				<AccentLine />
				<NavButton>About</NavButton>
			</NavBarButtonCont>
			<NavBarButtonCont
				id="experience-nav"
				onClick={() => handleNavClick("experience")}
			>
				<AccentLine />
				<NavButton>Experience</NavButton>
			</NavBarButtonCont>
			<NavBarButtonCont
				id="portfolio-nav"
				onClick={() => handleNavClick("portfolio")}
			>
				<AccentLine />
				<NavButton>Portfolio</NavButton>
			</NavBarButtonCont>
		</NavBarCont>
	);
};

export default NavBar;
