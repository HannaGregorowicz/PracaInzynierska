import React from "react";
import { IGroup } from "../../data/dataTypes";

interface IProps {
  group: IGroup;
}

const itemStyle: React.CSSProperties = {
  height: "7vh",
  margin: "1vh",
  borderRadius: "3px"
};

const gridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  backgroundImage:
    "linear-gradient(0deg,rgba(0,0,0,0.07) 0%,rgba(0,0,0,0.07) 100%)"
};

// TODO: Hover zapisz się

const GroupItem = (props: IProps) => {
  const group = props.group;
  const instructorFirstName = () => {
    return group.instructor.split(" ")[0];
  };

  const getBackgroundColor = () => {
    const yellow = "#FDF6DC";
    const lightOrange = "#FDEACA";
    const orange = "#FFD4B8";
    const green = "#D2EBD8";
    const blue = "#ACC5E8";
    const pink = "#F9E0E3";
    const level = group.level;

    switch (level) {
      case "P0":
        return yellow;
      case "P1":
        return lightOrange;
      case "P2":
        return orange;
      case "S":
        return green;
      case "Z":
        return blue;
      case "Open":
        return pink;
    }
    return "#ffffff";
  };

  return (
    <div style={{ ...itemStyle, background: getBackgroundColor() }}>
      {group.name}
      <br />
      <div style={gridContainerStyle}>
        <div>{group.level}</div>
        <div>{instructorFirstName()}</div>
      </div>
    </div>
  );
};

export default GroupItem;
