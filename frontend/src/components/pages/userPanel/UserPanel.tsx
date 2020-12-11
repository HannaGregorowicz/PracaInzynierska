import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { isUser } from "../../../utils/jsonwebtoken";
import { Redirect, Route } from "react-router";
import UserClasses from "./tabs/userClasses/UserClasses";
import UserSchedule from "./tabs/UserSchedule";
import Absences from "./tabs/absences/Absences";
import { getPersonData, getGroupsFromIds } from "../../../data/getData";
import { IPerson, IGroup } from "../../../data/dataTypes";

const tabStyle: React.CSSProperties = {
  display: "flex",
  marginBottom: "20px"
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

const UserPanel = () => {
  const [userData, setUserData] = useState<IPerson | null>(null);
  const [userGroups, setUserGroups] = useState<IGroup[]>([]);
  const [userOneTimeGroups, setUserOneTimeGroups] = useState<IGroup[]>([]);

  const getUserData = async () => {
    const personId = localStorage.getItem("personId");
    if (personId) {
      const data = await getPersonData(personId);
      return data;
    } else {
      return null;
    }
  };

  const getGroups = async () => {
    if (userData) {
      const Ids = userData.groupsIds;
      const groups = await getGroupsFromIds(Ids);
      return groups;
    }
  };

  const getOneTimeGroups = async () => {
    if (userData) {
      const Ids = userData.oneTimeGroupsIds;
      const groups = await getGroupsFromIds(Ids);
      return groups;
    }
  };

  const loadData = async () => {
    setUserData(await getUserData());
    setUserGroups((await getGroups()) || []);
    setUserOneTimeGroups((await getOneTimeGroups()) || []);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userGroups, userOneTimeGroups]);

  return isUser() ? (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <div style={tabStyle}>
          <Item href="/user/classes">Twoje zajęcia</Item>
          <Item href="/user/schedule">Twój grafik</Item>
          <Item href="/user/absences">Nieobecności</Item>
        </div>
        <Route
          path="/user/classes"
          component={() => (
            <UserClasses
              groups={userGroups}
              oneTimeGroups={userOneTimeGroups}
              reloadData={loadData}
            />
          )}
        />
        <Route
          path="/user/schedule"
          component={() => <UserSchedule groups={userGroups} />}
        />
        <Route path="/user/absences" component={Absences} />
      </div>
      <div className="topDivider"></div>
    </>
  ) : (
    <Redirect to="/login" />
  );
};

export default UserPanel;
