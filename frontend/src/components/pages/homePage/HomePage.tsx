import React from "react";
import Background from "../../../images/homePage/main-image.jpg";
import img1 from "../../../images/homePage/img1.jpg";
import img2 from "../../../images/homePage/img2.jpg";
import { sampleText } from "../../../sampleText";

const divStyle: React.CSSProperties = {
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center 80%",
  textAlign: "center",
  top: "20vh"
};

const spanStyle: React.CSSProperties = {
  position: "relative",
  top: "25%",
  fontSize: "50pt"
};

const HomePage = () => {
  return (
    <>
      <div style={divStyle}>
        <span style={spanStyle}>Modern Dance Studio</span>
      </div>
      <div className="bottomDivider" />
      <div className="contentContainer">
        <h2 className="center"> Witaj w Modern Dance Studio! </h2>
        <div className="gridContainer">
          <div className="gridItem">{sampleText}</div>

          <img src={img1} className="gridImage" alt="img1" />
          <img src={img2} className="gridImage" alt="img2" />
          <div className="gridItem">{sampleText}</div>
        </div>
      </div>
      <div className="topDivider" />
      <div style={divStyle} />
    </>
  );
};

export default HomePage;
