import React from "react";
import Img from './LiveLongAndRobert.png'
import ImgB from './denimbackground.png';

function Home() {
  return (
      <div style={{ backgroundImage:`url(${ImgB})` }}>
      <br/>
      <h1>Home Page</h1>
      <br/>
      <br/>
      <br/>
      <div className="logo">
          <img src={Img} width="500" alt="Live long and Robert"/>
          <h2 className="text-right">||  All the coolest things about Robert's professional life in one place...         Check it out!  ||<br/></h2>
      </div>
      
    </div>
  );
}

export default Home;
