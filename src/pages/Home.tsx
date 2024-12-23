import Bento from "../components/Bento";
import styled from "styled-components";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import BentoContentProjet from "../components/BentoContentProjet";
import FoodX from "../assets/FoodX presentation.png";
import AdminHomeStage from "../assets/Admin Home stage.png";
import HomeQuickFire from "../assets/Home QuickFire.png";
import ReactLogo from "../assets/React Logo.png";
import HtmlLogo from "../assets/HTML5 logo.png";
import Skills from "./Skills";
import BentoContentSkill from "../components/BentoContentSkill";

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

const TitleH1 = styled.h1`
  display: flex;
  flex-direction: center;
  justify-content: center;
  /* gap: 15px; */
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

interface SkillProps {
  skill: string;
  img: string;
  experience: string;
}
const Home = () => {
  const langages: SkillProps[] = [];
  const fronts: SkillProps[] = [];
  const backs: SkillProps[] = [];
  const dbs: SkillProps[] = [];

  return (
    <Gap>
      <HeroContainer>
        <Hero />
        <Contact />
      </HeroContainer>
      <TitleH1>Project</TitleH1>
      <Bentos>
        <BentoContainer>
          <a
            href="/project/FoodX"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Bento>
              <BentoContentProjet
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
              <BentoContentProjet
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
              <BentoContentProjet
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
      <TitleH1>Skills</TitleH1>
      <Bentos>
        <BentoContainer>
          <Bento>
            <BentoContentSkill
              titre="Langages"
              listSkill={langages}
            ></BentoContentSkill>
          </Bento>
          <Bento>
            <BentoContentSkill
              titre="Frontend"
              listSkill={fronts}
            ></BentoContentSkill>
          </Bento>
        </BentoContainer>
        <BentoContainer>
          <Bento>
            <BentoContentSkill
              titre="Backend"
              listSkill={backs}
            ></BentoContentSkill>
          </Bento>
          <Bento>
            <BentoContentSkill
              titre="Data Base"
              listSkill={dbs}
            ></BentoContentSkill>
          </Bento>
        </BentoContainer>
      </Bentos>
    </Gap>
  );
};

export default Home;
