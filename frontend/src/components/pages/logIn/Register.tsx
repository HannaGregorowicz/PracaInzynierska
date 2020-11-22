import React, { useState, ChangeEvent } from "react";
import sha256 from "crypto-js/sha256";
import { labelStyle, inputStyle, errorStyle } from "./formStyles";
import { makeLocalRequest } from "../../../utils/requests";

const Register = () => {
  // This isn't right solution, because if there were more form fields it would be terrible to write
  // but it's enough for now, I'll try to change it if I have some more time.

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordMessage, setPasswordMessage] = useState<string | null>(null);
  const [emailMessage, setEmailMessage] = useState<string | null>(null);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const encryptedPass = sha256(event.target.value as string).toString();
    setPassword(encryptedPass);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const encryptedPass = sha256(event.target.value as string).toString();
    setConfirmPassword(encryptedPass);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const isPasswordValid = () => {
    if (password !== confirmPassword) {
      setPasswordMessage("Hasła nie są takie same!");
      return false;
    } else {
      return true;
    }
  };

  const doesEmailExist = async () => {
    const res = await makeLocalRequest(`/register/emailExists/${email}`, "GET");
    if (res) {
      const json = await res.json();
      const emailInDb = json.emailInDb;
      if (emailInDb) {
        setEmailMessage("Ten email istnieje już w bazie!");
      }
      return emailInDb;
    }
    return true;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setPasswordMessage(null);
    setEmailMessage(null);

    const isPassValid = isPasswordValid();
    const emailExists = await doesEmailExist();
    if (isPassValid && !emailExists) {
      const body = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone
      };
      makeLocalRequest("/register", "POST", JSON.stringify(body));
    }
  };

  // TODO: Refactor to smaller components
  return (
    <>
      <div className="center">
        <h3>
          Nie masz jeszcze konta? <br />
          Zarejestruj się!
        </h3>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle} className="required">
            E-mail:
          </label>
          <br />
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Podaj e-mail"
            style={inputStyle}
            required
          />
          {emailMessage ? <p style={errorStyle}>{emailMessage}</p> : <br />}

          <label style={labelStyle} className="required">
            Imię:
          </label>
          <br />
          <input
            onChange={handleFirstNameChange}
            type="text"
            name="firstName"
            placeholder="Podaj imię"
            style={inputStyle}
            required
          />
          <br />
          <label style={labelStyle} className="required">
            Nazwisko
          </label>
          <br />
          <input
            onChange={handleLastNameChange}
            type="text"
            name="lastName"
            placeholder="Podaj nazwisko"
            style={inputStyle}
            required
          />
          <br />
          <label style={labelStyle}>Numer telefonu:</label>
          <br />
          <input
            onChange={handlePhoneChange}
            type="tel"
            name="phone"
            placeholder="Podaj numer telefonu"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle} className="required">
            Hasło:
          </label>
          <br />
          <input
            onChange={handlePasswordChange}
            minLength={8}
            type="password"
            name="password"
            placeholder="Wpisz hasło"
            style={inputStyle}
            required
          />
          {passwordMessage ? (
            <p style={errorStyle}>{passwordMessage}</p>
          ) : (
            <br />
          )}
          <label style={labelStyle} className="required">
            Potwierdź hasło:
          </label>
          <br />
          <input
            onChange={handleConfirmPasswordChange}
            type="password"
            name="passwordConfirm"
            placeholder="Potwierdź hasło"
            style={inputStyle}
            required
          />
          <br />

          <input type="submit" value="Załóż konto!" style={inputStyle}></input>
        </form>
      </div>
    </>
  );
};

export default Register;
