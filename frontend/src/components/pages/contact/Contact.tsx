import React from "react";
import { useMediaQuery } from "react-responsive";
import Map from "./Map";
import Address from "./Address";

const gridDesktopStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const gridSmallStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr"
};

const Contact = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  return (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Zapraszamy do kontaktu!</h2>
        <div style={isMobile ? gridSmallStyle : gridDesktopStyle}>
          <Map />
          <Address />
        </div>
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Contact;
