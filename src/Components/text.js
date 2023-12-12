import styled from "styled-components";

import { NavBarButtonCont } from "./interactables";

export const Text = styled.span`
	font-family: arial;
	font-size: 14pt;
	color: ${(props) => props.theme.text};
`;

export const Title = styled(Text)`
	font-size: 28pt;
	font-weight: bold;
	color: ${(props) => props.theme.primary};
	margin: 10px 0;
`;

export const Medium = styled(Text)`
	font-family: arial;
	font-size: 18pt;
	color: ${(props) => props.theme.accent};
`;

export const AccentText = styled(Text)`
	color: ${(props) => props.theme.secondary};
`;

export const AccentLine = styled.hr`
	min-width: 25px;
	margin-right: 10px;
	border: 2px solid ${(props) => props.theme.text};
	border-radius: 5px;

	${NavBarButtonCont}:hover & {
		border: 2px solid ${(props) => props.theme.accent};
		min-width: 40px;
	}
	
	${NavBarButtonCont}.active & {
		border: 2px solid ${(props) => props.theme.accent};
		min-width: 60px;
	}
`;
