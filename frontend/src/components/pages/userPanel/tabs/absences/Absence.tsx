import React, { useState, useEffect } from "react";
import { IAbsence, IGroup } from "../../../../../data/dataTypes";
import { getSingleGroup } from "../../../../../data/getData";

interface IProps {
  absence: IAbsence;
  type: string;
}

const Absence = (props: IProps) => {
  const absence = props.absence;

  const divStyle: React.CSSProperties = {
    borderRadius: "3px",
    background: props.type === "Po terminie" ? "#f0a8a8" : "#bfd3f2",
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "10px",
    textTransform: "capitalize",
    margin: "5px 0"
  };

  const getDueDate = (absence: IAbsence) => {
    const date = new Date(absence.date);
    date.setDate(date.getDate() + 14);
    return date;
  };

  const [group, setGroup] = useState<IGroup | null>();

  const loadData = async () => {
    setGroup(await getSingleGroup(absence.groupId));
  };

  useEffect(() => {
    if (!group) {
      loadData();
    }
  });

  return group ? (
    <div style={divStyle}>
      <p>{absence.date.toString().substring(0, 10)}</p>
      <p>{group.name}</p>
      <p>{group.day}</p>
      <p>{group.time}</p>
      <p>{group.instructor}</p>
      <p> </p>
      <p>
        {props.type === "Do odrobienia"
          ? "Termin odróbki:"
          : props.type === "Odrobiona"
          ? ""
          : "Po terminie:"}
      </p>
      <p>
        {props.type !== "Odrobiona"
          ? getDueDate(absence)
              .toString()
              .substring(4, 15)
          : ""}
      </p>
    </div>
  ) : null;
};

export default Absence;
