import React from "react";
import styled from "styled-components";
import imageLogin from "../assets/FoodX Login.png";
import imageRegister from "../assets/FoodX Register.png";
import imageHome from "../assets/FoodX Home.png";
import imageProfil from "../assets/FoodX profil.png";
import imageAdd from "../assets/FoodX Add recipe.png";
import imageDetails from "../assets/FoodX Details recipe.png";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const TopContainer = styled.div`
  
`;

const ProjectsDescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 50px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageProjets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

interface ProjectsProps {
  titre: string;
  category: string;
  year: string;
  description: string;
  img: string;
}

const Projects: React.FC<ProjectsProps> = ({
  titre,
  category,
  year,
  description,
  img,
}) => {
  return (
    <Page>
      <TopContainer>
        <h1>{titre}</h1>
        <hr
          style={{
            width: 500,
            border: `1px solid black`,
            marginLeft: 0,
          }}
        />
        <ProjectsDescriptionContainer>
          <DetailsContainer>
            <RowContainer>
              <b>Catégorie</b>
              <p>{category}</p>
            </RowContainer>
            <RowContainer>
              <b>Année</b>
              <p>{year}</p>
            </RowContainer>
          </DetailsContainer>
          <DescriptionContainer>
            <p>{description}</p>
          </DescriptionContainer>
        </ProjectsDescriptionContainer>
      </TopContainer>
      <ImageProjets>
        <img width="1272px" height="625px" src={imageLogin} />
        <img width="1272px" height="625px" src={imageRegister} />
        <img width="1272px" height="625px" src={imageHome} />
        <img width="1272px" height="625px" src={imageAdd} />
        <img width="1272px" height="625px" src={imageDetails} />
        <img width="1272px" height="625px" src={imageProfil} />
      </ImageProjets>
    </Page>
  );
};

export default Projects;
