import React from "react";
import { IPerson } from "../../../../data/dataTypes";

interface IProps {
  user: IPerson;
}

const AdminItem = (props: IProps) => {
  return (
    <div>
      {props.user.firstName} {props.user.lastName}{" "}
    </div>
  );
};

export default AdminItem;
