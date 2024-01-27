import React from "react";
import { API } from "aws-amplify";
import { listExperiences } from "../graphql/queries";
import { useState, useEffect } from "react";
import {
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

  const GetExperiences = async () => {
    await API.graphql({
      query: listExperiences,
    }).then((response) => {
      setExperiences(
        response.data.listExperiences.items.filter(
          (item) =>
            item.id != "1c1e49c2-2861-4013-8b2e-30d337000e2c" &&
            item.id != "39ef87f7-8e40-48a3-9229-0c7d179a453b"
        )
      );
    });
  };

  useEffect(() => {
    GetExperiences();
  }, []);

  return (
    <div
      className="flex flex-col justify-start items-start gap-6"
      id="experience"
      name="experience"
    >
      {experiences ? (
        experiences
          .sort((a, b) => a.priority - b.priority)
          .map((experience) => (
            <div
              className="flex justify-around items-start cursor-pointer hover:bg-accent-200 hover:rounded-3xl hover:text-primary-800"
              key={experience.id}
              onClick={() => window.open(experience.url)}
            >
              <div className="flex flex-col flex-1 min-w-24 my-9 mx-3">
                <span className="text-xs font-bold text-secondary-600">
                  {experience.timeFrame}
                </span>
              </div>
              <div className="flex flex-col justify-center items-start m-6">
                <span className="text-accent-800 text-xl">
                  {experience.title}
                </span>
                <span className="text-xs font-bold text-secondary-600">
                  {experience.company}
                </span>
                {experience.description.split("•").map(
                  (bullet, i) =>
                    bullet.length > 5 && (
                      <span className="text-base" key={`bullet-${i}`}>
                        • {bullet}
                      </span>
                    )
                )}
                <div className="flex justify-start w-full items-center flex-wrap">
                  {experience.tags.map((tag) => (
                    <div
                      className="bg-secondary-300 text-primary-700 p-1.5 m-1.5 rounded-md cursor-pointer hover:text-accent-800"
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
      ) : (
        <span className="text-base font-bold">Loading . . .</span>
      )}
    </div>
  );
};

export default Experience;
