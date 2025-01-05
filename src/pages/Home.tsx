import styled from "styled-components";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Projects from "./Projects";
import Skills from "./Skills";

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
      <Projects />
      <Skills />
    </Gap>
  );
};

export default Home;
