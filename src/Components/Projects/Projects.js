import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import cardOne from "../../Assets/cardOne.jpeg";
import cardTwo from "../../Assets/cardTwo.jpeg";
import projectLogo from "../../Assets/tyi.png";
import LollyLogo from "../../Assets/lolly-logo.jpeg";
import "./Projects.scss";

const Projects = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const [showDetails, setShowDetails] = useState(false);
  const [showDetailsNew, setShowDetailsNew] = useState(false);
  const [disableButton, setDisableButton] = useState(false)

  useEffect(() => {
    setDisableButton(true)
  }, [disableButton])

  return (
    <div className="Projects-div-main">
      <h3 className={isSelectedTheme ? "site-light-theme" : "site-dark-theme"}>
        My Recent Work
      </h3>
      <p>Here are few projects I've worked on in my previous tenure</p>
      <div className="projects-cards">
        <div
          className="card"
          onMouseOver={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
          <img src={cardOne} alt="The Yoga Institute" />
          {!showDetails && (
            <div className="card-info-visible">
              <img src={projectLogo} alt="" className="projectImage" />
            </div>
          )}
          {showDetails && (
            <div className="card-info">
              <p>
                The Yoga Institute, established by Shri Yogendra Ji in 1918 is
                the world’s oldest Yoga Center.
              </p>
              <button className="card-btn">
                <a
                  href="https://theyogainstitute.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              </button>
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseOver={() => setShowDetailsNew(true)}
          onMouseLeave={() => setShowDetailsNew(false)}
        >
          <img src={cardTwo} alt="Web Scrapping" />
          {!showDetailsNew && (
            <div className="card-visible">
              <img src={LollyLogo} alt="" className="projectImage" />
            </div>
          )}
          {showDetailsNew && (
            <div className="card-info">
              <p>
                Lolly App, a cutting-edge video streaming platform akin to
                YouTube.
              </p>
              <button className="card-btn" title="Add Website Url Soon" disabled={disableButton ? true : false}>
                <a href="####" target="_blank" rel="noreferrer">
                  Visit Website
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
