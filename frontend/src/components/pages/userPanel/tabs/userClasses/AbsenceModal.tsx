import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { reportAbsence } from "../../../../../utils/requests";
import { getNextAbsenceDates } from "../../../../../utils/getNextAbsenceDates";
import { IGroup, IAbsence } from "../../../../../data/dataTypes";
import { isTokenValid } from "../../../../../utils/jsonwebtoken";
import { toast } from "react-toastify";
import { getUserAbsences } from "../../../../../data/getData";
import styled from "styled-components";

const modalStyle: React.CSSProperties = {
  width: "40%",
  height: "35vh",
  margin: "auto",
  padding: "40px",
  whiteSpace: "pre",
  color: "#3e0c6e",
  textAlign: "center"
};

const inputStyle: React.CSSProperties = {
  height: "12pt",
  width: "12pt",
  margin: "10px"
};

const labelStyle: React.CSSProperties = {
  fontSize: "14pt"
};

const Button = styled.button`
  border-radius: 3px;
  font-size: 14pt;
  background: #3e0c6e;
  color: #ffffff;
  padding: 5px 15px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    opacity: 70%;
  }
`;

interface IProps {
  closeModal: () => void;
  isModalOpen: boolean;
  group: IGroup;
}

type dateObject = {
  date: string;
  index: number;
  isDisabled: boolean;
};

const AbsenceModal = (props: IProps) => {
  const group = props.group;
  const [checkedOption, setCheckedOption] = useState(0);
  const [absences, setAbsences] = useState<IAbsence[]>([]);
  const dates = getNextAbsenceDates(group.day);

  const loadData = async () => {
    let abs = await getUserAbsences(localStorage.getItem("personId")!);
    setAbsences(abs);
  };

  useEffect(() => {
    if (!absences.length) {
      loadData();
    }
  }, [absences]);

  const checkIfDateIsDisabled = (date: string) => {
    return absences.length
      ? absences.some(
          abs =>
            new Date(abs.date).getDate() === new Date(date).getDate() &&
            new Date(abs.date).getMonth() === new Date(date).getMonth() &&
            new Date(abs.date).getFullYear() === new Date(date).getFullYear()
        )
      : false;
  };

  const getInputs = () => {
    const dateObjects: dateObject[] = [];
    for (const date of dates) {
      dateObjects.push({
        date: date,
        index: dates.indexOf(date),
        isDisabled: checkIfDateIsDisabled(date)
      });
    }
    return dateObjects.map(date =>
      makeInput(
        date.date,
        date.date.substring(4, 15) + "\n",
        date.index,
        date.isDisabled
      )
    );
  };

  const handleChange = (index: number) => {
    setCheckedOption(index);
  };

  const makeInput = (
    date: string,
    displayDate: string,
    index: number,
    isDisabled: boolean
  ) => {
    return (
      <div key={date}>
        <input
          style={inputStyle}
          type="radio"
          id={date}
          name={date}
          value={date}
          checked={checkedOption === index}
          onChange={() => handleChange(index)}
          disabled={isDisabled}
        />
        <label style={labelStyle}>{displayDate}</label>
      </div>
    );
  };

  const handleAbsence = async () => {
    if (isTokenValid()) {
      props.closeModal();
      setCheckedOption(0);
      const body = {
        date: new Date(dates[checkedOption]),
        groupId: group.id
      };
      const res = await reportAbsence(body);
      if (res) {
        if (res.status === 200) {
          toast.success("Nieobecność została zgłoszona.");
        } else {
          toast.error("Nie udało się zgłosić nieobecności!");
        }
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <Modal
      isOpen={props.isModalOpen}
      style={{ content: modalStyle }}
      onRequestClose={props.closeModal}
      contentLabel="Modal"
      ariaHideApp={false}
    >
      <h2>Zgłoś nieobecność</h2>
      <h3>
        {group.name.toUpperCase()} {group.day} {group.time} {group.instructor}
      </h3>
      {getInputs()}
      <Button onClick={handleAbsence}>Zgłoś nieobecność</Button>
    </Modal>
  );
};

export default AbsenceModal;
