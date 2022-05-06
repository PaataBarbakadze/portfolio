import React from "react";

import IconIg from "../../icons/IconIg.svg";
import IconFb from "../../icons/IconFb.svg";
import IconGit from "../../icons/IconGit.svg";
import IconLinkedin from "../../icons/iconLinkedin.svg";

import classes from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <section className={classes.section}>
      <ul className={classes.icons}>
        <li>
          <a
            href="https://www.instagram.com/pakobarbakadze/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconIg} alt="instagram icon"></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/pakobarbaqadze/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconFb} alt="facebook icon"></img>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ShadowKayn"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconGit} alt="github icon"></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/paata-barbakadze-35a6b5234/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconLinkedin} alt="Linkedin icon"></img>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialIcons;
