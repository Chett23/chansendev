import React from "react";
import styled from "styled-components";

import { Col } from "../Components/containers";
import { Title, Text } from "../Components/text";

const ColMidR = styled(Col)`
	width: 100%;
	text-align: center;
	justify-content: center;
	height: 60%;
`;
// const ColMidL = styled(ColMidR)`
// 	border-right: solid #4c5454 1px;
// 	width: 30%;
// 	margin: 0 auto;
// `;
// const Logo = styled.img`
// 	width: 50%;
// 	height: 40%;
// 	margin: 0 auto;
// 	@media (min-width: 768px) {
// 		width: 55%;
// 		height: 35%;
// 	}
// 	@media (max-width: 600px) {
// 		width: 60%;
// 		height: 30%;
// 	}
// 	@media (max-width: 425px) {
// 		width: 65%;
// 		height: 25%;
// 	}
// `;
const Selfie = styled.img`
	align-self: center;
	width: 175px;
	height: 175px;
	border-radius: 50%;
	margin: 10px;
`;

function UnderConstruction() {
	return (
		<ColMidR>
			<Selfie
				src={
					"https://chester-images.s3.us-east-2.amazonaws.com/chester.jpg"
				}
			/>
			<Title>Welcome to CHansen Development</Title>
			<Text>
				This page is currently under cunstruction. We are sorry for the
				inconvience, please come back soon.
			</Text>
		</ColMidR>
	);
}

export default UnderConstruction;
