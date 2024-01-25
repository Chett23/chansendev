import React from "react";

import { AboutCont } from "../Components/containers";
import { Title, Text } from "../Components/text";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center p-12"
      id="about"
      name="about"
    >
      <p className="font-bold text-3xl text-primary-800 my-3">Hello there!</p>
      <p className={"text-md"}>
        As a Web Developer I have put my determination and quick learning to the
        test as I have learned new ways to problem solve. Paired with a keen
        attention to detail and quality I am prepared to seek out ambitious and
        innovative solutions to the task at hand. I am a Problem-solver with a
        keen attention to detail and quality. Proven ability to learn new skills
        quickly and apply them to solve complex security challenges. Ambitious
        and innovative thinker, always seeking out new ways to improve security
        posture.
      </p>
    </div>
  );
};

export default About;
