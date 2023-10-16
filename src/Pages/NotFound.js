import React from "react";

import { Title, Text } from "../Components/text";
import { Selfie } from "../Components/images";
import { MainCont } from "../Components/containers";

function NotFound() {
	return (
		<MainCont id="404" width="80%">
			<Selfie
				src={
					"https://chester-images.s3.us-east-2.amazonaws.com/chester.jpg"
				}
			/>
			<Title>Hello there!</Title>
			<Text>
				These are not the droids youre looking for
			</Text>
		</MainCont>
	);
}

export default NotFound;
