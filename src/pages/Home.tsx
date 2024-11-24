import Bento from "../components/Bento";
import styled from "styled-components";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import PageContainer from "../components/PageContainer";
import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

const Test = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Width = styled.div`
    width: 100%;
    height: 100px;
`;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  `;

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
  return (
    <Gap>
      <HeroContainer>
        <Hero />
        <Contact />
      </HeroContainer>
      {/* Projects */}
      {/* Skills */}
    </Gap>
  );
};

export default Home;
