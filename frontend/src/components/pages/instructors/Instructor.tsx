import React from "react";
import { useMediaQuery } from "react-responsive";
import { IInstructor } from "../../../data/dataTypes";

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "70vh",
  objectFit: "cover"
};

const gridTemplateStyle: React.CSSProperties = {
  display: "grid",
  margin: "auto"
};

const gridContainerStyle: React.CSSProperties = {
  ...gridTemplateStyle,
  gridTemplateColumns: "3fr 2fr",
  gap: "5vw"
};

const smallGridStyle: React.CSSProperties = {
  ...gridTemplateStyle,
  gridTemplateColumns: "1fr"
};

const flexContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "left"
};

const bigFlexStyle: React.CSSProperties = {
  ...flexContainerStyle,
  width: "100%",
  height: "100%"
};

const smallFlexStyle: React.CSSProperties = {
  width: "90%",
  margin: "20px auto"
};

const nameStyle: React.CSSProperties = {
  fontSize: "18pt",
  fontWeight: "bolder",
  color: "#3e0c6e"
};

interface IProps {
  instructor: IInstructor;
}

const Instructor = (props: IProps) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const instructor = props.instructor;
  const image = require(`../../../images/instructors/${instructor.imageName}`);
  return (
    <div className="each-slide">
      <div style={isDesktop ? gridContainerStyle : smallGridStyle}>
        <img src={image} alt={instructor.imageName} style={imageStyle} />
        <div style={isDesktop ? bigFlexStyle : smallFlexStyle}>
          <div style={nameStyle}>{instructor.name}</div>
          <div>{instructor.description}</div>
          <div>
            {" "}
            Style taneczne:
            <ul>
              {instructor.danceStyles.map((style, index) => (
                <li key={index}>{style}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
