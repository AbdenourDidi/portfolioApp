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
  justify-content: center;
  gap: 31px;
`;


const Contact = () => {
  return (
    <ContactContainer>
      <HyperTextButton
        imgBlack={gitBlack}
        imgWhite={gitWhite}
        href="https://github.com/AbdenourDidi"
        text="Mon GitHub"
      />
      <HyperTextButton
        imgBlack={linkedinBlack}
        imgWhite={linkedinWhite}
        href="https://www.linkedin.com/in/abdenour-didi-b68509326/"
        text="Mon Linkedin"
      />
      <HyperTextButton
        imgBlack={mailBlack}
        imgWhite={mailWithe}
        href="mailto:abdenourdidi@hotmail.fr"
        text="Mon Mail"
      />
    </ContactContainer>
  );
};

export default Contact;
