import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { isAdmin } from "../../utils/jsonwebtoken";
import { useMediaQuery } from "react-responsive";
import { deleteGroup } from "../../utils/requests";

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  color: #ffffff;
  background-color: #3e0c6e;
  margin-bottom: 10px;
  font-size: 14pt;
  border-radius: 5px;
  padding: 5px;
  border-color: #3e0c6e;

  &:hover {
    opacity: 80%;
  }
`;

const headerStyle: React.CSSProperties = {
  marginBottom: "30px",
  color: "#3e0c6e"
};

interface IProps {
  groupId: string;
  closeModal: () => void;
  groupName: string;
  time: string;
  day: string;
  level: string;
}

const DeleteGroupModal = (props: IProps) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const buttonContainerStyle: React.CSSProperties = {
    width: isDesktop ? "50%" : "80%",
    margin: "auto"
  };

  const handleDelete = async () => {
    props.closeModal();
    if (isAdmin()) {
      const res = await deleteGroup(props.groupId, props.groupName);
      if (res) {
        if (res.status === 200) {
          toast.success("Usunięto grupę");
        } else {
          toast.error("Coś poszło nie tak, spróbuj ponownie!");
        }
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="center">
      <div style={headerStyle}>
        <h2> Czy na pewno chcesz usunąć tę grupę?</h2>
        <h3>
          {props.groupName.toUpperCase()} {props.level} {props.day} {props.time}
        </h3>
      </div>
      <div style={buttonContainerStyle}>
        <Button onClick={handleDelete}>Usuń grupę</Button>
        <Button onClick={props.closeModal}>Anuluj</Button>
      </div>
    </div>
  );
};

export default DeleteGroupModal;
