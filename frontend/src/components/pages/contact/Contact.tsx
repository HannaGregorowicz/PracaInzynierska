import React from "react";
import Map from "./Map";
import Address from "./Address";

const gridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const Contact = () => {
  return (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Zapraszamy do kontaktu!</h2>
        <div style={gridContainerStyle}>
          <Map />
          <Address />
        </div>
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Contact;
