import React from "react";

import { NavBarCont } from "./containers";
import { NavBarButtonCont } from "./interactables";

const NavBar = () => {
	return (
		<NavBarCont>
			<NavBarButtonCont>
				<a href="#home">Home</a>
			</NavBarButtonCont>
			<NavBarButtonCont>
				<a href="#portfolio">Portfolio</a>
			</NavBarButtonCont>
			<NavBarButtonCont>
				<a href="#about">About</a>
			</NavBarButtonCont>
			{/* <NavBarButtonCont href="#contact">Contact</NavBarButtonCont> */}
		</NavBarCont>
	);
};

export default NavBar;
