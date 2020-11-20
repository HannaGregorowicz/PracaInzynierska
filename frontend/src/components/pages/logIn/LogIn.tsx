import React from "react";
import { labelStyle, inputStyle } from "./formStyles";

const divStyle: React.CSSProperties = {
  borderRight: "solid 3px #3e0c6e"
};

const LogIn = () => {
  return (
    <>
      <div style={divStyle} className="center">
        <h3 className="center">Zaloguj się!</h3>
        <form action="#">
          <label style={labelStyle}>E-mail:</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Wpisz email"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Hasło:</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Wpisz hasło"
            style={inputStyle}
          />
        </form>
      </div>
    </>
  );
};

export default LogIn;
