import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { isTokenValid } from "../../utils/jsonwebtoken";
import { signToGroup, signToGroupOnce } from "../../utils/requests";
import { useMediaQuery } from "react-responsive";

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
  groupName: string;
  groupId: string;
  day: string;
  time: string;
  level: string;
  closeModal: () => void;
}

const SignToGroupModal = (props: IProps) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const buttonContainerStyle: React.CSSProperties = {
    width: isDesktop ? "50%" : "80%",
    margin: "auto"
  };

  const handleOneTimeSignIn = async () => {
    props.closeModal();
    if (isTokenValid()) {
      const res = await signToGroupOnce(props.groupId);
      if (res) {
        if (res.status === 201) {
          toast.success(
            `Zapisano jednorazowo do grupy: ${[
              props.groupName,
              props.level,
              props.day,
              props.time
            ].join(" ")}`
          );
        } else if (res.status === 409) {
          toast.error("Już należysz do tej grupy!");
        } else if (res.status === 410) {
          toast.error("Już jesteś jednorazowo w tej grupie!");
        } else {
          toast.error("Coś poszło nie tak, spróbuj jeszcze raz!");
        }
      }
    } else {
      window.location.href = "/login";
    }
  };

  const handleRegularSignIn = async () => {
    props.closeModal();
    if (isTokenValid()) {
      const res = await signToGroup(props.groupId);
      if (res) {
        if (res.status === 201) {
          toast.success(
            `Zapisano do grupy: ${[
              props.groupName,
              props.level,
              props.day,
              props.time
            ].join(" ")}`
          );
        } else if (res.status === 409) {
          toast.error("Już należysz do tej grupy!");
        } else {
          toast.error("Coś poszło nie tak, spróbuj jeszcze raz!");
        }
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="center">
      <div style={headerStyle}>
        <h2>
          {props.groupName.toUpperCase()} {props.level}
        </h2>
        <h3>
          {props.day} {props.time}
        </h3>
      </div>
      <div style={buttonContainerStyle}>
        <Button onClick={handleRegularSignIn}>Zapisz się na stałe</Button>
        <br />
        <Button onClick={handleOneTimeSignIn}>Zapisz się jednorazowo</Button>
      </div>
    </div>
  );
};

export default SignToGroupModal;
