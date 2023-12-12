import React from "react";
import { API } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import { useState, useEffect } from "react";
import {
	Col,
	ContentCont,
	ContentRow,
	ContentItemInfoCont,
	ContentMarginCont,
} from "../Components/containers";
import { Title, Text, Medium } from "../Components/text";
import { ProjectPreview } from "../Components/images";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	const [projectsToShow, setProjectsToShow] = useState(3);

	const showMore = () => {
		return projectsToShow < projects.length ? (
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
		);
	};

	const getProjects = async () => {
		const response = await API.graphql({
			query: listProjects,
		});
		setProjects(response.data.listProjects.items);
	};

	useEffect(() => {
		getProjects();
	}, [projectsToShow]);

	return (
		<ContentCont id="portfolio" name="portfolio">
			{projects ? (
				projects
					.sort((a, b) => a.priority - b.priority)
					.map(
						(project, i) =>
							i < projectsToShow && (
								<ContentRow
									key={project.id}
									onClick={() => window.open(project.url)}
								>
									<ContentMarginCont>
										<ProjectPreview
											src={project.ProjectImage.url}
											title={project.stack}
										/>
									</ContentMarginCont>
									<ContentItemInfoCont>
										<Medium>{project.name}</Medium>
										<Text>{project.description}</Text>
									</ContentItemInfoCont>
								</ContentRow>
							)
					)
			) : (
				<Text>Loading . . .</Text>
			)}
			{showMore()}
		</ContentCont>
	);
};

export default Portfolio;
