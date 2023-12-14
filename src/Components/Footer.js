import React from "react";

import { FooterCont } from "./containers";
import { SideBarButtonCont } from "./interactables";
import { Github, Linkedin, Email } from "./svgs";

const Footer = () => {
	return (
		<FooterCont>
			<SideBarButtonCont>
				<Github />
			</SideBarButtonCont>
			<SideBarButtonCont>
				<Linkedin />
			</SideBarButtonCont>
		</FooterCont>
	);
};

export default Footer;
