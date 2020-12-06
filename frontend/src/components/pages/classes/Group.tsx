import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import { shortDayName } from "../../../utils/dayParser";
import { getBackgroundColor } from "../../../utils/getGroupColor";
import SignToGroupModal from "../../common/SignToGroupModal";

const groupStyle: React.CSSProperties = {
  width: "100%",
  margin: "4px",
  borderRadius: "4px",
  padding: "3px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  cursor: "pointer"
};

const modalStyle: React.CSSProperties = {
  width: "40%",
  height: "30vh",
  margin: "auto",
  padding: "40px"
};

interface IProps {
  name: string;
  id: string;
  day: string;
  time: string;
  level: string;
  className?: string;
  style?: React.CSSProperties;
}

const Group = (props: IProps) => {
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
        style={
          props.style
            ? props.style
            : { ...groupStyle, background: getBackgroundColor(props.level) }
        }
        className={props.className + " center"}
        data-tip={!props.style ? "Zapisz się!" : null}
        onClick={openModal}
      >
        <p>{shortDayName(props.day)}</p>
        <p>{props.time}</p>
        <p>{props.level}</p>
      </div>

      <Modal
        isOpen={isModalOpen}
        style={{ content: modalStyle }}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <SignToGroupModal
          groupId={props.id}
          groupName={props.name}
          day={props.day}
          time={props.time}
          level={props.level}
          closeModal={closeModal}
        />
      </Modal>

      <ReactTooltip place="right" effect="solid" />
    </>
  );
};

export default Group;
