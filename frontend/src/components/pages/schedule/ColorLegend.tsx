import React from "react";

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
  const yellow = "#FDF6DC";
  const lightOrange = "#FDEACA";
  const orange = "#FFD4B8";
  const green = "#D2EBD8";
  const blue = "#ACC5E8";
  const pink = "#F9E0E3";

  return (
    <div style={wrapperStyle}>
      <div style={gridContainerStyle}>
        <div style={{ ...itemStyle, background: yellow }}>
          P0 - do 1 miesiąca
        </div>
        <div style={{ ...itemStyle, background: lightOrange }}>
          P1 - od 1 do 6 miesięcy
        </div>
        <div style={{ ...itemStyle, background: orange }}>
          P2 - od 6 do 12 miesięcy
        </div>
        <div style={{ ...itemStyle, background: green }}>
          S - od 1 roku do 2 lat
        </div>
        <div style={{ ...itemStyle, background: blue }}>Z - powyżej 2 lat</div>
        <div style={{ ...itemStyle, background: pink }}>
          Open - dla wszystkich
        </div>
      </div>
    </div>
  );
};

export default ColorLegend;
