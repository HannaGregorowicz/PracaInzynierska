import React from "react";

const tdStyle: React.CSSProperties = {
  whiteSpace: "pre",
  border: "1px solid black"
};

const TableCell = (props: any) => {
  const getText = () => {
    let text = "";
    if (props.groups.length) {
      for (const group of props.groups) {
        text = text.concat(`${group.name}\n`);
      }
    }
    return text;
  };

  return <td style={tdStyle}>{getText()}</td>;
};

export default TableCell;
