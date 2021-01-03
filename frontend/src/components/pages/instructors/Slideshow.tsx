import React from "react";
import { Slide } from "react-slideshow-image";
import { IInstructor } from "../../../data/dataTypes";
import Instructor from "./Instructor";

const containerStyle: React.CSSProperties = {
  width: "80%",
  margin: "30px auto"
};

interface IProps {
  instructors: IInstructor[];
}

const Slideshow = (props: IProps) => {
  const instructors = props.instructors;

  const makeInstructor = (instructor: IInstructor) => {
    return <Instructor instructor={instructor} key={instructor.id} />;
  };

  return (
    <div style={containerStyle}>
      <Slide easing="ease">{instructors.map(makeInstructor)}</Slide>
    </div>
  );
};

export default Slideshow;
