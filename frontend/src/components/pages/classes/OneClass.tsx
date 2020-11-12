import React from "react";
import Group from "./Group";

const textStyle: React.CSSProperties = {
  fontSize: "12pt"
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "20vh",
  objectFit: "cover"
};

// TODO: hover z przyciskiem "zapisz sie!"
// Pomyslec nad detail view z obszerniejszym opisem i opiniami na temat
// konkretnych grup od kursantow

const OneClass = (props: any) => {
  const image = require(`../../../images/classes/${props.imageName}`);
  const formattedGroups = props.groups.map((group: any) => (
    <Group name={group.day} time={group.time} key={group.id} />
  ));

  return (
    <div className="gridItem">
      <img src={image} alt={props.imageName} style={imageStyle}></img>
      <h2 className="center">{props.name}</h2>
      <p style={textStyle}>{props.description}</p>
      {formattedGroups}
    </div>
  );
};

export default OneClass;
