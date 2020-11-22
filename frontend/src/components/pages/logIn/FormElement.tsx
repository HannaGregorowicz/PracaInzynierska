import React from "react";
import { labelStyle, inputStyle, errorStyle } from "./formStyles";

const FormElement = (props: any) => {
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
        required
      />
      {props.message ? <p style={errorStyle}>{props.message}</p> : <br />}
    </>
  );
};

export default FormElement;
