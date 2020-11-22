import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import ImgB from './denimbackground.png';

function Contact(props) {
  return (
    <div style={{ backgroundImage:`url(${ImgB})` }}>
      <br/>
      <h1>Contact Page</h1>
      <br/>
      <h4>
        If you have any questions, input, or a job oppurtunity, I'd love to hear from you! I'll always email back promply, and if I don't return your call imediately, I will call back! 
        Just leave a voicemail so I know why you called. If you'd like to see my resume, please click on the 'About' link on the navbar above. If you'd like to see projects I've worked on so far, 
        click on the 'Projects' link on the navbar above. Otherwise be safe out there, and maybe our professional lives will cross again someday!
      </h4>
      <br/>
      <br/>
      <Link to={`${props.match.url}/learn`} role="button" color="black" className="btn btn-link">
        Show contact info
      </Link>{" "}
      <Link to="/contact" role="button" color="black" className="btn btn-link">
        Hide contact info
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Contact;
