import React from "react";

import classes from "./ProjectCards.module.css";

const ProjectCards = ({ project }) => {
  return (
    <React.Fragment>
      <section className={classes.section}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={project.image} alt="pirateit" className={classes.preview} />
        </a>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </section>
    </React.Fragment>
  );
};

export default ProjectCards;
