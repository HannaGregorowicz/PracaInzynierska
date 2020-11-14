import React from "react";
import Hours from "./Hours";
import SocialMedia from "./SocialMedia";

const footerStyle: React.CSSProperties = {
  height: "45vh",
  backgroundColor: "#240345",
  color: "#ffffff"
};

const gridContainerStyle: React.CSSProperties = {
  height: "45vh",
  width: "90%",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr"
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={gridContainerStyle}>
        <Hours />
        <div className="gridItem address">
          <h2>Kontakt:</h2>
          <p>ul. Rynek 5/12 wrocław</p>
          <p>Tel: +48 600 700 800</p>
          <p>Email: kontakt@moderndancestudio.com</p>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
