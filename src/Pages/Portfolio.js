import React from "react";
import { API } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import { useState, useEffect } from "react";
import { Col, Row } from "../Components/containers";
import { Title, Text } from "../Components/text";
import { ProjectPreview } from "../Components/images";

const LeftSidedProject = ({ project }) => {
	return (
		<Row width="85%" key={project.id}>
			<Col width="50%" margin="25px">
				<ProjectPreview
					src={project.ProjectImage.url}
					title={project.stack}
				/>
			</Col>
			<Col width="50%" margin="25px">
				<Title>{project.name}</Title>
				<Text>{project.description}</Text>
			</Col>
		</Row>
	);
};

const RightSidedProject = ({ project }) => {
	return (
		<Row width="85%" key={project.id}>
			<Col width="50%" margin="25px">
				<Title>{project.name}</Title>
				<Text>{project.description}</Text>
			</Col>
			<Col width="50%" margin="25px">
				<ProjectPreview
					src={project.ProjectImage.url}
					title={project.stack}
				/>
			</Col>
		</Row>
	);
};

const Portfolio = () => {
	const [projects, setProjects] = useState([]);

	const getProjects = async () => {
		const response = await API.graphql({
			query: listProjects,
		});
		setProjects(response.data.listProjects.items);
	};

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<Col id="portfolio" name="portfolio">
			{projects ?
				projects
					.sort((a, b) => a.priority - b.priority)
					.map((project, i) =>
						i % 2 == 0 ? (
							<LeftSidedProject
								project={project}
								key={project.id}
							/>
						) : (
							<RightSidedProject
								project={project}
								key={project.id}
							/>
						)
					): <Text>Loading . . .</Text>}
		</Col>
	);
};

export default Portfolio;
