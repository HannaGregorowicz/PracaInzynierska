import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { IPerson, IAbsence } from "../../../../data/dataTypes";
import { getUserAbsences } from "../../../../data/getData";
import Absence from "./Absence";
import { giveUserAdminRights } from "../../../../utils/requests";
import { isHeadAdmin } from "../../../../utils/jsonwebtoken";

const hStyle: React.CSSProperties = {
  color: "#3e0c6e",
  margin: "20px 0"
};

const divStyle: React.CSSProperties = {
  textAlign: "center"
};

const absenceContainerStyle: React.CSSProperties = {
  marginBottom: "20px"
};

export const Button = styled.button`
  cursor: pointer;
  color: #ffffff;
  background-color: #3e0c6e;
  font-size: 14pt;
  border-radius: 5px;
  padding: 5px;
  border-color: #3e0c6e;

  &:hover {
    opacity: 80%;
  }
`;

interface IProps {
  user: IPerson;
  close: () => void;
}

const StudentDetails = (props: IProps) => {
  const [absences, setAbsences] = useState<IAbsence[]>([]);
  const user = props.user;

  const getAbsencesToMakeUp = async () => {
    const absences = await getUserAbsences(user.id);
    return absences.filter(absence => absence.status === "Do odrobienia");
  };

  const loadData = async () => {
    setAbsences(await getAbsencesToMakeUp());
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [absences]);

  const giveAdminRights = async () => {
    props.close();
    const res = await giveUserAdminRights(user.id);
    if (res) {
      if (res.status === 200) {
        toast.success(
          `Nadano prawa administratora użytkownikowi ${user.firstName +
            " " +
            user.lastName}`
        );
      } else {
        toast.error("Coś poszło nie tak! Spróbuj jeszcze raz");
      }
    }
  };

  return (
    <div style={divStyle}>
      <h2 style={hStyle}>{user.firstName + " " + user.lastName}</h2>
      {isHeadAdmin() && (
        <Button onClick={giveAdminRights}>Nadaj prawa administratora</Button>
      )}
      <h3 style={hStyle}>Nieobecności użytkownika do odrobienia:</h3>
      <div style={absenceContainerStyle}>
        {absences.map(absence => (
          <Absence
            key={absence.date.toString()}
            absence={absence}
            user={user}
            close={props.close}
          />
        ))}
      </div>
      <Button onClick={props.close}>Zamknij</Button>
    </div>
  );
};

export default StudentDetails;
