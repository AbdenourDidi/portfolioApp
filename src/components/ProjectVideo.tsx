import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  videos: string[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const VideosContainer = styled.div`
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

const ProjectVideo = ({ title, videos }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <VideosContainer>
        {videos.map((video) => {
          return (
            <video width="400" height="700" controls>
              <source src={video} type="video/mp4" />
            </video>
          );
        })}
      </VideosContainer>
    </Container>
  );
};

export default ProjectVideo;
