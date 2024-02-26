import React from "react";
import avatar from "../../Assets/avatar.svg";
import webLogo from "../../Assets/web.svg";
import { useSelector } from "react-redux";
import "./Home.scss";

const Home = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  return (
    <div>
      <div className="TopSlide-main">
        <div className="TopSlide-main-heading">
          <h1
            className={`${
              !isSelectedTheme ? "site-dark-theme" : "site-light-theme"
            }`}
          >
            Frontend Developer & Software Engineer
          </h1>
          <p>I create elegantly simple designs and write code with passion</p>
        </div>
        <div className="avatar-img-div">
          <img src={avatar} className="avatar-img" alt="avatar" />
        </div>
        <div>
          <img src={webLogo} className="web-img" alt="web" />
        </div>
      </div>
    </div>
  );
};

export default Home;
