import React, { ChangeEvent } from "react";
import { labelStyle, inputStyle, errorStyle } from "./formStyles";

interface IProps {
  displayName: string;
  type: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  message?: string;
}

const FormElement = (props: IProps) => {
  return (
    <>
      <label style={labelStyle} className={props.required ? "required" : ""}>
        {props.displayName}
      </label>
      <br />
      <input
        onChange={props.onChange}
        type={props.type}
        name={props.name}
        placeholder={`Podaj ${props.displayName.toLowerCase()}`}
        style={inputStyle}
        required={props.required}
      />
      {props.message ? <p style={errorStyle}>{props.message}</p> : <br />}
    </>
  );
};

export default FormElement;
