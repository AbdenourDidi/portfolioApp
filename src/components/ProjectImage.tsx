import React from 'react'
import styled from 'styled-components';

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
`;
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const ProjectImage = ({ title, images }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ImagesContainer>
        {images.map((image) => <img width="1272px" height="625px" src={image} />)}
      </ImagesContainer>
    </Container>
  )
}

export default ProjectImage