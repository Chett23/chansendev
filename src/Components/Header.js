import React from "react";

import { Text, Title } from "./text";
import { HeaderCont } from "./containers";


const Header = () => {
	return (
		<HeaderCont>
			<Title>Chester Hansen</Title>
			<Text>
				A Skilled Fullstack Developer building fluid Web Applications.
			</Text>
		</HeaderCont>
	);
};

export default Header;
