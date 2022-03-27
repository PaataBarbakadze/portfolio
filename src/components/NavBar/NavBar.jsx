import React, { useState } from "react";
import {Link} from 'react-scroll'

import classes from "./NavBar.module.css"

import Burger from "../UI/Burger";
import DropDown from "./DropDown";

const NavBar = () =>{
    const [isUp, setIsUp] = useState(true);

    return (
        <React.Fragment>
            <section className={classes.nav}> 
                <div className={classes.logo}> 
                    <h1>Portfolio</h1>
                </div>
                <div>
                    <ul className={classes["nav_links"]}> 
                        <li> <Link to="about" smooth={true} duration={400}>About</Link> </li>
                        <li> <Link to="timeline" smooth={true} duration={500}>Timeline</Link> </li>
                        <li> <Link to="projects" smooth={true} duration={600}>Projects</Link> </li>
                        <li> <Link to="technologies" smooth={true} duration={800}>Technologies</Link> </li>
                        <li> <Link to="contact" smooth={true} duration={1000}>Contact</Link> </li>
                    </ul>
                </div>
                <div className={classes.burger}>
                    <Burger setIsUp={setIsUp}/>
                </div>
            </section>
            {!isUp && <DropDown></DropDown>}

        </React.Fragment>
    );
}

export default NavBar;