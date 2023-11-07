import React from "react";

import { NavBarCont } from "./containers";
import { NavBarButtonCont, NavButton } from "./interactables";

const NavBar = () => {
	return (
		<NavBarCont>
			<NavBarButtonCont>
				<NavButton href="#home">Home</NavButton>
			</NavBarButtonCont>
			<NavBarButtonCont>
				<NavButton href="#portfolio">Portfolio</NavButton>
			</NavBarButtonCont>
			<NavBarButtonCont>
				<NavButton href="#about">About</NavButton>
			</NavBarButtonCont>
			{/* <NavBarButtonCont href="#contact">Contact</NavBarButtonCont> */}
		</NavBarCont>
	);
};

export default NavBar;
