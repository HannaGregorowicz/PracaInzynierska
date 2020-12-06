import React from "react";
import { IGroup } from "../../data/dataTypes";
import { getBackgroundColor } from "../../utils/getGroupColor";

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

  return (
    <div style={{ ...itemStyle, background: getBackgroundColor(group.level) }}>
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
