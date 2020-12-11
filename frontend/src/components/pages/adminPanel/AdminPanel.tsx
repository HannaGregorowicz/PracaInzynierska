import React from "react";
import { isAdmin } from "../../../utils/jsonwebtoken";
import { Redirect } from "react-router";

const AdminPanel = () => {
  return isAdmin() ? (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Jesteś adminem :)</h2>
      </div>
      <div className="topDivider" />
    </>
  ) : (
    <Redirect to="/login" />
  );
};

export default AdminPanel;
