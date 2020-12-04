import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { isTokenValid } from "../../../utils/jsonwebtoken";
import { Redirect } from "react-router";
import UserClasses from "./tabs/UserClasses";
import UserSchedule from "./tabs/UserSchedule";
import Incoming from "./tabs/Incoming";
import ToMakeUp from "./tabs/ToMakeUp";
import History from "./tabs/History";
import { getPersonData } from "../../../data/getData";
import { IPerson } from "../../../data/dataTypes";

const tabStyle: React.CSSProperties = {
  display: "flex",
  marginBottom: "20px"
};

const Item = styled.p`
  margin-right: 20px;
  font-size: 16pt;
  color: #3e0c6e;
  cursor: pointer;
  border-bottom: solid 3px #3e0c6e;
  font-weight: 500;

  &:hover {
    opacity: 60%;
  }
`;

const UserPanel = () => {
  const userClasses = "userClasses";
  const userSchedule = "userSchedule";
  const incoming = "incoming";
  const toMakeUp = "toMakeUp";
  const history = "history";

  const [mode, setMode] = useState(userClasses);
  const [userData, setUserData] = useState<IPerson | null>(null);

  const getUserData = async () => {
    const personId = localStorage.getItem("personId");
    if (personId) {
      const data = await getPersonData(personId);
      return data;
    } else {
      return null;
    }
  };

  const loadData = async () => {
    setUserData(await getUserData());
  };

  useEffect(() => {
    loadData();
  });

  const handleClick = (value: string) => {
    setMode(value);
  };

  const renderTab = (mode: string) => {
    switch (mode) {
      case userClasses:
        return <UserClasses groups={userData ? userData.groupsIds : null} />;
      case userSchedule:
        return <UserSchedule />;
      case incoming:
        return <Incoming />;
      case toMakeUp:
        return <ToMakeUp />;
      case history:
        return <History />;
    }
  };

  return isTokenValid() ? (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <div style={tabStyle}>
          <Item onClick={() => handleClick(userClasses)}>Twoje zajęcia</Item>
          <Item onClick={() => handleClick(userSchedule)}>Twój grafik</Item>
          <Item onClick={() => handleClick(incoming)}>Nadchodzące</Item>
          <Item onClick={() => handleClick(toMakeUp)}>Do odrobienia</Item>
          <Item onClick={() => handleClick(history)}>Historia</Item>
        </div>
        {renderTab(mode)}
      </div>
      <div className="topDivider"></div>
    </>
  ) : (
    <Redirect to="/login" />
  );
  // TODO: add alert that not logged in
};

export default UserPanel;