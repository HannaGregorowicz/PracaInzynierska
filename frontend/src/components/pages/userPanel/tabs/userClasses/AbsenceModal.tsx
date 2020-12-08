import React, { useState } from "react";
import Modal from "react-modal";
import { reportAbsence } from "../../../../../utils/requests";
import { getNextAbsenceDates } from "../../../../../utils/getNextAbsenceDates";
import { IGroup } from "../../../../../data/dataTypes";
import { isTokenValid } from "../../../../../utils/jsonwebtoken";
import { toast } from "react-toastify";

const modalStyle: React.CSSProperties = {
  width: "40%",
  height: "35vh",
  margin: "auto",
  padding: "40px",
  whiteSpace: "pre",
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

interface IProps {
  closeModal: () => void;
  isModalOpen: boolean;
  group: IGroup;
}

type dateObject = {
  date: string;
  index: number;
};

const AbsenceModal = (props: IProps) => {
  const group = props.group;
  const [checkedOption, setCheckedOption] = useState(0);

  const dates = getNextAbsenceDates(group.day);
  const getInputs = () => {
    const dateObjects: dateObject[] = [];
    for (const date of dates) {
      dateObjects.push({ date: date, index: dates.indexOf(date) });
    }
    return dateObjects.map(date =>
      makeInput(date.date, date.date.substring(4, 15) + "\n", date.index)
    );
  };

  const handleChange = (index: number) => {
    setCheckedOption(index);
  };

  const makeInput = (date: string, displayDate: string, index: number) => {
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
      <button onClick={handleAbsence}>Zgłoś nieobecność</button>
    </Modal>
  );
};

export default AbsenceModal;
