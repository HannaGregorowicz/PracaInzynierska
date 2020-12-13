import React, { useState, ChangeEvent } from "react";
import sha256 from "crypto-js/sha256";
import { StyledInput } from "./formStyles";
import FormElement from "./FormElement";
import { makeLocalRequest } from "../../../utils/requests";
import { saveToken, isUser, isAdmin } from "../../../utils/jsonwebtoken";

const divStyle: React.CSSProperties = {
  borderBottom: "solid 3px #3e0c6e"
};

// TODO (optional): Add password reseting

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const encryptedPass = sha256(event.target.value as string).toString();
    setPassword(encryptedPass);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setErrorMessage("");

    if (email && password) {
      const body = {
        email: email,
        password: password
      };
      try {
        const res = await makeLocalRequest(
          "/login",
          "POST",
          JSON.stringify(body)
        );
        if (res) {
          if (res.status === 200) {
            const token = await res.text();
            saveToken(token);
            if (isUser()) {
              window.location.href = "/user";
            } else if (isAdmin()) {
              window.location.href = "/admin/users";
            } else {
              window.location.href = "/login";
            }
          } else if (res.status === 401) {
            setErrorMessage("Nieprawidłowy email lub hasło!");
          } else {
            console.error("Something went wrong!");
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div style={divStyle} className="center">
        <h3 className="center">Zaloguj się!</h3>
        <form onSubmit={handleSubmit}>
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
            message={errorMessage}
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
