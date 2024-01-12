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
		<ContentCont id="experience" name="experience">
			{experiences ? (
				experiences
					.sort((a, b) => a.priority - b.priority)
					.map((experience) => (
						<ContentRow
							key={experience.id}
							onClick={() => window.open(experience.url)}
						>
							<ContentMarginCont>
								<AccentText>{experience.timeFrame}</AccentText>
							</ContentMarginCont>
							<ContentItemInfoCont>
								<Medium>{experience.title}</Medium>
								<AccentText>{experience.company}</AccentText>
								{experience.description
									.split("•")
									.map(
										(bullet, i) =>
											bullet.length > 5 && (
												<Text key={`bullet-${i}`}>
													• {bullet}
												</Text>
											)
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
