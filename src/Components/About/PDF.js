import React from "react";
import Resume from "../../Assets/Latest Resume.pdf";

const PDF = () => {
  return (
    <div>
      <embed
        src={Resume}
        style={{ width: "100%", height: "100vh" }}
        type="application/pdf"
      />
    </div>
  );
};

export default PDF;

