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
  faSignInAlt,
  faSignOutAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import logo from "../../images/logo.png";
import {
  navStyle,
  menuButtonStyle,
  menuButtonVisible,
  flexboxContainerStyle,
  logoStyle,
  ulStyle,
  ulSmallStyle,
  ulLoginStyle,
  ulLogInSmallStyle,
  divStyle
} from "./navbarStyles";
import { isTokenValid, isUser } from "../../utils/jsonwebtoken";

export const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const [showNavbar, setShowNavbar] = useState(false);
  const setNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  // TODO: Fix responsive navbar when screen is wide but small height
  // TODO: Change logo to be better
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
          {isTokenValid() ? (
            <>
              {isUser() ? (
                <MenuItem href="/user" name="Twoje konto" icon={faUser} />
              ) : (
                <MenuItem href="/admin/users" name="Panel" icon={faUser} />
              )}
              <MenuItem
                onClick={handleLogout}
                href="/"
                name="Wyloguj"
                icon={faSignOutAlt}
              />
            </>
          ) : (
            <MenuItem
              href="/login"
              name="Zaloguj się / Załóż konto"
              icon={faSignInAlt}
            />
          )}
        </ul>
      </nav>
      <div style={divStyle}></div>
    </>
  );
};

export default Navbar;
