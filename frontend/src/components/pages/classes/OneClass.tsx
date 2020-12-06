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

const headerGroupStyle: React.CSSProperties = {
  width: "100%",
  background: "#6b1275",
  margin: "4px",
  borderRadius: "4px",
  padding: "3px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  color: "#ffffff"
};

// TODO: hover z przyciskiem "zapisz sie!"
// Pomyslec nad detail view z obszerniejszym opisem i opiniami na temat
// konkretnych grup od kursantow

interface IProps {
  groups: any;
  name: string;
  imageName: string;
  description: string;
  className: string;
}

const OneClass = (props: IProps) => {
  const image = require(`../../../images/classes/${props.imageName}`);
  const formattedGroups = props.groups.map((group: any) => (
    <Group
      id={group.id}
      name={props.name}
      day={group.day}
      time={group.time}
      level={group.level}
      key={group.id}
    />
  ));

  return (
    <div className="gridItem">
      <img src={image} alt={props.imageName} style={imageStyle}></img>
      <h2 className="center">{props.name}</h2>
      <p style={textStyle}>{props.description}</p>
      {props.groups.length ? (
        <Group
          id="id"
          name=""
          style={headerGroupStyle}
          day="dzień"
          time="godzina"
          level="poziom"
          className="lighter"
        />
      ) : null}
      {formattedGroups}
    </div>
  );
};

export default OneClass;
