import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCV from "./Arun Nayak.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-class">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade right>
          <h1>Hello, I'm Arun Nayak </h1>

          <h3>
            <Typewriter
              options={{
                strings: [
                  "Open Source Contributor",
                  "Web Developer",
                  "MERN Stack Developer",
                  "Competitive Programmer",
                  "ML Enthusiast"
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">
          <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              > 
            <div className="hire-me-button">
             
              Hire me
              
            </div>
            </Link>
            <div className="get-resume-button">
              <a href={MyCV} download="Arun_Nayak.pdf">
                Get resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
