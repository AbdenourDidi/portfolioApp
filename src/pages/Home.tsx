import Bento from "../components/Bento";
import styled from "styled-components";
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
const BentoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Bentos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Home = () => {
  return (
    <Gap>
      <HeroContainer>
        <Hero />
        <Contact />
      </HeroContainer>
      <Bentos>
        <BentoContainer>
          <a
            href="/project/FoodX"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Bento>
              <BentoContent
                img={FoodX}
                front="Javascript"
                back="Javascript"
                projet="Project école"
                titre="FoodX"
              />
            </Bento>
          </a>
          <a
            href="/project/Doc & Vous"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Bento>
              <BentoContent
                img={AdminHomeStage}
                front="Angular"
                back="Nestjs"
                projet="Stage"
                titre="Doc & Vous"
              />
            </Bento>
          </a>
        </BentoContainer>

        <BentoContainer>
          <a
            href="/project/QuickFire"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Bento>
              <BentoContent
                img={HomeQuickFire}
                front="React-Native"
                back="Django"
                projet="Project école"
                titre="QuickFire"
              />
            </Bento>
          </a>
        </BentoContainer>
      </Bentos>
      {/* Skills */}
    </Gap>
  );
};

export default Home;
