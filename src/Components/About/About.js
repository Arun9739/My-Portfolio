import React from "react";
import "./About.css";
import profilepic from "../../img/arun_image.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={profilepic} alt="My profile pic" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-detail">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
              {'      '}Hello ! I'm a MERN stack web developer with a passion for machine learning, competitive coding and open-source development. I love building web applications, mobile application that are both visually appealing and functionally robust. As a  open-source enthusiast I actively contribute to various projects. I believe that the power of collaboration can lead to innovative solutions that benefit everyone. In addition to coding, I enjoy reading books and playing chess in my free time. I believe that continuous learning is crucial in the field of software development, which is why I'm constantly seeking new knowledge and skills.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
