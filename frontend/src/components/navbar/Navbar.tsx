import React from "react";
import {
  faHome,
  faClipboardList,
  faCalendarAlt,
  faUserFriends,
  faMoneyBillAlt
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
  zIndex: 10
};

const ulStyle: React.CSSProperties = {
  listStyleType: "none",
  display: "flex",
  alignItems: "center"
};

const logoStyle: React.CSSProperties = {
  maxHeight: "9vh"
};

const divStyle: React.CSSProperties = {
  height: "10vh"
};

export const Navbar = () => {
  return (
    <>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <a href="/">
            <img src={logo} style={logoStyle} alt="logo" />
          </a>
          <MenuItem href="/" name="Strona główna" icon={faHome} />
          <MenuItem href="/classes" name="Zajęcia" icon={faClipboardList} />
          <MenuItem href="/schedule" name="Grafik" icon={faCalendarAlt} />
          <MenuItem
            href="/instructors"
            name="Instruktorzy"
            icon={faUserFriends}
          />
          <MenuItem href="/prices" name="Cennik" icon={faMoneyBillAlt} />
        </ul>
      </nav>
      <div style={divStyle}></div>
    </>
  );
};

export default Navbar;
