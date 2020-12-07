import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

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
  type: string;
  text: string;
  signedOut: boolean;
  handleSignOut: (type: string) => Promise<void>;
}

const SignOutButton = (props: IProps) => {
  return (
    <Button onClick={() => props.handleSignOut(props.type)}>
      {props.signedOut && (
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="fasIcon"
          spin
          color="#3e0c6e"
        />
      )}
      {props.text}
    </Button>
  );
};

export default SignOutButton;
