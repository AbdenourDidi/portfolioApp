import styled from "styled-components";
const git = "../assets/Github.png";
const mail = "../assets/Mail.png";
const linkedin = "../assets/Linkedin.png";
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
            backgroundColor: "black",
          }}
          type="button"
        >
          <img
            src="../assets/Github.png"
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
            src="../assets/Linkedin.png"
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
            src="../assets/Mail.png"
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
