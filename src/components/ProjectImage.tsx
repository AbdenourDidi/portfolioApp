import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  images: string[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  @media (max-width: 600px) {
    gap: 15px;
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  @media (max-width: 600px) {
    min-width: 370px;
    max-height: 300px;
  }
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const ProjectImage = ({ title, images }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ImagesContainer>
        {images.map((image) => (
          <StyledImage src={image} />
        ))}
      </ImagesContainer>
    </Container>
  );
};

export default ProjectImage;
