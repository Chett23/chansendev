import styled from "styled-components";
import { blueSteel, macRed, main, mtnDew } from "./theme";

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
	margin: ${({ margin }) => margin || "auto"};
	width: ${({ width }) => width};
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width};
`;

export const MainCont = styled(Col)`
	background-color: ${main};
	min-height: 100vh;
	color: ${mtnDew};
`;

export const SideBarCont = styled(Col)`
	position: fixed;
	top: calc(50% - 100px);
    left: 0;
	height: 200px;
	width: 55px;
	z-index: 10;
	background-color: ${blueSteel};
`;

export const NavBarCont = styled(Row)`
	position: fixed;
	height: 55px;
	top: 0;
	width: 100%;
	z-index: 10;
	background-color: ${blueSteel};
`;
