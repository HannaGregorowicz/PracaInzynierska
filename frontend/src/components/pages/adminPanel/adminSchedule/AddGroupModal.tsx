import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { addGroup } from "../../../../utils/requests";
import { isAdmin } from "../../../../utils/jsonwebtoken";
import { useMediaQuery } from "react-responsive";

const hStyle: React.CSSProperties = {
  marginBottom: "20px"
};

const selectLabelStyle: React.CSSProperties = {
  marginRight: "10px"
};

const selectStyle: React.CSSProperties = {
  marginRight: "20px"
};

const flexContainerStyle: React.CSSProperties = {
  display: "flex",
  width: "80%",
  margin: "auto",
  alignContent: "space-between"
};

const smallFormStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};

const Button = styled.button`
  width: 40%;
  cursor: pointer;
  color: #ffffff;
  background-color: #3e0c6e;
  margin: 20px 0;
  font-size: 14pt;
  border-radius: 5px;
  padding: 5px;
  border-color: #3e0c6e;

  &:hover {
    opacity: 80%;
  }
`;

interface IProps {
  closeModal: () => void;
}

const AddGroupModal = (props: IProps) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("P0");
  const [instructor, setInstructor] = useState("");
  const [day, setDay] = useState("Poniedziałek");
  const [time, setTime] = useState("14:00");

  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const inputStyle: React.CSSProperties = {
    width: isDesktop ? "80%" : "100%",
    fontSize: "14pt",
    marginBottom: "10px"
  };

  const gridContainerStyle: React.CSSProperties = {
    display: "grid",
    width: "80%",
    margin: "auto",
    gridTemplateColumns: isDesktop ? "1fr 2fr" : "1fr",
    textAlign: isDesktop ? "left" : "center"
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleInstructorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInstructor(event.target.value);
  };

  const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLevel(event.target.value);
  };

  const handleDayChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value);
  };

  const handleTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTime(event.target.value);
  };

  const handleSubmit = async () => {
    if (isAdmin()) {
      if (name && instructor) {
        props.closeModal();
        const body = {
          name: name,
          instructor: instructor,
          day: day,
          time: time,
          level: level
        };
        const res = await addGroup(body);
        if (res) {
          if (res.status === 200) {
            toast.success(`Utworzono grupę: ${name} ${level} ${day} ${time}`);
          } else {
            toast.error("Coś poszło nie tak! Spróbuj jeszcze raz");
          }
        }
      } else {
        toast.error("Uzupełnij wszystkie pola!");
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className={isDesktop ? "" : "center"}>
      <h3 style={hStyle}>Dodawanie grupy</h3>
      <div style={gridContainerStyle}>
        <label>Nazwa zajęć</label>
        <input
          style={inputStyle}
          type="text"
          required={true}
          onChange={handleNameChange}
          placeholder="Wpisz nazwę zajęć"
        />

        <label>Instruktor</label>
        <input
          style={inputStyle}
          type="text"
          required={true}
          onChange={handleInstructorChange}
          placeholder="Wpisz instruktora"
        />
      </div>
      <div style={isDesktop ? flexContainerStyle : smallFormStyle}>
        <label style={selectLabelStyle}>Poziom:</label>
        <select name="level" style={selectStyle} onChange={handleLevelChange}>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="S">S</option>
          <option value="Z">Z</option>
        </select>

        <label style={selectLabelStyle}>Dzień:</label>
        <select name="day" style={selectStyle} onChange={handleDayChange}>
          <option value="Poniedziałek">Poniedziałek</option>
          <option value="Wtorek">Wtorek</option>
          <option value="Środa">Środa</option>
          <option value="Czwartek">Czwartek</option>
          <option value="Piątek">Piątek</option>
          <option value="Sobota">Sobota</option>
        </select>

        <label style={selectLabelStyle}>Godzina:</label>
        <select name="time" style={selectStyle} onChange={handleTimeChange}>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
        </select>
      </div>
      <Button onClick={handleSubmit}>Dodaj grupę</Button>
    </div>
  );
};

export default AddGroupModal;
