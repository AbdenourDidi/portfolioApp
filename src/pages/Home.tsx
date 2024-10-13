import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import styled from "styled-components";
const HeroContainer = styled.div``;
const Home = () => {
  return (
    <HeroContainer>
      <Hero />
      <Contact />
    </HeroContainer>
  );
};

export default Home;
