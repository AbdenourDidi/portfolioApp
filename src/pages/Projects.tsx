import styled from "styled-components";
import Bento from "../components/Bento";
import BentoContentProjet from "../components/BentoContentProjet";
import FoodX from "../assets/FoodX presentation.png";
import AdminHomeStage from "../assets/Admin Home stage.png";
import HomeQuickFire from "../assets/Home QuickFire.png";

const BentoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;
const Bentos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    align-items: center;
    gap: 15px;
  }
`;
const TitleH1 = styled.h1`
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  @media (max-width: 600px) {
    gap: 40px;
  }
`;

const Projects = () => {
  return (
    <Gap>
      <TitleH1>Projets</TitleH1>
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
    </Gap>
  );
};

export default Projects;
