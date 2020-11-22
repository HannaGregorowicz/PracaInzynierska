import React, { useState, ChangeEvent } from "react";
import sha256 from "crypto-js/sha256";
import { makeLocalRequest } from "../../../utils/requests";
import FormElement from "./FormElement";
import { StyledInput } from "./formStyles";

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
          <FormElement
            displayName="E-mail"
            name="email"
            type="email"
            onChange={handleEmailChange}
            message={emailMessage}
            required
          />

          <FormElement
            displayName="Imię"
            name="firstName"
            type="text"
            onChange={handleFirstNameChange}
            required
          />

          <FormElement
            displayName="Nazwisko"
            name="lastName"
            type="text"
            onChange={handleLastNameChange}
            required
          />

          <FormElement
            displayName="Numer telefonu"
            name="phone"
            type="tel"
            onChange={handlePhoneChange}
          />

          <FormElement
            displayName="Hasło"
            name="password"
            type="password"
            onChange={handlePasswordChange}
            message={passwordMessage}
            required
          />

          <FormElement
            displayName="Ponownie hasło"
            name="passwordConfirm"
            type="password"
            onChange={handleConfirmPasswordChange}
            required
          />
          <br />
          <StyledInput type="submit" value="Załóż konto!"></StyledInput>
        </form>
      </div>
    </>
  );
};

export default Register;
