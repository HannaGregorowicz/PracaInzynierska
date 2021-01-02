import React from "react";

const itemStyle: React.CSSProperties = {
  backgroundColor: "#d8bce8",
  color: "#3e0c6e",
  borderRadius: "5px",
  fontSize: "15pt"
};

const nameStyle: React.CSSProperties = {
  ...itemStyle,
  backgroundColor: "#f5e3ff",
  padding: "10px"
};

const priceStyle: React.CSSProperties = {
  ...itemStyle,
  padding: "10px"
};

const moreInfoStyle: React.CSSProperties = {
  ...itemStyle,
  fontSize: "10pt",
  padding: "10px"
};

interface IProps {
  name: string;
  price: string;
  info?: string;
}

const PriceItem = (props: IProps) => {
  return (
    <div className="gridItem center" style={itemStyle}>
      <div style={nameStyle}>{props.name}</div>
      <div style={priceStyle}>{props.price}</div>
      {props.info && <div style={moreInfoStyle}>{props.info}</div>}
    </div>
  );
};

export default PriceItem;
