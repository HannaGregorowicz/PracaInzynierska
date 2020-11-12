import React from "react";
import OneClass from "./OneClass";
import { classes } from "./temporaryClasses";

const gridContainerStyle: React.CSSProperties = {
  display: "grid",

  gridTemplateColumns: "1fr 1fr 1fr 1fr"
};

const formattedClasses = classes.map(oneClass => (
  <OneClass
    className="gridItem"
    name={oneClass.name}
    description={oneClass.description}
    groups={oneClass.groups}
    imageName={oneClass.imageName}
  />
));

const Classes = () => {
  return (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <div style={gridContainerStyle}>{formattedClasses}</div>
      </div>
    </>
  );
};

export default Classes;
