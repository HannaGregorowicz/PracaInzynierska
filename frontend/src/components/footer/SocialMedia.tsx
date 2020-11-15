import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faFacebookMessenger,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const iconsContainerStyle: React.CSSProperties = {
  fontSize: "25pt",
  marginTop: "10px",
  marginBottom: "10px"
};

const FacebookIcon = styled.a`
  margin-right: 20px;
  color: #4267b2;
  &:hover {
    color: #ffffff;
  }
`;

const MessengerIcon = styled.a`
  margin-right: 20px;
  color: #006aff;
  &:hover {
    color: #ffffff;
  }
`;

const TwitterIcon = styled.a`
  margin-right: 20px;
  color: #00acee;
  &:hover {
    color: #ffffff;
  }
`;

const YoutubeIcon = styled.a`
  margin-right: 20px;
  color: #c4302b;
  &:hover {
    color: #ffffff;
  }
`;

const InstagramIcon = styled.a`
  margin-right: 20px;
  color: #8a3ab9;
  &:hover {
    color: #ffffff;
  }
`;

const LinkedinIcon = styled.a`
  margin-right: 20px;
  color: #0072b1;
  &:hover {
    color: #ffffff;
  }
`;

const SocialMedia = () => {
  return (
    <div className="gridItem">
      <h2>Znajdź nas w social mediach!</h2>
      <div style={iconsContainerStyle}>
        <FacebookIcon href="">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </FacebookIcon>

        <MessengerIcon href="">
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </MessengerIcon>

        <TwitterIcon href="">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </TwitterIcon>

        <YoutubeIcon href="">
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </YoutubeIcon>

        <InstagramIcon href="">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </InstagramIcon>

        <LinkedinIcon href="">
          <FontAwesomeIcon icon={faLinkedin} />
        </LinkedinIcon>
      </div>

      <div
        className="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-width="300"
        data-hide-cover="false"
        data-show-facepile="false"
      ></div>
    </div>
  );
};

export default SocialMedia;
