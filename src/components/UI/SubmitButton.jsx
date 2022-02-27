import React, {useState} from "react";

import classes from "./SubmitButton.module.css";

const SubmitButton = (props) => {

    const [isClicked , setIsClicked] = useState(false);

    const clickHandler = () =>{
        setIsClicked(true);
    }

  return (
    <button className={`${classes.button} ${isClicked && props.isSuccesful ? classes.active : ""}`} onClick={clickHandler}>
      <p className={classes.text}>{isClicked && props.isSuccesful ? "Thanks" : "Submit"}</p>
      <div className={classes["check-box"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
    </button>
  );
};

export default SubmitButton;
