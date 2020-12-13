import React from "react";
import styled from "styled-components";
import { isAdmin } from "../../../utils/jsonwebtoken";
import { Redirect, Route } from "react-router";
import Users from "./users/Users";
import AdminSchedule from "./adminSchedule/AdminSchedule";

const tabStyle: React.CSSProperties = {
  display: "flex",
  margin: "20px auto",
  width: "95%"
};

const Item = styled.a`
  margin-right: 20px;
  font-size: 16pt;
  color: #3e0c6e;
  cursor: pointer;
  border-bottom: solid 3px #3e0c6e;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    opacity: 60%;
  }
`;

const AdminPanel = () => {
  return isAdmin() ? (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Panel administratora</h2>
        <div style={tabStyle}>
          <Item href="/admin/users">Użytkownicy</Item>
          <Item href="/admin/schedule">Grafik</Item>
        </div>
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
