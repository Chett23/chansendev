import React from "react";

import { SideBarCont } from "./containers";
import { SideBarButtonCont } from "./interactables";
import { Github, Linkedin, Email } from "./svgs";

const SideBar = () => {
	return (
		<SideBarCont>
			<SideBarButtonCont>
				<Github />
			</SideBarButtonCont>
			<SideBarButtonCont>
				<Linkedin />
			</SideBarButtonCont>
			<SideBarButtonCont>
				<Email />
			</SideBarButtonCont>
		</SideBarCont>
	);
};

export default SideBar;
