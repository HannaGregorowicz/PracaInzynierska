import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { IGroup } from "../../data/dataTypes";
import { getBackgroundColor } from "../../utils/getGroupColor";
import DeleteGroupModal from "./DeleteGroupModal";
import SignToGroupModal from "./SignToGroupModal";
import { useMediaQuery } from "react-responsive";

const divStyle: React.CSSProperties = {
  width: "95%",
  margin: "10px auto",
  padding: "10px",
  textTransform: "capitalize"
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 2fr 1fr 2fr 2fr"
};

const smallGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 2fr 1fr 2fr"
};

const modalStyle: React.CSSProperties = {
  width: "60%",
  height: "40vh",
  margin: "auto",
  padding: "40px"
};

const Button = styled.button`
  background: #ffffff;
  padding: 3px;
  border-radius: 3px;
  font-size: 12pt;
  margin: 0 5px;
  border: 1px solid #3e0c6e;
  cursor: pointer;

  &:hover {
    background: #eec9f0;
  }
`;

interface IProps {
  group: IGroup;
  type: string;
}

const SmallGroupItem = (props: IProps) => {
  const group = props.group;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ ...divStyle, background: getBackgroundColor(group.level) }}>
      {!isMobile && (
        <div style={gridStyle}>
          <p>{group.time}</p>
          <p>{group.name}</p>
          <p>{group.level}</p>
          <p>{group.instructor}</p>
          {props.type === "main" && (
            <Button onClick={openModal}>Zapisz się!</Button>
          )}
          {props.type === "admin" && (
            <Button onClick={openModal}>Usuń grupę!</Button>
          )}
        </div>
      )}

      {isMobile && (
        <div>
          <div style={smallGridStyle}>
            <p>{group.time}</p>
            <p>{group.name}</p>
            <p>{group.level}</p>
            <p>{group.instructor.split(" ")[0]}</p>
          </div>
          <br />
          {props.type === "main" && (
            <Button onClick={openModal} style={{ width: "100%" }}>
              Zapisz się!
            </Button>
          )}
          {props.type === "admin" && (
            <Button onClick={openModal} style={{ width: "100%" }}>
              Usuń grupę!
            </Button>
          )}
        </div>
      )}

      {props.type === "main" && (
        <Modal
          isOpen={isModalOpen}
          style={{ content: modalStyle }}
          onRequestClose={closeModal}
          contentLabel="Modal"
          ariaHideApp={false}
        >
          <SignToGroupModal
            groupId={props.group.id}
            groupName={props.group.name}
            day={props.group.day}
            time={props.group.time}
            level={props.group.level}
            closeModal={closeModal}
          />
        </Modal>
      )}

      {props.type === "admin" && (
        <Modal
          isOpen={isModalOpen}
          style={{ content: modalStyle }}
          onRequestClose={closeModal}
          contentLabel="Modal"
          ariaHideApp={false}
        >
          <DeleteGroupModal
            groupId={props.group.id}
            closeModal={closeModal}
            groupName={props.group.name}
            day={props.group.day}
            time={props.group.time}
            level={props.group.level}
          />
        </Modal>
      )}
    </div>
  );
};

export default SmallGroupItem;
