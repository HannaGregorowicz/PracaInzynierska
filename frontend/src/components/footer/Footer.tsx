import React from "react";
import { useMediaQuery } from "react-responsive";
import Hours from "./Hours";
import SocialMedia from "./SocialMedia";

const footerStyle: React.CSSProperties = {
  backgroundColor: "#240345",
  color: "#ffffff"
};

const gridWrapperStyle: React.CSSProperties = {
  width: "90%",
  margin: "auto"
};

const gridDesktopStyle: React.CSSProperties = {
  height: "45vh",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr"
};

const gridTabletStyle: React.CSSProperties = {
  height: "95vh",
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const gridMobileStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr"
};

const Footer = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  return (
    <div style={footerStyle}>
      <div style={gridWrapperStyle}>
        <div
          style={
            isDesktop
              ? gridDesktopStyle
              : isMobile
              ? gridMobileStyle
              : gridTabletStyle
          }
        >
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
    </div>
  );
};

export default Footer;
