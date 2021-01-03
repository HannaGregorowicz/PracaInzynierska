import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { IAbsence, IPerson, IGroup } from "../../../../data/dataTypes";
import { getSingleGroup } from "../../../../data/getData";
import { makeAbsenceDone } from "../../../../utils/requests";

const flexContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: "50%",
  margin: "auto",
  borderRadius: "4px",
  fontSize: "14pt"
};

export const Button = styled.button`
  cursor: pointer;
  color: #ffffff;
  background-color: #3e0c6e;
  font-size: 12pt;
  border-radius: 5px;
  padding: 3px;
  border-color: #3e0c6e;
  width: 50%;
  margin-bottom: 10px;

  &:hover {
    opacity: 80%;
  }
`;

interface IProps {
  absence: IAbsence;
  user: IPerson;
  close: () => void;
}

const Absence = (props: IProps) => {
  const [group, setGroup] = useState<IGroup | null>(null);
  const absence = props.absence;

  const loadData = async () => {
    setGroup(await getSingleGroup(absence.groupId));
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  const handleAbsence = async () => {
    props.close();
    const res = await makeAbsenceDone(props.user.id, {
      date: absence.date,
      groupId: absence.groupId
    });
    if (res) {
      if (res.status === 200) {
        toast.success("Nieobecność została odrobiona");
      } else {
        toast.error("Coś poszło nie tak! Spróbuj jeszcze raz");
      }
    }
  };

  return (
    <div>
      <div style={flexContainerStyle}>
        {group && <p>{group.name.toUpperCase()}</p>}
        <p>{absence.date.toString().substring(0, 10)}</p>
      </div>

      <Button onClick={handleAbsence}>Oznacz jako odrobione</Button>
    </div>
  );
};

export default Absence;
