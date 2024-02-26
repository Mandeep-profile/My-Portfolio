import React from "react";
import Main from "./Main";
import { useSelector } from "react-redux";
// import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './theme.css'

const App = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  return (
    <div
    className={`App ${
      isSelectedTheme
        ? "site-light-theme-background"
        : "site-dark-theme-background"
    }`}
  >
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;