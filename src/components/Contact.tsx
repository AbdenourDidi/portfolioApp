import styled from "styled-components";
import git from "../assets/Github.svg";
import mail from "../assets/Mail.svg";
import linkedin from "../assets/Linkedin.svg";
const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonContainerLeft = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  flex: 1;
  padding-left: 500px;
`;
const ButtonContainerMedium = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  flex: 1;
`;
const ButtonContainerRight = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  flex: 1;
  padding-right: 500px;
`;
const Contact = () => {
  return (
    <ContactContainer>
      <ButtonContainerLeft>
        <button
          style={{
            width: 147,
            height: 40,
            borderRadius: 50,
          }}
          type="button"
        >
          <img
            src={git}
            alt="Git"
            width="42"
            height="42"
            style={{ float: "left" }}
          />
        </button>
      </ButtonContainerLeft>
      <ButtonContainerMedium>
        <button
          style={{ width: 147, height: 40, borderRadius: 50 }}
          type="button"
        >
          <img
            src={linkedin}
            alt="Linkedin"
            width="42"
            height="42"
            style={{ float: "left" }}
          />
          My Linkedin
        </button>
      </ButtonContainerMedium>
      <ButtonContainerRight>
        <button
          style={{ width: 147, height: 40, borderRadius: 50 }}
          type="button"
        >
          <img
            src={mail}
            alt="Mail"
            width="42"
            height="42"
            style={{ float: "left" }}
          />
          My Mail
        </button>
      </ButtonContainerRight>
    </ContactContainer>
  );
};

export default Contact;
