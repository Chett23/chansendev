import React from "react";
import { API } from "aws-amplify";
import { listProjects, listThings } from "../graphql/queries";
import { useState, useEffect } from "react";
import { Col, Row } from "../Components/containers";
import { Title, Text } from "../Components/text";
import { fakeProjects } from "../Components/data";
import { ProjectPreview } from "../Components/images";

const LeftSidedProject = ({ project }) => {
	return (
		<Row width="85%" key={project.id}>
			<Col width="50%" margin="25px">
				{project.ProjectImages.items.length > 0 &&
					project.ProjectImages.items.map((image, i) => (
						<ProjectPreview
							src={image.url}
							key={i}
							title={project.stack}
						/>
					))}
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
				{project.ProjectImages.items.length > 0 &&
					project.ProjectImages.items.map((image, i) => (
						<ProjectPreview
							src={image.url}
							key={i}
							title={project.stack}
						/>
					))}
			</Col>
		</Row>
	);
};

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	const [errors, setErrors] = useState([]);

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
		<Col id="portfolio" name="portfolio" margin="50px 0">
			{errors && <Text>{errors}</Text>}
			{projects &&
				projects.map((project, i) =>
					i % 2 == 0 ? (
						<LeftSidedProject project={project} key={project.id} />
					) : (
						<RightSidedProject project={project} key={project.id} />
					)
				)}
		</Col>
	);
};

export default Portfolio;
