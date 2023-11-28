import styled from "styled-components";


export const Text = styled.span`
	font-family: arial;
	font-size: 14pt;
	color: ${(props) => props.theme.text};
`;

export const Title = styled(Text)`
	font-size: 28pt;
	font-weight: bold;
	color: ${(props) => props.theme.text};
	margin: 10px 0;
`;

export const Medium = styled(Text)`
	font-family: arial;
	font-size: 18pt;
	color: ${(props) => props.theme.text};
`;
