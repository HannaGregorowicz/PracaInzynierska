import React, { useState, useEffect } from "react";
import { getUserAbsences } from "../../../../../data/getData";
import { IAbsence } from "../../../../../data/dataTypes";
import Absence from "./Absence";

const pStyle: React.CSSProperties = {
  fontSize: "16pt",
  color: "#3e0c6e",
  borderBottom: "2px solid #3e0c6e",
  width: "40%",
  margin: "25px 0 10px 0"
};

const Absences = () => {
  const [absences, setAbsences] = useState<IAbsence[]>([]);

  const loadData = async () => {
    let abs = await getUserAbsences();
    abs = abs.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    setAbsences(abs);
  };

  useEffect(() => {
    if (!absences.length) {
      loadData();
    }
  });

  const getDueDate = (absence: IAbsence) => {
    const date = new Date(absence.date);
    date.setDate(date.getDate() + 14);
    return date;
  };

  const isAfterDueDate = (absence: IAbsence) => {
    const now = new Date();
    return now > getDueDate(absence);
  };

  const makeAbsence = (absence: IAbsence, type: string) => {
    return (
      <Absence key={absence.date.toString()} absence={absence} type={type} />
    );
  };

  return (
    <>
      <h3>Nieobecności</h3>
      <p style={pStyle}>Do odrobienia</p>
      {absences
        .filter(absence => absence.status === "Do odrobienia")
        .filter(absence => !isAfterDueDate(absence))
        .map(abs => makeAbsence(abs, "Do odrobienia"))}

      <p style={pStyle}>Po terminie</p>
      {absences
        .filter(absence => absence.status === "Do odrobienia")
        .filter(absence => isAfterDueDate(absence))
        .map(abs => makeAbsence(abs, "Po terminie"))}

      <p style={pStyle}>Odrobione</p>
      {absences
        .filter(absence => absence.status === "Odrobiona")
        .map(abs => makeAbsence(abs, "Odrobiona"))}
    </>
  );
};

export default Absences;
