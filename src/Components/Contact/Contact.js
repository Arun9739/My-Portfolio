import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal/Fade";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contactimg from "../../img/flower.avif";

const Contact = () => {
  const API = "https://my-portfolio-wbbu.vercel.app/sendemail"; 

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();

  const sendemailInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
            draggable: true,
            hideProgressBar:false
          })
        }else{
          toast.success("Your E-mail has been sent", {
            position: toast.POSITION.TOP_RIGHT,
            draggable: true,
            hideProgressBar:false
          })

          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-image">
              <img
                src= {contactimg}
                alt="contact"
              />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Me</h5>
              </div>

              <form>
                <div className="contact-form">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-label">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-label">Job types</label>
                  <select
                    className="custom-select-tag"
                    value={jobtypes}
                    onChange={(e) => setJobtypes(e.target.value)}
                  >
                    <option>Choose...</option>
                    <option>Full time</option>
                    <option>Part time</option>
                    <option>Internship</option>
                    <option>Contract/Freelancing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-label">Message</label>
                  <textarea
                    rows={4}
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="button-submit" onClick={ sendemailInfo }>
                  <p>
                    Send
                    <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>

      <ToastContainer draggable autoClose={8000}/>

    </div>
  );
};

export default Contact;
