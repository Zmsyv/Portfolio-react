import React from "react";
import ExperienceListItem from "./ExperienceListItem";

let experienceData = [
  { src: "./src/assets/skills/html.png", text: "HTML" },
  {
    src: "./src/assets/skills/css.png",
    text: "CSS",
  },
  {
    src: "./src/assets/skills/react.png",
    text: "React",
  },
  {
    src: "./src/assets/skills/node.png",
    text: "Node",
  },
  {
    src: "./src/assets/skills/graphql.png",
    text: "GraphQL",
  },
  {
    src: "./src/assets/skills/mongodb.png",
    text: "MongoDB",
  },
  {
    src: "./src/assets/skills/figma.png",
    text: "Figma",
  },
];
const ExperienceList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[37px]">
      {experienceData.map((experience, index) => (
        <ExperienceListItem item={experience} key={index} />
      ))}
      ;
    </div>
  );
};

export default ExperienceList;
