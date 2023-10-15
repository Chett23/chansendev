import React from "react";

import { Title, Text } from "../Components/text";
import { Selfie } from "../Components/images";
import { MainCont } from "../Components/containers";

function Home({ id }) {
	return (
		<MainCont id={id}>
			<Selfie
				src={
					"https://chester-images.s3.us-east-2.amazonaws.com/chester.jpg"
				}
			/>
			<Title>Hello, Nice to meet you!</Title>
			<Text>
				As a Web Developer I have put my determination and quick
				learning to the test as I have learned new ways to problem
				solve. Paired with a keen attention to detail and quality I am
				prepared to seek out ambitious and innovative solutions to the
				task at hand.
			</Text>
		</MainCont>
	);
}

export default Home;
