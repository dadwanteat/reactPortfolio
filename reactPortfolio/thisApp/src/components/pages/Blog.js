import React from "react";
import ImgB from './denimbackground.png';
import RdMe from './ReadMeGen.png';
import Rsp from './Responsive.png';
import StrTrk from './StarTrekQuiz.png';
import StrTrkSmpl from './StarTrekSample.png';

function Blog() {
  return (
    <div style={{ backgroundImage:`url(${ImgB})` }}>
      <br/>
      <h1>Projects</h1>
      <br/>
      <br/>
      <img src={RdMe}  width="500" alt="ReadMe Screen Shot"/>
      <p>Above is a command-line generated ReadMe sample</p>

      <img src={StrTrk}  width="500" alt="ReadMe Screen Shot"/>

      <img src={StrTrkSmpl}  width="500" alt="ReadMe Screen Shot"/>
      <p>Above are two screen shots of a Star Trek Quiz that keeps your score!</p>

      <img src={Rsp}  width="800" alt="ReadMe Screen Shot"/>
      <p>Above is a my first Website! Memories...</p>
      <br/>
      <br/>
    </div>
  );
}

export default Blog;
