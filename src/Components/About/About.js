import React from "react";
import "./About.scss";

const About = ({ showResume, setShowResume }) => {
  const handleResume = () => {
    setShowResume(!showResume);
  };
  return (
    <>
      <div className="About-main-div">
        <div className="about-div">
          <h1>Hi, I’m Mandeep Singh. Nice to meet you.</h1>
          <p>
            My journey as a frontend developer has been a rewarding one. I've
            had the privilege of contributing to innovative projects at esteemed
            companies such as NexGen IOT Solutions and MMR Boutique. Working
            alongside talented individuals, I've had the opportunity to
            collaborate closely with backend engineers, fostering a dynamic and
            synergistic work environment.
          </p>
          <div className="about-button-div">
            <button className="resume-button" onClick={handleResume}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
