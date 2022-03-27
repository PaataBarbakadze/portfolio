import React from "react";
import SectionDivider from "../../helpers/SectionDivider/SectionDivider";

import reactIcon from "../../icons/Tech/react.png";
import nodeIcon from "../../icons/Tech/node.png"
import mongoIcon from '../../icons/Tech/mongodb.png'
import nextJsIcon from '../../icons/Tech/nextjs.png'
import reduxIcon from '../../icons/Tech/redux.png'

import classes from "./Tech.module.css";

const Tech = () => {
  return (
    <React.Fragment>
        <h1 className={classes.header} id="technologies">Technologies</h1>
      <section className={classes.section}>
        <ul>
          <li>
            <div className={classes.elements}>
              <img src={reactIcon} alt="react" />
              <h2>React.js</h2>
            </div>
          </li>
          <li>
              <div className={classes.elements}>
                  <img src={nodeIcon} alt="node" />
                  <h2>Node.js</h2>
              </div>
          </li>
          <li>
              <div className={classes.elements}>
                  <img src={mongoIcon} alt="mongo" />
                  <h2>MongoDB</h2>
              </div>
          </li>
          <li>
              <div className={classes.elements}>
                  <img src={nextJsIcon} alt="nextjs" />
                  <h2>Next.js</h2>
              </div>
          </li>
          <li>
              <div className={classes.elements}>
                  <img src={reduxIcon} alt="redux.js" />
                  <h2>Redux</h2>
              </div>
          </li>
        </ul>
      </section>
      <SectionDivider></SectionDivider>
    </React.Fragment>
  );
};

export default Tech;
