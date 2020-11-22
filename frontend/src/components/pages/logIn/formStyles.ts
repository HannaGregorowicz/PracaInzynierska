import styled from "styled-components";

export const inputStyle: React.CSSProperties = {
  width: "60%",
  fontSize: "14pt",
  padding: "5px",
  borderRadius: "5px",
  borderColor: "#3e0c6e"
};

export const labelStyle: React.CSSProperties = {
  fontSize: "14pt",
  display: "inline-block",
  marginTop: "20px"
};

export const errorStyle: React.CSSProperties = {
  color: "#ff0000",
  fontSize: "12pt",
  marginBottom: 0
};

export const StyledInput = styled.input`
  width: 63%;
  cursor: pointer;
  color: #ffffff;
  background-color: #3e0c6e;
  margin-bottom: 20px;
  font-size: 14pt;
  border-radius: 5px;
  padding: 5px;
  border-color: #3e0c6e;

  &:hover {
    opacity: 80%;
  }
`;
