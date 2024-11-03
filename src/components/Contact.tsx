import styled from "styled-components";
import HyperTextButton from "./HyperTextButton";
import gitBlack from "../assets/GithubNoir.svg";
import gitWhite from "../assets/GithubBlanc.svg";
import mailBlack from "../assets/MailNoir.svg";
import mailWithe from "../assets/MailBlanc.svg";
import linkedinBlack from "../assets/LinkedinNoir.svg";
import linkedinWhite from "../assets/LinkedinBlanc.svg";

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

const Contact = () => {
  return (
    <ContactContainer>
      <LinkContainerLeft>
        <HyperTextButton
          imgBlack={gitBlack}
          imgWhite={gitWhite}
          href="https://github.com/AbdenourDidi"
          text="Mon GitHub"
        />
      </LinkContainerLeft>
      <LinkContainerMedium>
        <HyperTextButton
          imgBlack={linkedinBlack}
          imgWhite={linkedinWhite}
          href="https://www.linkedin.com/in/abdenour-didi-b68509326/"
          text="Mon Linkedin"
        />
      </LinkContainerMedium>
      <LinkContainerRight>
        <HyperTextButton
          imgBlack={mailBlack}
          imgWhite={mailWithe}
          href="mailto:abdenourdidi@hotmail.fr"
          text="Mon Mail"
        />
      </LinkContainerRight>
    </ContactContainer>
  );
};

export default Contact;
