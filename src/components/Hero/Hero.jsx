import React from "react";

import classes from "./Hero.module.css";

import SectionDivider from "../../helpers/SectionDivider/SectionDivider";

const Hero = () => {
  return (
    <React.Fragment>
      <section className={classes.section}>
        <div className={classes.head}>
          {/*header of hero*/}
          <h1>
            Welcome To <br />
            My Personal Portfolio
          </h1>
          {/* FEFFFF */}
        </div>
        <div className={classes.para}>
          <p>
            The purpose of programming is to find a sequence of instructions
          </p>
        </div>
      </section>
      <SectionDivider></SectionDivider>
    </React.Fragment>
  );
};

export default Hero;
