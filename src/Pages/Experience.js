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
} from "../Components/containers";
import { AccentText, Text, Medium } from "../Components/text";

const Experience = () => {
	const [experiences, setExperiences] = useState([]);

	const getExperiences = async () => {
		const response = await API.graphql({
			query: listExperiences,
		});
		setExperiences(response.data.listExperiences.items);
	};


	useEffect(() => {
		getExperiences();
	}, []);

	return (
		<ContentCont id="experience" name="experience">
			{experiences ? (
				experiences
					.sort((a, b) => a.priority - b.priority)
					.map((experience, i) => (
						<ContentRow
							key={experience.id}
							onClick={() => window.open(experience.url)}
						>
							<ContentMarginCont>
								<AccentText>{experience.timeFrame}</AccentText>
							</ContentMarginCont>
							<ContentItemInfoCont>
								<Medium>{experience.title}</Medium>
								<Text>{experience.company}</Text>
								<Text>{experience.description}</Text>
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
