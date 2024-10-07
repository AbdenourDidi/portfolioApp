import React from "react";
import Hero from "../components/Hero";
import styled from "styled-components";
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Home = () => {
  return (
    <HeroContainer>
      <Hero />
    </HeroContainer>
  );
};

export default Home;
