import React from "react";

import { Title, Text } from "../Components/text";
import { Selfie } from "../Components/images";
import { Col } from "../Components/containers";

function Home() {
	return (
		<Col id="home" name="home" width="80%">
			<Selfie
				src={
					"https://chester-images.s3.us-east-2.amazonaws.com/chester.jpg"
				}
			/>
			<Text>
				I'm Chester Hansen, A Frontend Web Developer building fluid Web Applications.
			</Text>
		</Col>
	);
}

export default Home;
