import React from "react";
import { IGroup } from "../../../../../data/dataTypes";
import Group from "./Group";
import { containerStyle } from "../../../../common/styles";

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
  reloadData: () => Promise<void>;
}

const UserClasses = (props: IProps) => {
  const makeRegularGroup = (group: IGroup) => {
    return (
      <Group
        key={group.id}
        type="regular"
        group={group}
        reloadData={props.reloadData}
      />
    );
  };

  const makeOneTimeGroup = (group: IGroup) => {
    return (
      <Group
        key={group.id}
        type="oneTime"
        group={group}
        reloadData={props.reloadData}
      />
    );
  };

  return props.groups ? (
    <div style={containerStyle}>
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
    </div>
  ) : (
    <h3>Brak zajęć!</h3>
  );
};

export default UserClasses;
