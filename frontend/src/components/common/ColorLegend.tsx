import React from "react";
import { getBackgroundColor } from "../../utils/getGroupColor";

const wrapperStyle: React.CSSProperties = {
  width: "95%",
  margin: "3vh auto",
  textAlign: "center"
};

const gridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr"
};

const itemStyle: React.CSSProperties = {
  borderRadius: "4px",
  margin: "5px",
  padding: "10px 0"
};

const ColorLegend = () => {
  return (
    <div style={wrapperStyle}>
      <div style={gridContainerStyle}>
        <div style={{ ...itemStyle, background: getBackgroundColor("P0") }}>
          P0 - do 1 miesiąca
        </div>
        <div style={{ ...itemStyle, background: getBackgroundColor("P1") }}>
          P1 - od 1 do 6 miesięcy
        </div>
        <div style={{ ...itemStyle, background: getBackgroundColor("P2") }}>
          P2 - od 6 do 12 miesięcy
        </div>
        <div style={{ ...itemStyle, background: getBackgroundColor("S") }}>
          S - od 1 roku do 2 lat
        </div>
        <div style={{ ...itemStyle, background: getBackgroundColor("Z") }}>
          Z - powyżej 2 lat
        </div>
        <div style={{ ...itemStyle, background: getBackgroundColor("Open") }}>
          Open - dla wszystkich
        </div>
      </div>
    </div>
  );
};

export default ColorLegend;
