import React, { useState, ChangeEvent } from "react";
import sha256 from "crypto-js/sha256";
import { labelStyle, inputStyle, StyledInput } from "./formStyles";
import FormElement from "./FormElement";

const divStyle: React.CSSProperties = {
  borderRight: "solid 3px #3e0c6e"
};

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const encryptedPass = sha256(event.target.value as string).toString();
    setPassword(encryptedPass);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div style={divStyle} className="center">
        <h3 className="center">Zaloguj się!</h3>
        <form action="#">
          <FormElement
            displayName="E-mail"
            name="email"
            type="email"
            onChange={handleEmailChange}
            required
          />

          <FormElement
            displayName="Hasło"
            name="password"
            type="password"
            onChange={handlePasswordChange}
            required
          />
          <br />
          <StyledInput type="submit" value="Zaloguj się!"></StyledInput>
        </form>
      </div>
    </>
  );
};

export default LogIn;
