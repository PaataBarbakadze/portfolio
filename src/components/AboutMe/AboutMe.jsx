import React from "react";

import classes from "./AboutMe.module.css";

import Me from "../../icons/meport.jpg";

import SectionDivider from "../../helpers/SectionDivider/SectionDivider";

const AboutMe = () => {
  return (
    <React.Fragment>
      <section className={classes.section} id="about">
        <div className={classes.left}>
          <h1>Hello, I'm <span>Pako</span>.</h1>
          <h2>Student and developer from Tbilisi, Georgia.</h2>
        </div>
        <div className={classes.right}>
          <img src={Me} alt="me" />
        </div>
      </section>
      <div className={classes.about}>
          <p>I enjoy taking complex problems and trying my best to fix them,
            thats probably why i like JDM cars. I also love logic and structure
            of coding and always strive to write elegant and effective code,
            whether it be JavaScript, C++ or JAVA.</p>
          <p>When i am not coding or studing, you'll find me at the gym, lifting some heavy weights.</p>
        </div>
      <SectionDivider />
    </React.Fragment>
  );
};
export default AboutMe;
