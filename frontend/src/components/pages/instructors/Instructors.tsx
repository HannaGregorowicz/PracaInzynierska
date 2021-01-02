import React, { useState, useEffect } from "react";
import { IInstructor } from "../../../data/dataTypes";
import { getInstructors } from "../../../data/getData";
import Slideshow from "./Slideshow";

const Instructors = () => {
  const [instructors, setInstructors] = useState<IInstructor[]>([]);

  const loadData = async () => {
    setInstructors(await getInstructors());
  };

  useEffect(() => {
    if (!instructors.length) {
      loadData();
      console.log(instructors);
    }
  });

  return (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Instruktorzy</h2>
        <div>
          {instructors.length ? (
            <Slideshow instructors={instructors} />
          ) : (
            <h3>Nie ma instruktorów do wyświetlenia.</h3>
          )}
        </div>
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Instructors;
