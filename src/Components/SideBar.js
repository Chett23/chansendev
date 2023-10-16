import React from "react";

import { SideBarCont } from "./containers";
import { SideBarButtonCont } from "./interactables";

const SideBar = () => {
	return (<SideBarCont>
    <SideBarButtonCont>Github</SideBarButtonCont>
    <SideBarButtonCont>Linkedin</SideBarButtonCont>
    <SideBarButtonCont>email</SideBarButtonCont>
  </SideBarCont>);
};

export default SideBar;
