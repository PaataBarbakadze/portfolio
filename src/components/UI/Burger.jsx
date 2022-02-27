import React, { useState } from "react";

import "./Burger.css";

const Burger = (props) => {

  const [isActive, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!isActive);
  };
  
  return (
    <React.Fragment>
      <div onClick = {() => props.setIsUp(isActive)}>
        <div
          className={`container ${isActive ? "change" : ""}`}
          onClick={clickHandler} 
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Burger;
