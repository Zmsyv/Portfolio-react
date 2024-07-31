import React from "react";
import ProjectListItem from "./ProjectListItem";

let projectData = [
  {
    img: "./src/assets/projects/project.png",
    content: "Project A",
    title:
      "This is a project made to learn the latest languages by building an app.",
    btn1: "Node",
    btn2: "Express",
    btn3: "React",
    src1: "Demo",
    src2: "Source",
  },
  {
    img: "./src/assets/projects/project.png",
    content: "Project B",
    title:
      "This is a project made to learn the latest languages by building an app.",
    btn1: "Node",
    btn2: "Express",
    btn3: "React",
    src1: "Demo",
    src2: "Source",
  },
  {
    img: "./src/assets/projects/project.png",
    content: "Project C",
    title:
      "This is a project made to learn the latest languages by building an app.",
    btn1: "Node",
    btn2: "Express",
    btn3: "React",
    src1: "Demo",
    src2: "Source",
  },
];
const ProjectList = () => {
  return projectData.map((project, index) => (
    <ProjectListItem item={project} key={index} />
  ));
};

export default ProjectList;
