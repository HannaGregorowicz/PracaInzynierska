import React, { useState } from "react";
import Modal from "react-modal";
import { IGroup } from "../../data/dataTypes";
import { getBackgroundColor } from "../../utils/getGroupColor";
import SignToGroupModal from "./SignToGroupModal";
import ReactTooltip from "react-tooltip";

const gridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  backgroundImage:
    "linear-gradient(0deg,rgba(0,0,0,0.07) 0%,rgba(0,0,0,0.07) 100%)"
};

const modalStyle: React.CSSProperties = {
  width: "40%",
  height: "30vh",
  margin: "auto",
  padding: "40px"
};

interface IProps {
  group: IGroup;
  type: string;
}

const GroupItem = (props: IProps) => {
  const group = props.group;
  const instructorFirstName = () => {
    return group.instructor.split(" ")[0];
  };

  const itemStyle: React.CSSProperties = {
    height: "7vh",
    margin: "1vh",
    borderRadius: "3px",
    cursor: props.type !== "user" ? "pointer" : "unset"
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        style={{ ...itemStyle, background: getBackgroundColor(group.level) }}
        onClick={openModal}
        data-tip="Zapisz się!"
      >
        {group.name}
        <br />
        <div style={gridContainerStyle}>
          <div>{group.level}</div>
          <div>{instructorFirstName()}</div>
        </div>
      </div>

      {props.type !== "user" && (
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

      {props.type !== "user" && <ReactTooltip place="right" effect="solid" />}
    </>
  );
};

export default GroupItem;
