import styled from "styled-components";
import React, { useEffect, useMemo, useState } from "react";
const BentoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  const [width, setWidth] = useState("100%");
  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      if (image.naturalHeight > image.naturalWidth) {
        setWidth(`${image.naturalWidth / 2.5}px`);
      }
    };
  }, [img]);

  return (
    <BentoContentContainer>
      <ImageContainer>
        <img
          src={img}
          width={width}
          height={275}
          style={{
            borderRadius: 10,
            boxShadow: `0px 4px 20px 0px rgba(0, 0, 0, 0.3)`,
          }}
        />
      </ImageContainer>
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
