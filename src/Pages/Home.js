import React from "react";

import { Title, Text } from "../Components/text";
import { Selfie } from "../Components/images";
import { MainCont } from "../Components/containers";

function Home() {
	return (
		<MainCont id="home" name="home" width="80%">
			<Selfie
				src={
					"https://chester-images.s3.us-east-2.amazonaws.com/chester.jpg"
				}
			/>
			<Title>Hello there!</Title>
			<Text>
				I'm Chester Hansen, A Frontend Web Developer building fluid Web Applications.
			</Text>
		</MainCont>
	);
}

export default Home;
