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
import PAE from "../assets/Admin Home Pae.png";

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
          projet="School Projet"
          titre="FoodX"
        />
      </Bento>
      <Bento>
        <BentoContent
          img={PAE}
          front="Angular"
          back="Nestjs"
          projet="PAE"
          titre="Doc & Vous"
        />
      </Bento>
    </PageContainer>
  );
};

export default Home;
