import styled from "styled-components";

import { Medium } from "./text";
import { NavButton } from "./interactables";

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width || "100%"};
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width || "100%"};
`;

export const MainCont = styled(Row)`
	background-color: ${(props) => props.theme.background};
	min-height: 100vh;
	justify-content: space-around;
`;

export const AppCont = styled(Row)`
	justify-content: space-around;
	align-items: flex-start;
	max-width: 70%;
`;

export const SideBarCont = styled(Col)`
	position: sticky;
	top: 50px;
	left: 0;
	justify-content: space-around;
	align-items: flex-start;
	max-width: 25%;
	height: calc(90vh - 50px);
`;

export const NavBarCont = styled(Col)`
	padding: 25px;
	align-items: flex-start;

	a:hover {
		color: ${(props) => props.theme.accent};
	}
`;

export const FooterCont = styled(Row)`
	flex-grow: 2;
	padding: 25px;
	gap: 25px;
	align-items: flex-end;
	justify-content: flex-start;
`;

export const HeaderCont = styled(Col)`
	padding: 25px;
	align-items: flex-start;
`;

export const SkillsRow = styled(Row)`
	flex-wrap: wrap;
`;

export const AboutCont = styled(Col)`
	padding: 50px;
`;

export const SkillCont = styled.div`
	background-color: ${(props) => props.theme.accent};
	color: ${(props) => props.theme.text};
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.accent};
	}
`;

export const ThemeSelectorCont = styled.div`
	padding: 5px;
	margin: 5px;
	border-radius: 10px;
	cursor: pointer;
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 10;
	&:hover {
		color: ${(props) => props.theme.accent};
	}
`;

export const ContentSectionCont = styled(Col)`
	width: 55vw;
	gap: 30px;
	padding: 100px 50px;
	margin-left: 75px;
`;

export const ContentCont = styled(Col)`
	gap: 25px;
	align-items: flex-end;
	justify-content: flex-start;
`;

export const ContentItemInfoCont = styled(Col)`
	flex: 4;
	max-width: 80%;
	margin: 25px;
	align-items: flex-start;
`;

export const ContentMarginCont = styled(Col)`
	flex: 1;
	min-width: 100px;
	margin: 35px 10px;
`;

export const ContentRow = styled(Row)`
	justify-content: space-around;
	align-items: flex-start;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.accent}40;
		border-radius: 25px;
		${Medium} {
			color: ${(props) => props.theme.primary};
		}
	}
`;
