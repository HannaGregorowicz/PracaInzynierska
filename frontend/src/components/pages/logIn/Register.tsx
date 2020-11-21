import React from "react";
import { labelStyle, inputStyle } from "./formStyles";
import { handleFormSubmit } from "../../../utils/handleFormSubmit";

const Register = () => {
  const handleSubmit = async (event: any) => {
    handleFormSubmit(event, "/register");
  };

  return (
    <>
      <div className="center">
        <h3>
          Nie masz jeszcze konta? <br />
          Zarejestruj się!
        </h3>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>E-mail:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Podaj e-mail"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Imię:</label>
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Podaj imię"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Nazwisko</label>
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Podaj nazwisko"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Numer telefonu:</label>
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Podaj numer telefonu"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Hasło:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Wpisz hasło"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Potwierdź hasło:</label>
          <br />
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Potwierdź hasło"
            style={inputStyle}
          />
          <br />

          <input type="submit" value="Załóż konto!" style={inputStyle}></input>
        </form>
      </div>
    </>
  );
};

export default Register;
