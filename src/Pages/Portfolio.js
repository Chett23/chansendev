import React from "react";
import { Col, Row } from "../Components/containers";
import { Title, Text } from "../Components/text";
import { projects } from "../Components/data";

function Portfolio() {
	return (
		<Col id="about" name="about" margin="50px 0">
			<Title>Porfolio</Title>
			{projects.map((project, i) => (
				<Row width="85%">
					<Col width="50%" margin="25px">
						<Title>IMAGE HERE</Title>
					</Col>
					<Col width="50%" margin="25px">
						<Title>{project.name}</Title>
						<Text>{project.description}</Text>
					</Col>
				</Row>
			))}
		</Col>
	);
}

export default Portfolio;