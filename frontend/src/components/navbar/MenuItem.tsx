import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const liStyle: React.CSSProperties = {
  marginLeft: "20px"
};

const liSmallStyle: React.CSSProperties = {
  ...liStyle,
  marginTop: "20px",
  marginBottom: "20px"
};

const StyledA = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #b892de;
  }
`;

interface IProps {
  icon: IconDefinition;
  href: string;
  name: string;
  onClick?: () => void;
}

const MenuItem = (props: IProps) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  return (
    <li style={isDesktop ? liStyle : liSmallStyle}>
      <FontAwesomeIcon className="fasIcon" icon={props.icon} />
      <StyledA href={props.href} onClick={props.onClick}>
        {props.name}
      </StyledA>
    </li>
  );
};

export default MenuItem;
