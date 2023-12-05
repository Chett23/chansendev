import React from "react";
import { API } from "aws-amplify";
import { listExperiences } from "../graphql/queries";
import { useState, useEffect } from "react";
import {
	Col,
	PortfolioRow,
	PortfolioCont,
	PortfolioItemInfoCont,
} from "../Components/containers";
import { Title, Text, Medium } from "../Components/text";
import { ProjectPreview } from "../Components/images";


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
		<PortfolioCont id="experience" name="experience">
			{projects ? (
				projects
					.sort((a, b) => a.priority - b.priority)
					.map((project, i) => i < projectsToShow && (
						<PortfolioRow key={project.id}>
							<PortfolioItemInfoCont>
								<Medium>{project.title}</Medium>
								<Text>{project.copmany}</Text>
							</PortfolioItemInfoCont>
						</PortfolioRow>
					))
			) : (
				<Text>Loading . . .</Text>
			)}
			{projectsToShow < projects.length ? (
				<Text onClick={() => setProjectsToShow(projects.length)} style={{cursor:'pointer'}}>Show More</Text>
			) : <Text onClick={() => setProjectsToShow(4)} style={{cursor:'pointer'}}>Show Less</Text>}
		</PortfolioCont>
	);
};

export default Experience;
