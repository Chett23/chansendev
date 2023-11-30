import styled from "styled-components";

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
	padding: 
	color: ${(props) => props.theme.primary};
`;

export const SideBarCont = styled(Col)`
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-around;
  align-items: flex-start;
  margin: 50px;
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

export const ContentCont = styled(Col)`
  width: 55vw;
  gap: 30px;
  padding: 50px;
  margin-left: calc(100vw - 75vw);
`;

export const AboutCont = styled(Col)`

`;

export const PortfolioRow = styled(Row)`
  justify-content: space-around;
`;
