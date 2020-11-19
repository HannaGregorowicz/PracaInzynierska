import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClipboardList,
  faCalendarAlt,
  faUserFriends,
  faMoneyBillAlt,
  faPhoneAlt,
  faBars,
  faUserPlus,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import logo from "../../images/logo.png";

const navStyle: React.CSSProperties = {
  height: "10vh",
  width: "100%",
  background: "#3e0c6e",
  fontSize: "20px",
  color: "#FFFFFF",
  borderBottom: "3px solid #240345",
  display: "flex",
  position: "fixed",
  justifyContent: "space-between",
  zIndex: 7
};

const ulStyle: React.CSSProperties = {
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
  transform: "translateY(40vh) !important"
};

const ulSmallStyle: React.CSSProperties = {
  ...ulStyle,
  display: "block",
  position: "absolute",
  top: "10vh",
  backgroundColor: "#3e0c6e",
  width: "40%",
  height: "100vh",
  opacity: "0.8",
  zIndex: 6,
  borderBottom: "3px solid #240345",
  transform: "translateX(0) !important",
  transition: "transform 0.5s ease-in"
};

const ulLoginStyle: React.CSSProperties = {
  ...ulStyle,
  marginRight: "15px"
};

const ulLogInSmallStyle: React.CSSProperties = {
  ...ulStyle,
  display: "block",
  position: "absolute",
  top: "50vh",
  zIndex: 6,
  transform: "translateX(0) !important",
  transition: "transform 0.5s ease-in"
};

const flexboxContainerStyle: React.CSSProperties = {
  display: "flex",
  marginRight: "5vw"
};

const logoStyle: React.CSSProperties = {
  maxHeight: "9vh",
  zIndex: 8
};

const divStyle: React.CSSProperties = {
  height: "10vh"
};

const menuButtonStyle: React.CSSProperties = {
  cursor: "pointer",
  position: "absolute",
  zIndex: 10,
  top: "20px",
  right: "20px",
  display: "none"
};

const menuButtonVisible: React.CSSProperties = {
  ...menuButtonStyle,
  display: "block"
};

export const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const [showNavbar, setShowNavbar] = useState(false);
  const setNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={isDesktop ? menuButtonStyle : menuButtonVisible}>
          <FontAwesomeIcon
            className="fasIcon"
            icon={faBars}
            onClick={setNavbar}
          />
        </div>
        <div style={flexboxContainerStyle}>
          <a href="/">
            <img src={logo} style={logoStyle} alt="logo" />
          </a>
          <ul
            style={isDesktop ? ulStyle : ulSmallStyle}
            className={isDesktop ? "" : showNavbar ? "" : "hidden"}
          >
            <MenuItem href="/" name="Strona główna" icon={faHome} />
            <MenuItem href="/classes" name="Zajęcia" icon={faClipboardList} />
            <MenuItem href="/schedule" name="Grafik" icon={faCalendarAlt} />
            <MenuItem
              href="/instructors"
              name="Instruktorzy"
              icon={faUserFriends}
            />
            <MenuItem href="/prices" name="Cennik" icon={faMoneyBillAlt} />
            <MenuItem href="/contact" name="Kontakt" icon={faPhoneAlt} />
          </ul>
        </div>
        <ul
          style={isDesktop ? ulLoginStyle : ulLogInSmallStyle}
          className={isDesktop ? "" : showNavbar ? "" : "hidden"}
        >
          <MenuItem href="/login" name="Zaloguj się" icon={faSignInAlt} />
          <MenuItem href="/register" name="Zarejestruj się" icon={faUserPlus} />
        </ul>
      </nav>
      <div style={divStyle}></div>
    </>
  );
};

export default Navbar;
