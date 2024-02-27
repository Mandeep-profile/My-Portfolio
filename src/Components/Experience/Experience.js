import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/fontawesome-free-solid";
import { LocationImg, EmailImg } from "../../Assets/Images";
import "./Experience.scss";
import { ToggleActions } from "../../store";
import { ProfessionalExperience } from '../../Utils/Experience/index'
import { useSelector, useDispatch } from "react-redux";

const Experience = () => {

  const [selectedCompany, setSelectedCompany] = useState(
    ProfessionalExperience[0].id
  );

  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const ToggleExperience = useSelector(
    (state) => state.Experience.isExperienced
  );

  const dispatch = useDispatch();

  const handleOpenToggle = (company) => {
    if (!ToggleExperience) dispatch(ToggleActions.isExperiencedOpen());
    setSelectedCompany(company.id);
  };

  const handleCloseToggle = () => {
    if (ToggleExperience) dispatch(ToggleActions.isExperiencedOpen());
    setSelectedCompany(null);
  };

  return (
    <div className="experience-main-div section-div">
      <div className="experience-section-div">
        <div className="section-title-wrapper">
          <h1  className={`${
            !isSelectedTheme ? "site-dark-theme" : "site-light-theme"
          }`}>Experience</h1>
        </div>
        <div>
          {ProfessionalExperience.map((companyDetail) => (
            <div
              key={companyDetail.id}
              className={`company-experience ${
                companyDetail.id === selectedCompany
                  ? "selected-experienced-company"
                  : ""
              }`}
            >
              <div className="company-experience-heading">
                <h1>{companyDetail.name}</h1>
                <h1>{companyDetail.date}</h1>
                {selectedCompany === companyDetail.id ? (
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="plus-icon"
                    onClick={() => handleCloseToggle()}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="plus-icon"
                    onClick={() => handleOpenToggle(companyDetail)}
                  />
                )}
              </div>
              {ToggleExperience && selectedCompany === companyDetail.id && (
                <div className="company-experience-details">
                  <div className="company-experience-para">
                    <img
                      src={companyDetail.details.imageURL}
                      className="nexgenImg"
                      alt={companyDetail.name}
                    />
                    <div className="location">
                      <h1><span className="location-img"><LocationImg /></span>{companyDetail.details.location}</h1>
                      <h1><span className="email-img"><EmailImg /></span>{companyDetail.details.email}</h1>
                    </div>
                    <p>{companyDetail.details.description}</p>
                    <ul className="unordered-stack">
                      {companyDetail.details.techStack.map((skills) => (
                        <li key={skills}>{skills}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;