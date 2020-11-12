import React from "react";

const groupStyle: React.CSSProperties = {
  width: "100%",
  background: "#6b1275",
  margin: "4px",
  borderRadius: "4px"
};

const Group = (props: any) => {
  return (
    <div style={groupStyle} className="center white">
      {props.name} {props.time}
    </div>
  );
};

export default Group;
