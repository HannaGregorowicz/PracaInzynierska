import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ScheduleTable from "../../../common/ScheduleTable";
import { IGroup } from "../../../../data/dataTypes";
import { getGroups } from "../../../../data/getData";
import AddGroupModal from "./AddGroupModal";
import { useMediaQuery } from "react-responsive";
import SmallSchedulePanel from "../../../common/SmallSchedulePanel";

const containerStyle: React.CSSProperties = {
  width: "95%",
  margin: "auto"
};

const Button = styled.button`
  width: 30%;
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

const modalStyle: React.CSSProperties = {
  width: "40%",
  height: "35vh",
  margin: "auto",
  padding: "40px",
  whiteSpace: "pre",
  color: "#3e0c6e",
  textAlign: "center"
};

const smallModalStyle: React.CSSProperties = {
  width: "60%",
  height: "60vh",
  margin: "auto",
  padding: "40px"
};

const AdminSchedule = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  const [groups, setGroups] = useState<IGroup[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loadData = async () => {
    setGroups(await getGroups());
  };

  useEffect(() => {
    loadData();
  }, [groups]);

  return (
    <>
      <div style={containerStyle}>
        <h3>Grafik administratora</h3>
        <Button
          className="center"
          onClick={openModal}
          style={isMobile ? { width: "100%" } : {}}
        >
          Dodaj nową grupę!
        </Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        style={{ content: isDesktop ? modalStyle : smallModalStyle }}
        onRequestClose={closeModal}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        <AddGroupModal closeModal={closeModal} />
      </Modal>

      {isDesktop ? (
        <ScheduleTable groups={groups} type="admin" />
      ) : (
        <SmallSchedulePanel groups={groups} type="admin" />
      )}
    </>
  );
};

export default AdminSchedule;
