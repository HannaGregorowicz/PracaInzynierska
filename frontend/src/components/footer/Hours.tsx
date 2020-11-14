import React from "react";

const flexboxStyle: React.CSSProperties = {
  height: "32vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

const Hours = () => {
  return (
    <div className="gridItem" style={flexboxStyle}>
      <h2>Godziny zajęć:</h2>
      <p>Poniedziałek: 16:00-21:00</p>
      <p>Wtorek: 16:00-21:00</p>
      <p>Środa: 16:00-21:00</p>
      <p>Czwartek: 16:00-21:00</p>
      <p>Piątek: 16:00-21:00</p>
      <p>Sobota: 9:00-16:00</p>
    </div>
  );
};

export default Hours;
