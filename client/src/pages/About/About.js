import React from "react";
import "./About.css";
import Jump from 'react-reveal/Jump';
const About = () => {
  return (
    <>
       <Jump>

       
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="anantdp.jpeg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p className="aboutt">
              Welcome to my corner of the web! I'm Anant Arya, a passionate develepor. My journey into the world of tech began from the very first year in my college. I have a good understanding of problem solving, web development and Data structures and algorithms. I've worked on several group projects and individual projects as well based on computer networks and web development along with competitive programming. I also have knowledge of Database and Management systems and structured query language. I have a keen interest in developing scalable and high-performance applications whether it's crafting pixel-perfect designs, writing elegant code, or devising innovative strategies, I'm always eager to push boundaries and deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
        </Jump>
    </>
  );
};

export default About;