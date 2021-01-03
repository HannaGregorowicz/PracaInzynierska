import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { IPerson } from "../../../../data/dataTypes";
import { removeUserAdminRights } from "../../../../utils/requests";
import { isHeadAdmin } from "../../../../utils/jsonwebtoken";

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

const divStyle: React.CSSProperties = {
  padding: "10px",
  background: "#feffdb",
  margin: "10px 0",
  borderRadius: "3px",
  display: "flex",
  justifyContent: "space-between"
};

interface IProps {
  user: IPerson;
}

const AdminItem = (props: IProps) => {
  const user = props.user;

  const deleteAdminRights = async () => {
    const res = await removeUserAdminRights(user.id);
    if (res) {
      if (res.status === 200) {
        toast.success(
          `Usunięto prawa administratora użytkownikowi ${user.firstName +
            " " +
            user.lastName}`
        );
      } else {
        toast.error("Coś poszło nie tak! Spróbuj jeszcze raz");
      }
    }
  };

  return (
    <div style={divStyle}>
      <div>
        {user.firstName} {user.lastName}
      </div>
      {isHeadAdmin() && (
        <Button onClick={deleteAdminRights}>Usuń prawa administratora</Button>
      )}
    </div>
  );
};

export default AdminItem;
