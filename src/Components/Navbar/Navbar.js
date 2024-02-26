import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { ThemeActions } from "../../store/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/fontawesome-free-solid";
import ClearIcon from "@mui/icons-material/Clear";
import "./Navbar.scss";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [NavOptions, setNavOptions] = useState(true);
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const btnText = location.pathname === "/contact" ? "Close" : "Say Hello";

  const handleDarkMode = () => {
    if (isSelectedTheme) {
      dispatch(ThemeActions.isDarkTheme()); // Dispatch action for dark theme
    }
  };

  const handleLightMode = () => {
    if (!isSelectedTheme) {
      dispatch(ThemeActions.isLightTheme()); // Dispatch action for Light theme
    }
  };

  useEffect(() => {
    const handleResizeWindow = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const handleNavBar = () => {
    setNavOptions(!NavOptions);
  };

  const handleClose = () => {
    if (location.pathname === "/contact") {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="home-nav-main Responsive-nav-main">
        <div>
          <img src={Logo} className="logo" alt="logo" />
        </div>
        {windowWidth < 1000 ? (
          <div>
            {location.pathname === "/" && NavOptions ? (
              <FontAwesomeIcon icon={faBars} onClick={handleNavBar} />
            ) : (
              <span onClick={handleClose}>
                <ClearIcon onClick={handleNavBar} />
              </span>
            )}
          </div>
        ) : (
          <div className="homeNavButtons">
            <FontAwesomeIcon icon={faMoon} className={`mode-icon`} onClick={handleDarkMode} />
            <FontAwesomeIcon icon={faSun} className={`mode-icon`} onClick={handleLightMode}/>
            <button
              className="contact-button"
              onClick={() =>
                location.pathname === "/contact"
                  ? navigate("/")
                  : navigate("/contact")
              }
            >
              {btnText}
            </button>
          </div>
        )}
      </div>
      {windowWidth < 1000 && !NavOptions && (
        <div className="homeNavButtons responsiveNavButtons">
          <div className="NavIcons">
            <FontAwesomeIcon icon={faMoon} className={`mode-icon`} onClick={handleDarkMode}/>
            <FontAwesomeIcon icon={faSun} className={`mode-icon`} onClick={handleLightMode}/>
          </div>
          <div>
            <button
              className="contact-button"
              onClick={() =>
                location.pathname === "/contact"
                  ? navigate("/")
                  : navigate("/contact")
              }
            >
              {btnText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
