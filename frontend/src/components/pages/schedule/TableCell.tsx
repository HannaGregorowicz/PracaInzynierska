import React from "react";
import { IGroup } from "../../../data/dataTypes";
import GroupItem from "./GroupItem";

const tdStyle: React.CSSProperties = {
  whiteSpace: "pre",
  border: "1px solid black",
  height: "16vh",
  textTransform: "capitalize",
  width: "15%",
  verticalAlign: "top"
};

interface IProps {
  groups: IGroup[];
}

const TableCell = (props: IProps) => {
  const groups = props.groups;

  const makeGroupItem = (group: IGroup) => {
    return <GroupItem group={group} />;
  };

  return <td style={tdStyle}>{groups.map(makeGroupItem)}</td>;
};

export default TableCell;
