import React from "react";
import { useMediaQuery } from "react-responsive";
import { Redirect } from "react-router-dom";
import LogIn from "./LogIn";
import Register from "./Register";
import { isTokenValid } from "../../../utils/jsonwebtoken";
import LoginInfo from "./LoginInfo";

const gridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const smallGridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr"
};

const LogInPanel = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  return isTokenValid() ? (
    <Redirect to="/user" />
  ) : (
    <>
      <div className="bottomDivider" />
      <div className="contentContainer">
        <div style={isMobile ? smallGridContainerStyle : gridContainerStyle}>
          <div>
            <LogIn />
            <LoginInfo />
          </div>
          <Register />
        </div>
      </div>
      <div className="topDivider" />
    </>
  );
};

export default LogInPanel;
