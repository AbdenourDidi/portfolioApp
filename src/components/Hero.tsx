import React from "react";
import profil from "../assets/IMG_20210430_002834_826.jpg";
import styled from "styled-components";
const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const DescriptionContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  flex: 1;
  padding: 10px;
  padding-right: 150px;
  @media (max-width: 600px) {
    padding-right: 0;
    width: 150%;
    text-align: justify;
  }
`;

const ImageContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const ImageRond = styled.div`
  border-radius: 100px;
  overflow: hidden;
  width: 150px;
  height: 150px;
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ImageContainer>
        <ImageRond>
          <img
            src={profil}
            alt="photo de profil"
            style={{ height: 250, transform: `translate(-20px, -05px)` }}
          />
        </ImageRond>
      </ImageContainer>
      <DescriptionContainer>
        <h1>Abdenour didi</h1>
        <p>
          Diplômé en informatique de gestion de l'Haute École Léonard de Vinci,
          je suis passionné par l'informatique et les nouvelles technologies. Je
          suis à la recherche d'opportunités pour développer mes compétences et
          acquérir une expérience professionnelle enrichissante en tant
          qu'informaticien. Mon objectif est de contribuer efficacement à des
          projets innovants tout en continuant à apprendre et à évoluer dans ce
          domaine en constante évolution.
        </p>
      </DescriptionContainer>
    </HeroContainer>
  );
};

export default Hero;
