import React from "react";
import { API } from "aws-amplify";
import { listExperiences } from "../graphql/queries";
import { useState, useEffect } from "react";
import {
	Col,
	ContentCont,
	ContentRow,
	ContentItemInfoCont,
	ContentMarginCont
} from "../Components/containers";
import { AccentText, Text, Medium } from "../Components/text";



const Experience = () => {
	const [projects, setProjects] = useState([]);
	const [projectsToShow, setProjectsToShow] = useState(3);

	const getProjects = async () => {
		const response = await API.graphql({
			query: listExperiences,
		});
		setProjects(response.data.listExperiences.items);
	};

	useEffect(() => {
		getProjects();
	}, [projectsToShow]);

	return (
		<ContentCont id="experience" name="experience">
			{projects ? (
				projects
					.sort((a, b) => a.priority - b.priority)
					.map((project, i) => i < projectsToShow && (
						<ContentRow key={project.id}>
							<ContentMarginCont>
								<AccentText>{project.timeFrame}</AccentText>
							</ContentMarginCont>
							<ContentItemInfoCont>
								<Medium>{project.title}</Medium>
								<Text>{project.company}</Text>
								<Text>{project.description}</Text>
							</ContentItemInfoCont>
						</ContentRow>
					))
			) : (
				<Text>Loading . . .</Text>
			)}			
		</ContentCont>
	);
};

export default Experience;
