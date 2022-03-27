import React from "react";
import {Link} from 'react-scroll'

import classes from "./DropDown.module.css";

const DropDown = () =>{
    return(
        <div>
            <ul className={classes["burger-nav"]}> 
            <li> <Link to="about" smooth={true} duration={400}>About</Link> </li>
            <li> <Link to="timeline" smooth={true} duration={500}>Timeline</Link> </li>
            <li> <Link to="projects" smooth={true} duration={600}>Projects</Link> </li>
            <li> <Link to="technologies" smooth={true} duration={800}>Technologies</Link> </li>
            <li> <Link to="contact" smooth={true} duration={1000}>Contact</Link> </li>
            </ul>
        </div>
    );
}

export default DropDown;