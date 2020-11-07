import React from "react";
import MenuItem from "./MenuItem";

const navStyle: React.CSSProperties = {
  height: "70px",
  background: "#3e0c6e",
  fontSize: "20px",
  color: "#FFFFFF",
  borderBottom: "3px solid #240345",
  display: "flex"
};

const ulStyle: React.CSSProperties = {
  listStyleType: "none",
  display: "flex",
  alignItems: "center"
};

export const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <MenuItem href="/" name="<Tu będzie logo>" />
        <MenuItem href="/" name="Strona główna" />
        <MenuItem href="/classes" name="Zajęcia" />
        <MenuItem href="/schedule" name="Grafik" />
        <MenuItem href="/instructors" name="Instruktorzy" />
        <MenuItem href="/prices" name="Cennik" />
      </ul>
    </nav>
  );
};

export default Navbar;
