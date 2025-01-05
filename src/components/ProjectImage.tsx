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
  const [imageWidths, setImageWidths] = useState<{
    [key: string]: string | number;
  }>({});

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setImageWidths((prev) => {
          let newWidth;
          if (img.naturalHeight > img.naturalWidth) {
            newWidth = `${img.naturalWidth}px`; // Portrait : largeur réelle
          } else {
            newWidth = "100%"; // Paysage : largeur à 100%
          }
          return {
            ...prev,
            [image]: newWidth,
          };
        });
      };
    });
  }, [images]);

  return (
    <Container>
      <Title>{title}</Title>
      <ImagesContainer>
        {images.map((image) => (
          <img
            width={imageWidths[image] || "100%"} // Utilise la largeur calculée ou "100%" par défaut
            src={image}
            alt="Project"
          />
        ))}
      </ImagesContainer>
    </Container>
  );
};

export default ProjectImage;
