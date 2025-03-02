import React from "react";
import Links from "./Links"
//import user from "../data/user";

function About(props) {
  console.log(props.bio)
  console.log(props.links)
  return (
  
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.links.github} linkedin = {props.links.linkedin}/>
    </div>
  );
}

export default About;