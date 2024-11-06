import styled from "styled-components";
import React from "react";
const BentoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageRond = styled.img`
  border-radius: 10px;
  box-shadow: 4px 4px 6px #888;
`;

const LanguageContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const LanguageContentContainer = styled.p`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;
const StyledP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface BentoContentProps {
  img: string;
  front: string;
  back: string;
  projet: string;
  titre: string;
}

const BentoContent: React.FC<BentoContentProps> = ({
  img,
  front,
  back,
  projet,
  titre,
}) => {
  return (
    <BentoContentContainer>
      <img
        src={img}
        width="563"
        height="274.51"
        style={{
          borderRadius: 10,
          boxShadow: `0px 4px 20px 0px rgba(0, 0, 0, 0.3)`,
        }}
      />
      <LanguageContent>
        <LanguageContentContainer>
          <b>{front}</b>
        </LanguageContentContainer>
        <LanguageContentContainer>
          <b>{back}</b>
        </LanguageContentContainer>
      </LanguageContent>
      <StyledP>
        <p style={{ margin: 0, height: 20 }}>{projet}</p>
        <b style={{ height: 24 }}>{titre}</b>
      </StyledP>
    </BentoContentContainer>
  );
};

export default BentoContent;
