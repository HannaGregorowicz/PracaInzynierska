import React from "react";
import { IGroup } from "../../data/dataTypes";
import GroupItem from "./GroupItem";

interface IProps {
  groups: IGroup[];
  type?: string;
}

const TableCell = (props: IProps) => {
  const tdStyle: React.CSSProperties = {
    whiteSpace: "pre",
    border: "1px solid black",
    height: props.type === "user" ? "8vh" : "16vh",
    textTransform: "capitalize",
    width: "15%",
    verticalAlign: "top"
  };

  const groups = props.groups;

  const makeGroupItem = (group: IGroup) => {
    return <GroupItem group={group} key={group.id} />;
  };

  return <td style={tdStyle}>{groups.map(makeGroupItem)}</td>;
};

export default TableCell;
