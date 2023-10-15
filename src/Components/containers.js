import styled from "styled-components";
import { main, mtnDew } from "./theme";

export const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MainCont = styled(Col)`
	background-color: ${main};
	min-height: 100vh;
    color: ${mtnDew}
`;
