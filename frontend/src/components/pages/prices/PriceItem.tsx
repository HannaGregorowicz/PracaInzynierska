import React from "react";

const itemStyle: React.CSSProperties = {
  height: "15vh",
  backgroundColor: "#6b1275",
  color: "#ffffff",
  borderRadius: "10px",
  padding: "10px",
  fontSize: "15pt",
  border: "solid 4px #3e0c6e"
};

const flexContainerStyle: React.CSSProperties = {
  height: "65%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

const moreInfoStyle: React.CSSProperties = {
  fontSize: "10pt",
  position: "relative",
  bottom: "-10%"
};

interface IProps {
  name: string;
  price: string;
  info?: string;
}

const PriceItem = (props: IProps) => {
  return (
    <div className="gridItem center" style={itemStyle}>
      <div style={flexContainerStyle}>
        <div>{props.name}</div>
        <div>{props.price}</div>
      </div>

      {props.info ? <div style={moreInfoStyle}>{props.info}</div> : null}
    </div>
  );
};

export default PriceItem;
