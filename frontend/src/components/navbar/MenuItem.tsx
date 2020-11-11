import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const MenuItem = (props: any) => {
  return (
    <li style={liStyle}>
      <FontAwesomeIcon className="fasIcon" icon={props.icon} />
      <StyledA href={props.href}>{props.name}</StyledA>
    </li>
  );
};

export default MenuItem;
