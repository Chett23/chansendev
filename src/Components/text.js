import styled from "styled-components";
import { mtnDew } from "./theme";

export const Text = styled.span`
	font-family: arial;
	font-size: 14pt;
	color: ${mtnDew};
`;

export const Title = styled(Text)`
	font-size: 28pt;
	font-weight: bold;
	color: ${mtnDew};
	margin: 10px 0;
`;
