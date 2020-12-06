import React from "react";
import { IGroup } from "../../../../../data/dataTypes";
import Group from "./Group";

const pStyle: React.CSSProperties = {
  fontSize: "16pt",
  color: "#3e0c6e",
  borderBottom: "2px solid #3e0c6e",
  width: "40%",
  margin: "25px 0 0 0"
};

interface IProps {
  groups: IGroup[];
  oneTimeGroups: IGroup[];
}

const UserClasses = (props: IProps) => {
  const makeRegularGroup = (group: IGroup) => {
    return <Group type="regular" group={group} />;
  };

  const makeOneTimeGroup = (group: IGroup) => {
    return <Group type="oneTime" group={group} />;
  };

  return props.groups ? (
    <>
      <h3>Twoje zajęcia</h3>
      <p style={pStyle}>Jednorazowe</p>
      {props.oneTimeGroups.length ? (
        props.oneTimeGroups.map(makeOneTimeGroup)
      ) : (
        <p>Brak zajęć.</p>
      )}
      <p style={pStyle}>Na stałe</p>
      {props.groups.length ? (
        props.groups.map(makeRegularGroup)
      ) : (
        <p>Brak zajęć.</p>
      )}
    </>
  ) : (
    <h3>Brak zajęć!</h3>
  );
};

export default UserClasses;
