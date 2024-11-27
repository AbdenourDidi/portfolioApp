import Bento from "../components/Bento";
import styled from "styled-components";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import PageContainer from "../components/PageContainer";
import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import BentoContent from "../components/BentoContent";
import FoodX from "../assets/FoodX presentation.png";
import AdminHomeStage from "../assets/Admin Home stage.png";
import HomeQuickFire from "../assets/Home QuickFire.png";

const Test = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Width = styled.div`
  width: 100%;
  height: 100px;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <PageContainer>
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <Contact />
      <Bento>
        <BentoContent
          img={FoodX}
          front="Javascript"
          back="Javascript"
          projet="Project école "
          titre="FoodX"
        />
      </Bento>
      <Bento>
        <BentoContent
          img={AdminHomeStage}
          front="Angular"
          back="Nestjs"
          projet="Stage"
          titre="Doc & Vous"
        />
      </Bento>
      <Bento>
        <BentoContent
          img={HomeQuickFire}
          front="React-Native"
          back="Django"
          projet="Project école"
          titre="QuickFire"
        />
      </Bento>
    </PageContainer>
  );
};

export default Home;
