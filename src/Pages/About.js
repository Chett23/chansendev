import React from "react";

import { Col, Row, SkillCont, SkillsRow } from "../Components/containers";
import { Title, Text } from "../Components/text";
import { skills } from "../Components/data";

const About = () => {
	return (
		<Col id="about" name="about" padding="50px">
			<Title>Hello there!</Title>
			<Text>
				As a Web Developer I have put my determination and quick
				learning to the test as I have learned new ways to problem
				solve. Paired with a keen attention to detail and quality I am
				prepared to seek out ambitious and innovative solutions to the
				task at hand. I am a Problem-solver with a keen attention to
				detail and quality. Proven ability to learn new skills quickly
				and apply them to solve complex security challenges. Ambitious
				and innovative thinker, always seeking out new ways to improve
				security posture.
			</Text>
			{/* <Row width="85%">
				<Col width="50%" margin="50px">
					<Title>About Me</Title>
					<Text>
						As a Web Developer I have put my determination and quick
						learning to the test as I have learned new ways to
						problem solve. Paired with a keen attention to detail
						and quality I am prepared to seek out ambitious and
						innovative solutions to the task at hand. I am a
						Problem-solver with a keen attention to detail and
						quality. Proven ability to learn new skills quickly and
						apply them to solve complex security challenges.
						Ambitious and innovative thinker, always seeking out new
						ways to improve security posture.
					</Text>
				</Col>
				<Col width="50%" margin="50px">
					<Title>Skills</Title>
					<SkillsRow>
						{skills.map((skill, i) => (
							<SkillCont key={i}>{skill}</SkillCont>
						))}
					</SkillsRow>
				</Col>
			</Row> */}
		</Col>
	);
};

export default About;
