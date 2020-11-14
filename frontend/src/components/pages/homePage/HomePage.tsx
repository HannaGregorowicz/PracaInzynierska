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

const imageStyle: React.CSSProperties = {
  maxWidth: "80%",
  height: "80%"
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

          <img src={img1} style={imageStyle} className="gridItem" alt="img1" />
          <img src={img2} style={imageStyle} className="gridItem" alt="img2" />
          <div className="gridItem">{sampleText}</div>
        </div>
      </div>
      <div className="topDivider" />
    </>
  );
};

export default HomePage;
