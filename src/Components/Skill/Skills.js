import React from "react";
import {
  JSLOGOLIGHT,
  NEXTLOGOLIGHT,
  REACTLOGOLIGHT,
  HTMLLOGOLIGHT,
  CSSLOGOLIGHT,
  REDUXLOGOLIGHT,
  VISUALSTUDIOLIGHT,
  SASSLOGOLIGHT,
  FIGMALOGOLIGHT,
  TSLOGOLIGHT,
  GITLOGOLIGHT,
  BOOTSTRAPLOGOLIGHT,
  HTMLLOGODARK,
  CSSLOGODARK,
  REACTLOGODARK,
  REDUXLOGODARK,
  VISUALSTUDIODARK,
  SASSLOGODARK,
  NEXTLOGODARK,
  JSLOGODARK,
  TSLOGODARK,
  FIGMALOGODARK,
  GITLOGODARK,
  BOOTSTRAPLOGODARK,
} from "../../Assets/Images";
import "./Skills.scss";
import { useSelector } from "react-redux";

const Skills = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  return (
    <div className="skills-section">
      <div className="skills-section-div">
        <p>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
        <h1
          className={`${
            !isSelectedTheme ? "site-dark-theme" : "site-light-theme"
          }`}
        >
          Skills
        </h1>
        <div className="skills-highlight">
          <p>
            The main area of expertise is front end development (client side of
            the web).
          </p>

        </div>
      </div>
      <div className="skills-layout">
        <div className="skills-icons">
          <span className="icon">
            {isSelectedTheme ? <REACTLOGOLIGHT /> : <REACTLOGODARK />}
          </span>
          <p
            className={`${
              !isSelectedTheme ? "site-dark-theme" : "site-light-theme"
            }`}
          >
            React
          </p>
        </div>
        <div className="skills-icons">
          {isSelectedTheme ? <HTMLLOGOLIGHT /> : <HTMLLOGODARK />}
          <p>HTML</p>
        </div>
        <div className="skills-icons">
          {isSelectedTheme ? <JSLOGOLIGHT /> : <JSLOGODARK />}
          <p>JavaScript</p>
        </div>
        <div className="skills-icons">
          {isSelectedTheme ? <CSSLOGOLIGHT /> : <CSSLOGODARK />}
          <p>CSS</p>
        </div>
        <div className="skills-icons">
        {isSelectedTheme ? <GITLOGOLIGHT /> : <GITLOGODARK />}
          <p>Github</p>
        </div>
        <div className="skills-icons">
          {isSelectedTheme ? <REDUXLOGOLIGHT /> : <REDUXLOGODARK />}
          <p>Redux</p>
        </div>
      </div>
      <div className="skills-layout">
        <div className="skills-icons">
          {isSelectedTheme ? <VISUALSTUDIOLIGHT /> : <VISUALSTUDIODARK />}
          <p>Visual</p>
        </div>
        <div className="skills-icons">
          {isSelectedTheme ? <SASSLOGOLIGHT /> : <SASSLOGODARK />}
          <p>SASS</p>
        </div>
        <div className="skills-icons">
        {isSelectedTheme ? <TSLOGOLIGHT /> : <TSLOGODARK />}
          <p>TypeScript</p>
        </div>
        <div className="skills-icons">
        {isSelectedTheme ? <BOOTSTRAPLOGOLIGHT /> : <BOOTSTRAPLOGODARK />}
          <p>Bootstrap</p>
        </div>
        <div className="skills-icons">
          {isSelectedTheme ? <NEXTLOGOLIGHT /> : <NEXTLOGODARK />}
          <p>NextJs</p>
        </div>
        <div className="skills-icons">
        {isSelectedTheme ? <FIGMALOGOLIGHT /> : <FIGMALOGODARK />}
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;