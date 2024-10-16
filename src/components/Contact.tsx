import { useState } from "react";
import styled from "styled-components";
import gitBlack from "../assets/GithubNoir.svg";
import gitWhite from "../assets/GithubBlanc.svg";
import mail from "../assets/Mail.svg";
import linkedin from "../assets/Linkedin.svg";
const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkContainerLeft = styled.div`
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  display: flex;
  flex: 1;
  padding-left: 500px;
`;
const LinkContainerMedium = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  flex: 1;
`;
const LinkContainerRight = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  flex: 1;
  padding-right: 500px;
`;

const HoverCss = styled.a`
  display: flex;
  flex-direction: row;
  text-align: center;
  text-decoration: none;
  color: inherit;
  padding-right: 10px;
  padding-bottom: 0px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Contact = () => {
  const [image, setImage] = useState(gitBlack);

  return (
    <ContactContainer>
      <LinkContainerLeft>
        <HoverCss
          href="https://github.com/AbdenourDidi"
          target="_blank"
          onMouseOver={() => {
            setImage(gitWhite);
          }}
          onMouseOut={() => {
            setImage(gitBlack);
          }}
        >
          <img
            src={image}
            alt="Git"
            width="30"
            height="30"
            // // style={{ position: "relative", top: 10, right: 10 }}
          />
          {/* <p style={{ position: "relative", bottom: 10, left: 10 }}> */}
          Mon Github
          {/* </p> */}
        </HoverCss>
      </LinkContainerLeft>
      <LinkContainerMedium>
        <button
          style={{
            width: 147,
            height: 40,
            border: 1,
            borderRadius: 50,
            backgroundColor: "white",
            borderColor: "white",
          }}
          type="button"
        >
          <img
            src={linkedin}
            alt="Linkedin"
            width="30"
            height="30"
            style={{ float: "left" }}
          />
          <a
            href="https://www.linkedin.com/in/abdenour-didi-b68509326/"
            target="_blank"
            style={{
              textDecoration: "none",
              position: "relative",
              top: 7,
              color: "inherit",
            }}
          >
            Mon Linkedin
          </a>
        </button>
      </LinkContainerMedium>
      <LinkContainerRight>
        <button
          style={{
            width: 147,
            height: 40,
            border: 1,
            borderRadius: 50,
            backgroundColor: "white",
            borderColor: "white",
          }}
          type="button"
        >
          <img
            src={mail}
            alt="Mail"
            width="30"
            height="30"
            style={{ float: "left" }}
          />
          <a
            href="mailto:abdenourdidi@hotmail.fr"
            target="_blank"
            style={{
              textDecoration: "none",
              position: "relative",
              top: 7,
              color: "inherit",
            }}
          >
            Mon Mail
          </a>
        </button>
      </LinkContainerRight>
    </ContactContainer>
  );
};

export default Contact;
