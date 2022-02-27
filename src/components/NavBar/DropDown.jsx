import React from "react";
import {Link} from 'react-scroll'

import classes from "./DropDown.module.css";

const DropDown = () =>{
    return(
        <div>
            <ul className={classes["burger-nav"]}> 
                <li> <Link to="about" smooth={true} duration={400}>About</Link> </li>
                <li> <Link to="contact" smooth={true} duration={1000}>Contact</Link> </li>
            </ul>
        </div>
    );
}

export default DropDown;