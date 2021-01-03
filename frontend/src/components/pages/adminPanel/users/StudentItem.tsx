import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { IPerson } from "../../../../data/dataTypes";
import StudentDetails from "./StudentDetails";
import { useMediaQuery } from "react-responsive";

const divStyle: React.CSSProperties = {
  padding: "10px",
  background: "#e8f7fa",
  margin: "10px 0",
  borderRadius: "3px",
  display: "flex",
  justifyContent: "space-between"
};

const Button = styled.button`
  cursor: pointer;
  color: #3e0c6e;
  background-color: #ffffff;
  font-size: 12pt;
  border-radius: 5px;
  padding: 3px;
  border-color: #3e0c6e;

  &:hover {
    background: #f7e6ff;
  }
`;

interface IProps {
  user: IPerson;
}

const StudentItem = (props: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  const modalStyle: React.CSSProperties = {
    width: isMobile ? "80%" : isDesktop ? "40%" : "60%",
    height: "50%",
    margin: "auto"
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={divStyle}>
        <div>
          {props.user.firstName} {props.user.lastName}
        </div>
        <Button onClick={openModal}>Szczegóły</Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        style={{ content: modalStyle }}
        onRequestClose={closeModal}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        <StudentDetails user={props.user} close={closeModal} />
      </Modal>
    </>
  );
};

export default StudentItem;
