import React from "react";
import { isAdmin } from "../../../utils/jsonwebtoken";
import { Redirect, Route } from "react-router";
import Users from "./users/Users";
import AdminSchedule from "./adminSchedule/AdminSchedule";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return isAdmin() ? (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Panel administratora</h2>
        <Link to="/admin/users">Użytkownicy</Link>
        <Link to="/admin/schedule">Grafik</Link>
        <Route path="/admin/schedule" component={AdminSchedule} />
        <Route path="/admin/users" component={Users} />
      </div>
      <div className="topDivider" />
    </>
  ) : (
    <Redirect to="/login" />
  );
};

export default AdminPanel;
