import React from "react";
import { useMediaQuery } from "react-responsive";
import OneClass from "./OneClass";
import { classes } from "./temporaryClasses";

const gridDesktopStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr"
};

const gridTabletStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const gridMobileStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr"
};

const Classes = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  const formattedClasses = classes.map(oneClass => (
    <OneClass
      className="gridItem"
      name={oneClass.name}
      description={oneClass.description}
      groups={oneClass.groups}
      imageName={oneClass.imageName}
    />
  ));

  return (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Zajęcia w naszej szkole</h2>
        <div
          style={
            isDesktop
              ? gridDesktopStyle
              : isMobile
              ? gridMobileStyle
              : gridTabletStyle
          }
        >
          {formattedClasses}
        </div>
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Classes;
