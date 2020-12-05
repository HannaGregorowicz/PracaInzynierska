import React from "react";
import { shortDayName } from "../../../utils/dayParser";

const groupStyle: React.CSSProperties = {
  width: "100%",
  background: "#6b1275",
  margin: "4px",
  borderRadius: "4px",
  padding: "3px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr"
};

interface IProps {
  className?: string;
  name: string;
  time: string;
  level: string;
}

const Group = (props: IProps) => {
  return (
    <div style={groupStyle} className={props.className + " center white"}>
      <p>{shortDayName(props.name)}</p>
      <p>{props.time}</p>
      <p>{props.level}</p>
    </div>
  );
};

export default Group;
