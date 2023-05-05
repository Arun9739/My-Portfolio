import React, { useState } from "react";
import "./NavbarMobile.css";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

import { Link } from "react-scroll";
import Switch from "react-switch";

export default function NavbarMobile({theme, changeTheme}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobile-view">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              >
                <FcHome size={25} /> Home
              </Link>
            </li>

            <li className="nav-item-mobile-view">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              >
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item-mobile-view">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              >
                <FcFactory size={25} /> Work Experience
              </Link>
            </li>
            <li className="nav-item-mobile-view">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              >
                <MdBiotech size={25} color="orange" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item-mobile-view">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              >
                <MdCastForEducation size={25} coclor="yellow" /> Education
              </Link>
            </li>
            <li className="nav-item-mobile-view">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              >
                <FcTodoList size={25} /> Project
              </Link>
            </li>
            <li className="nav-item-mobile-view">
              <Link
                to="achievements"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              >
                <FcSalesPerformance size={25} /> Achievements
              </Link>
            </li>
            <li className="nav-item-mobile-view">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                format={-100}
              >
                <FcContacts size={25} /> Contact
              </Link>
            </li>

            <li className="nav-item-mobile-view">
              <Switch onChange={changeTheme} checked={theme === "light"}/>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
