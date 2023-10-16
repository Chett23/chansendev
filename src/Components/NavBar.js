import React from 'react'

import { NavBarCont } from "./containers";
import { NavBarButtonCont } from "./interactables";

const NavBar = () => {
  return (
	<NavBarCont>
		<NavBarButtonCont>Home</NavBarButtonCont>
		<NavBarButtonCont>Portfolio</NavBarButtonCont>
		<NavBarButtonCont>About</NavBarButtonCont>
		<NavBarButtonCont>Contact</NavBarButtonCont>
	</NavBarCont>
  )
}

export default NavBar