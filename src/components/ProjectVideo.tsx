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
          //   const img = new Image();
          //   let width: number | string | undefined = "100%";
          //   img.src = image;

          //   if (img.naturalHeight > img.naturalWidth) {
          //     width = img.naturalWidth;
          //   }
          //   return <img width={width} src={image} />;
          // })}
          console.log(video);
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
