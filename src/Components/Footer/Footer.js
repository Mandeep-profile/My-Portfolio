import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { LinkedinLogo, GitMediaLogo } from "../../Assets/Images";
import "./Footer.scss";

const Footer = () => {
  const navigate = useNavigate();

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="footer-section">
      <div className="footer-section-div">
        <h1>Start a Project</h1>
        <p>
        Interested in collaborating? Let's schedule a time to discuss further.
        </p>
        <button className="footer-btn" onClick={() => navigate("./contact")}>
          Let's do this
        </button>
      </div>
      <div className="footer-mid-section">
        <span className="main-logo">
          <img src={Logo} className="logo" alt="logo" />
        </span>
        <div className="social-media-links">
          <a href="https://www.linkedin.com/feed/" target="blank" className="links">
            <LinkedinLogo />
          </a>
          <a href="https://github.com/" target="blank" className="links">
            <GitMediaLogo />
          </a>
        </div>
        <p className="copyright-line">Made by me © {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;