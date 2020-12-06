import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { IGroup } from "../../../../../data/dataTypes";
import { isTokenValid } from "../../../../../utils/jsonwebtoken";
import { signOutFromGroup } from "../../../../../utils/requests";

const divStyle: React.CSSProperties = {
  textTransform: "capitalize",
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  background: "#e7defa",
  padding: "10px",
  margin: "5px 0",
  borderRadius: "3px"
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
  reloadData: () => Promise<void>;
}

// TODO: Handle these buttons

const Group = (props: IProps) => {
  const group = props.group;

  const handleSignOut = async () => {
    if (isTokenValid()) {
      const res = await signOutFromGroup(group.id);
      if (res) {
        if (res.status === 400) {
          toast.error("Coś poszło nie tak!");
        } else if (res.status === 200) {
          await props.reloadData();
          toast.success(
            `Wypisano z grupy: ${[
              group.name,
              group.level,
              group.day,
              group.time
            ].join(" ")}`
          );
        }
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div style={divStyle}>
      <p>{group.name}</p>
      <p>{group.level}</p>
      <p>{group.day}</p>
      <p>{group.time}</p>
      <p>{group.instructor}</p>
      {props.type === "regular" && <Button>Zgłoś nieobecność</Button>}
      {props.type === "regular" && (
        <Button onClick={handleSignOut}>Wypisz się</Button>
      )}
      {props.type === "oneTime" && <p />}
      {props.type === "oneTime" && <Button>Zrezygnuj</Button>}
    </div>
  );
};

export default Group;
