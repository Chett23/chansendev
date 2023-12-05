import React from "react";
import { API } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import { useState, useEffect } from "react";
import {
	Col,
	PortfolioRow,
	PortfolioCont,
	PortfolioItemInfoCont,
} from "../Components/containers";
import { Title, Text, Medium } from "../Components/text";
import { ProjectPreview } from "../Components/images";

const LeftSidedProject = ({ project }) => {
	return (
		<PortfolioRow key={project.id}>
			<Col width="50%" margin="25px">
				<ProjectPreview
					src={project.ProjectImage.url}
					title={project.stack}
				/>
			</Col>
			<Col width="50%" margin="25px">
				<Medium>{project.name}</Medium>
				<Text>{project.description}</Text>
			</Col>
		</PortfolioRow>
	);
};

const RightSidedProject = ({ project }) => {
	return (
		<PortfolioRow key={project.id}>
			<Col width="50%" margin="25px">
				<Medium>{project.name}</Medium>
				<Text>{project.description}</Text>
			</Col>
			<Col width="50%" margin="25px">
				<ProjectPreview
					src={project.ProjectImage.url}
					title={project.stack}
				/>
			</Col>
		</PortfolioRow>
	);
};

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	const [projectsToShow, setProjectsToShow] = useState(3);

	const getProjects = async () => {
		const response = await API.graphql({
			query: listProjects,
		});
		console.log(response.data.listProjects.items);
		setProjects(response.data.listProjects.items);
	};

	useEffect(() => {
		getProjects();
	}, [projectsToShow]);

	return (
		<PortfolioCont id="portfolio" name="portfolio">
			{projects ? (
				projects
					.sort((a, b) => a.priority - b.priority)
					.map(
						(project, i) =>
							i < projectsToShow && (
								<PortfolioRow key={project.id}>
									<ProjectPreview
										src={project.ProjectImage.url}
										title={project.stack}
									/>
									<PortfolioItemInfoCont>
										<Medium>{project.name}</Medium>
										<Text>{project.description}</Text>
									</PortfolioItemInfoCont>
								</PortfolioRow>
							)
					)
			) : (
				<Text>Loading . . .</Text>
			)}
			{projectsToShow < projects.length ? (
				<Text
					onClick={() => setProjectsToShow(projects.length)}
					style={{ cursor: "pointer" }}
				>
					Show More
				</Text>
			) : (
				<Text
					onClick={() => setProjectsToShow(4)}
					style={{ cursor: "pointer" }}
				>
					Show Less
				</Text>
			)}
		</PortfolioCont>
	);
};

export default Portfolio;
