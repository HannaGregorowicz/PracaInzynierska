import React, { useState } from "react";
import Modal from "react-modal";
import { IPerson } from "../../../../data/dataTypes";
import StudentDetails from "./StudentDetails";
import { useMediaQuery } from "react-responsive";

const divStyle: React.CSSProperties = {
  padding: "10px",
  background: "#e8f7fa",
  margin: "10px 0",
  borderRadius: "3px"
};

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
    height: "70%",
    margin: "auto"
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={divStyle} onClick={openModal}>
      {props.user.firstName} {props.user.lastName}
      <Modal
        isOpen={isModalOpen}
        style={{ content: modalStyle }}
        onRequestClose={closeModal}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        <StudentDetails user={props.user} />
      </Modal>
    </div>
  );
};

export default StudentItem;
