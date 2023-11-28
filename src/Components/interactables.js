import styled from "styled-components";

export const ButtonCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.text};
	cursor: pointer;
`;
export const SideBarButtonCont = styled(ButtonCont)`
	width: 45px;
	max-width: 45px;
	height: 45px;
	max-height: 45px;
	justify-content: center;
`;

export const NavBarButtonCont = styled(ButtonCont)`
	width: 65px;
	max-width: 65px;
	height: 45px;
	max-height: 45px;
	justify-content: flex-start;
`;

export const NavButton = styled.a`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	font-weight: bold;
`;
