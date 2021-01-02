import React from "react";
import { Slide } from "react-slideshow-image";
import { IInstructor } from "../../../data/dataTypes";
import Instructor from "./Instructor";

const slideImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
];

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
      <Slide easing="ease">
        {/* <div className="each-slide"> */}
        {/* <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div> */}
        {/* <img src={slideImages[0]} alt="img" /> */}

        {instructors.map(makeInstructor)}
      </Slide>
    </div>
  );
};

export default Slideshow;
