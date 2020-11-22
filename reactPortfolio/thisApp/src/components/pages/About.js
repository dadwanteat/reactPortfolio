import React from "react";
import ImgB from './denimbackground.png';

function About() {
  return (
    <div style={{ backgroundImage:`url(${ImgB})` }}>
      <br/>
      <h1>About Page</h1>
      <br/>
      <h4>
        Robert is brand new to the industry, but very excited to get started. 
        This Web-Portfolio showcases some of the things he's accomplished since he enrolled in Web-Development bootcamp. 
        This course was training to certify and become successful as a Full-Stack Web-Developer using an array of bleeding-edge technologies 
        to design and implement a number of different kinds of websites, applications and databases. 
      </h4>
      <br/>
      <br/>
      <a color="black" href="https://github.com/dadwanteat">|-----     Visit Robert's linkedin!</a><br/>
      <br/>
      <a color="black" href="https://www.linkedin.com/in/robert-dalton-21623013b/">|-----------     Visit Robert's github!</a>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default About;
