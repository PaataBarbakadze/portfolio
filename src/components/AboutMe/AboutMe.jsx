import React from "react";

import classes from "./AboutMe.module.css";

import Me from "../../icons/me.png";

import SectionDivider from "../../helpers/SectionDivider/SectionDivider";

const AboutMe = () => {
  return (
    <React.Fragment>
      <section className={classes.section} id="about">
        <div className={classes.left}>
        <h1>Hello,</h1>
        <h2>I'm a developer form Tbilisi, Georgia.</h2>
        <p>I enjoy taking complex problems and trying my best to fix them,
          thats probably why i like JDM cars. I also love logic and structure of
          coding and always strive to write elegant and effective code, whether it be
          HTML, CSS , JavaScript or JAVA.
        </p>
        <p>When i am not coding or studing, you'll find me in gym lifting some heavy weights.</p>
        </div>
        <div className={classes.right}>
          <img src={Me} alt="me"/>
        </div>
      </section>
      <SectionDivider />
    </React.Fragment>
  );
  }
export default AboutMe;
