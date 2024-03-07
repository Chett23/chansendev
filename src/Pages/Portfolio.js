import React from "react";
import { API } from "aws-amplify";
import { getProjectImage, listProjects } from "../graphql/queries";
import { useState, useEffect } from "react";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	const [projectsToShow, setProjectsToShow] = useState(3);

	const getProjects = async () => {
		await API.graphql({
			query: listProjects,
		}).then((response) => {
			let projects = [];
			response.data.listProjects.items.forEach((project) => {
				API.graphql({
					query: getProjectImage,
					variables: { id: project.projectProjectImageId },
				}).then((response) => {
					const ProjectImage = response.data.getProjectImage;
					const newProject = { ...project, ProjectImage };
					if (
						!projects.includes(project) &&
						!projects.includes(newProject)
					) {
						projects.push(newProject);
					}
					setProjects(projects);
				});
			});
		});
	};

	useEffect(() => {
		getProjects();
	}, [projectsToShow]);

	return (
		<div
			className="flex flex-col justify-start items-end gap-6"
			id="portfolio"
			name="portfolio"
		>
			{projects ? (
				projects
					.sort((a, b) => a.priority - b.priority)
					.map(
						(project, i) =>
							i <= projectsToShow && (
								<div
									className="flex justify-start items-start flex-col-reverse xl:flex-row cursor-pointer min-w-full hover:bg-accent-200 hover:rounded-3xl hover:text-primary-800 hover:drop-shadow-md hover:ring-1"
									key={project.id}
									onClick={() => window.open(project.url)}
								>
									<div className="flex flex-col flex-1 min-w-24 xl:max-w-48 xl:min-w-48 my-9 mx-3">
										<img
											className="max-w-full max-h-96 xl:max-w-48 rounded-2xl"
											src={project.ProjectImage.url}
											title={project.stack}
										/>
									</div>
									<div className="flex flex-col justify-center items-start m-6">
										<span className="text-accent-800 text-xl">
											{project.name}
										</span>
										<span className="text-base">
											{project.description}
										</span>
										<div className="flex justify-start w-full items-center flex-wrap">
											{project.stack
												.split(",")
												.map((tag) => (
													<div
														className="bg-secondary-300 text-primary-700 p-1.5 m-1.5 rounded-xl cursor-pointer hover:text-accent-800"
														key={tag}
													>
														{tag}
													</div>
												))}
										</div>
									</div>
								</div>
							)
					)
			) : (
				<span className="text-base">Loading . . .</span>
			)}
			{projectsToShow < projects.length ? (
				<span
					className="text-base"
					onClick={() => setProjectsToShow(projects.length)}
					style={{ cursor: "pointer" }}
				>
					Show More
				</span>
			) : (
				<span
					className="text-base"
					onClick={() => setProjectsToShow(4)}
					style={{ cursor: "pointer" }}
				>
					Show Less
				</span>
			)}
			<br />
		</div>
	);
};

export default Portfolio;
