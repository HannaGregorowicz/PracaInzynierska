import React from "react";
import styled from "styled-components";

const liStyle: React.CSSProperties = {
  marginLeft: "20px"
};

const StyledA = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #b892de;
  }
`;

export const MenuItem = (props: any) => {
  return (
    <li style={liStyle}>
      <StyledA href={props.href}>{props.name}</StyledA>
    </li>
  );
};

export default MenuItem;
