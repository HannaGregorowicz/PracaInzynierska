import React from "react";
import { IGroup } from "../../../data/dataTypes";

const tdStyle: React.CSSProperties = {
  whiteSpace: "pre",
  border: "1px solid black",
  height: "16vh",
  textTransform: "capitalize",
  width: "15%"
};

interface IProps {
  groups: IGroup[];
}

const TableCell = (props: IProps) => {
  const groups = props.groups;

  const getText = () => {
    let text = "";
    if (groups.length) {
      for (const group of groups) {
        text = text.concat(`${group.name}\n`);
      }
    }
    return text;
  };

  return <td style={tdStyle}>{getText()}</td>;
};

export default TableCell;
