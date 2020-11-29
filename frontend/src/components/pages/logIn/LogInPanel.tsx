import React from "react";
import { Redirect } from "react-router";
import LogIn from "./LogIn";
import Register from "./Register";
import { isTokenValid } from "../../../utils/jsonwebtoken";

const gridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const LogInPanel = () => {
  return isTokenValid() ? (
    // TODO: Change to user profile
    <Redirect to="/" />
  ) : (
    <>
      <div className="bottomDivider" />
      <div className="contentContainer">
        <div style={gridContainerStyle}>
          <LogIn />
          <Register />
        </div>
      </div>
      <div className="topDivider" />
    </>
  );
};

export default LogInPanel;
