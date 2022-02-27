import React, { useState, useRef } from "react";

import emailjs from '@emailjs/browser';

import SectionDivider from "../../helpers/SectionDivider/SectionDivider";
import SocialIcons from "../UI/SocialIcons";
import SubmitButton from "../UI/SubmitButton";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const form = useRef();

  const emailChangeHandler = (event) =>{
    setEmail(event.target.value);

    if(event.target.value === ''){
      setEmailError("Please Enter Your Email");  
    }else if(email.indexOf("@") === -1){
      setEmailError("Your Email Should Contain '@' Symbol");     
    }else{
      setEmailError("");
    }

  }
  
  const submitHandler = (event) => {
    event.preventDefault();

    // emailjs.sendForm('service_gmail', 'template_h7upx99', form.current, 'user_bREYrIyXx3s5Ofan0B9xM')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
    
  };

  return (
    <React.Fragment>
      <form  ref={form} onSubmit={submitHandler} id="contact">
        <section className={classes.section}>
          <div className={classes.header}>
            <h1>Just Say Hello</h1>
            <p>Let me know your thoughts</p>
          </div>
          <div className={classes.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={classes.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`${classes.input} ${emailError.length !== 0 ? classes.warning : ""}`}
              onChange={emailChangeHandler}
            />
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              className={classes["input-message"]}
            />
            <SubmitButton isSuccesful={true} className={classes.button}/>
              <p>{emailError}</p>
          </div>
          <SocialIcons/>
        </section>
      </form>
      <SectionDivider/>
    </React.Fragment>
  );
};

export default ContactForm;
