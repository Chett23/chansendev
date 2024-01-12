import React from "react";
import { API } from "aws-amplify";
import { getProjectImage, listProjects } from "../graphql/queries";
import { useState, useEffect } from "react";
import {
  ContentCont,
  ContentRow,
  ContentItemInfoCont,
  ContentMarginCont,
  SkillCont,
  SkillsRow,
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
      <Text onClick={() => setProjectsToShow(4)} style={{ cursor: "pointer" }}>
        Show Less
      </Text>
    );
  };

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
          if (!projects.includes(project) && !projects.includes(newProject)) {
            projects.push(newProject);
          }
        });
      });
      setProjects(projects);
    });
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
                    <SkillsRow>
                      {project.stack.split(',').map((tag) => (
                        <SkillCont key={tag}>{tag}</SkillCont>
                      ))}
                    </SkillsRow>
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
