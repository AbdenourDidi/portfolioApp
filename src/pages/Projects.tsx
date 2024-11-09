import React from "react";
import styled from "styled-components";
import PageContainer from "../components/PageContainer";
const ProjectsContainer = styled.div``;
const ProjectsDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const DescriptionContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>FoodX</h1>{" "}
      <hr
        style={{
          width: 638,
          border: `1px solid black`,
          marginLeft: 0,
        }}
      />
      <ProjectsDescriptionContainer>
        <DetailsContainer>
          <RowContainer>
            <b>Catégorie</b>
            <p>developpement web</p>
          </RowContainer>
          <RowContainer>
            <b>Année</b>
            <p>2022</p>
          </RowContainer>
        </DetailsContainer>
        <DescriptionContainer>
          <p>
            Un site de recettes de cuisine qui aide à choisir quoi préparer pour
            le dîner en fonction des ingrédients disponibles. Il offre aussi la
            possibilité de créer et partager ses propres recettes, favorisant
            ainsi l'inspiration culinaire et l'échange entre passionnés de
            cuisine.
          </p>
        </DescriptionContainer>
      </ProjectsDescriptionContainer>
    </ProjectsContainer>
  );
};

export default Projects;
