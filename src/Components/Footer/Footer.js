import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsReddit, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="social-container">
      <center>
      <div className="social-title">
        <h3>Social Connect</h3>
      </div>
      
      <a
        href="mailto:nayakarun02@gmail.com "
        className="Mail social"
      >
        <MdEmail size={40} color="red"/>
      </a>

      <a
        href="https://www.linkedin.com/in/arun-g-nayak/"
        className="LinkedIn social"
      >
        <BsLinkedin size={30} />
      </a>

      <a
        href="https://github.com/Arun9739"
        className="GitHub social"
      >
        <BsGithub size={30} color="orangered" />
      </a>

      <a
        href="https://twitter.com/arunnayakg7"
        className="Twitter social"
      >
        <BsTwitter size={30} />
      </a>


      <a
        href="https://instagram.com/arun_nayak_2002"
        className="Instagram social"
      >
        <BsInstagram size={30} color="#d62976"/>
      </a>

      <a
        href="https://www.youtube.com/@arunnayak3482"
        className="Youtube social"
      >
        <BsYoutube size={30} color="red"/>
      </a>

      <a
        href="https://www.reddit.com/user/Sad-Necessary-007"
        className="Reddit social"
      >
        <BsReddit size={30} color="red"/>
      </a>
      </center>
    </div>
  );
};

export default Footer;
