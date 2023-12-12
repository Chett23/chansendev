import React from "react";
import { API } from "aws-amplify";
import { listExperiences } from "../graphql/queries";
import { useState, useEffect } from "react";
import {
  Col,
  ContentCont,
  ContentRow,
  ContentItemInfoCont,
  ContentMarginCont,
  SkillCont,
  SkillsRow,
} from "../Components/containers";
import { AccentText, Text, Medium } from "../Components/text";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  const getProjects = async () => {
    const response = await API.graphql({
      query: listExperiences,
    });
    setExperiences(response.data.listExperiences.items);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <ContentCont id="experience" name="experience">
      {experiences ? (
        experiences
          .sort((a, b) => a.priority - b.priority)
          .map((experience) => (
            <ContentRow key={experience.id} onClick={()=>window.open(experience.url)}>
              <ContentMarginCont>
                <AccentText>{experience.timeFrame}</AccentText>
              </ContentMarginCont>
              <ContentItemInfoCont>
                <Medium>{experience.title}</Medium>
                <AccentText>{experience.company}</AccentText>
                {experience.description
                  .split("•")
                  .map(
                    (bullet) => bullet.length > 5 && <Text>• {bullet}</Text>
                  )}
                <SkillsRow>
                  {experience.tags.map((tag) => (
                    <SkillCont key={tag}>{tag}</SkillCont>
                  ))}
                </SkillsRow>
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
