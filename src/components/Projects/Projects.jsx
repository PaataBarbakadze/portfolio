import React from "react";

import ProjectCards from "./ProjectCards";
import SectionDivider from "../../helpers/SectionDivider/SectionDivider";

import pirateit from "../../icons/pirateit.png";

import classes from "./Project.module.css";

const projects = [
  {
    id: 1,
    title: "Pirateit",
    description:
      "Gaming site demo, made using React, Node.js, Express and MongoDB. The App is called pirateit, administrator can post new games and users can browse and download them.",
    image: pirateit,
  },
  {
    id: 2,
    title: "Pirateit",
    description:
      "Gaming site demo, made using React, Node.js, Express and MongoDB. The App is called pirateit, administrator can post new games and users can browse and download them.",
    image: pirateit,
  },
  {
    id: 3,
    title: "Pirateit",
    description:
      "Gaming site demo, made using React, Node.js, Express and MongoDB. The App is called pirateit, administrator can post new games and users can browse and download them.",
    image: pirateit,
  },
];

const Projects = () => {
  return (
    <React.Fragment>
      <h1 className={classes.header} id="projects">Projects</h1>
      <section className={classes.section}>
        {projects &&
          projects.map((project) => (
            <ProjectCards key={project.id} project={project}></ProjectCards>
          ))}
      </section>
      <SectionDivider></SectionDivider>
    </React.Fragment>
  );
};

export default Projects;
