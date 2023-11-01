import styled from "styled-components";
import { main } from "./theme";

export const ButtonCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${main};
	margin: auto;
	cursor: pointer;
`;
export const SideBarButtonCont = styled(ButtonCont)`
	width: 45px;
	max-width: 45px;
	height: 45px;
	max-height: 45px;
`;

export const NavBarButtonCont = styled(ButtonCont)`
	width: 65px;
	max-width: 65px;
	height: 45px;
	max-height: 45px;
`;
