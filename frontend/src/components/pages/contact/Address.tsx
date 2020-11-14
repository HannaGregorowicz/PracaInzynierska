import React from "react";

const addressStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
};

const aStyle: React.CSSProperties = {
  color: "#6b1275"
};

const Address = () => {
  return (
    <div className="gridItem" style={addressStyle}>
      <h3>Modern Dance Studio</h3>
      <p>Znajdujemy się w samym rynku Wrocławia!</p>
      <div>
        <p>ul. Rynek 5/12</p>
        <p>50-102 Wrocław</p>
      </div>
      <a href="tel:600700800" style={aStyle}>
        +48 600 700 800
      </a>
      <a href="mailto: kontakt@moderndancestudio.com" style={aStyle}>
        kontakt@moderndancestudio.com
      </a>
    </div>
  );
};

export default Address;
