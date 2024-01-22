import React from "react";

import { AboutCont } from "../Components/containers";
import { Title, Text } from "../Components/text";

const About = () => {
	return (
		<AboutCont id="about" name="about">
			<Title>Hello there!</Title>
			<p className={'text-font-800 font-sans text-md'}>
				As a Web Developer I have put my determination and quick
				learning to the test as I have learned new ways to problem
				solve. Paired with a keen attention to detail and quality I am
				prepared to seek out ambitious and innovative solutions to the
				task at hand. I am a Problem-solver with a keen attention to
				detail and quality. Proven ability to learn new skills quickly
				and apply them to solve complex security challenges. Ambitious
				and innovative thinker, always seeking out new ways to improve
				security posture.
			</p>
		</AboutCont>
	);
};

export default About;
