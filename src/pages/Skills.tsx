import styled from "styled-components";
import Bento from "../components/Bento";
import LevelSkill from "../components/LevelSkill";
import BentoContentSkill from "../components/BentoContentSkill";

import ReactLogo from "../assets/Frontend/REACT.png";
import AngularLogo from "../assets/Frontend/ANGULAR.png";
import JavascriptLogo from "../assets/Frontend/JAVASCRIPT.png";
import TypescriptLogo from "../assets/Frontend/TYPESCRIPT.png";
import VuejsLogo from "../assets/Frontend/VUEJS.png";

import NestjsLogo from "../assets/Backend/NESTJS.png";
import DjangoLogo from "../assets/Backend/DJANGO.png";
import SpringLogo from "../assets/Backend/SPRING.png";
import NetLogo from "../assets/Backend/NET.png";

import MongoLogo from "../assets/DataBase/MONGO.webp";
import PostgresqlLogo from "../assets/DataBase/POSTGRESQL.png";
import MysqlLogo from "../assets/DataBase/MYSQL.png";
import SqliteLogo from "../assets/DataBase/SQLITE.png";
import MariaLogo from "../assets/DataBase/MARIA.png";

import HtmlLogo from "../assets/Langages/HTML.png";
import JavaLogo from "../assets/Langages/JAVA.png";
import CssLogo from "../assets/Langages/CSS.png";
import CLogo from "../assets/Langages/C.png";
import PhpLogo from "../assets/Langages/PHP.png";
import CSharpLogo from "../assets/Langages/CSHARP.png";
import PythonLogo from "../assets/Langages/PYTHON.png";

const TitleH1 = styled.h1`
  display: flex;
  flex-direction: center;
  justify-content: center;
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

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

interface SkillProps {
  skill: string;
  img: string;
  experience: number;
}

const Skills = () => {
  const langages: SkillProps[] = [
    { skill: "JAVA", img: JavaLogo, experience: 3 },
    { skill: "HTML", img: HtmlLogo, experience: 3 },
    { skill: "CSS", img: CssLogo, experience: 3 },
    { skill: "C#", img: CSharpLogo, experience: 2 },
    { skill: "PYTHON", img: PythonLogo, experience: 2 },
    { skill: "C", img: CLogo, experience: 1 },
    { skill: "PHP", img: PhpLogo, experience: 1 },
  ];
  const fronts: SkillProps[] = [
    { skill: "ANGULAR", img: AngularLogo, experience: 3 },
    { skill: "JAVASCRIPT", img: JavascriptLogo, experience: 3 },
    { skill: "TYPESCRIPT", img: TypescriptLogo, experience: 3 },
    { skill: "REACT", img: ReactLogo, experience: 2 },
    { skill: "VUEJS", img: VuejsLogo, experience: 1 },
  ];
  const backs: SkillProps[] = [
    { skill: "JAVASCRIPT", img: JavascriptLogo, experience: 3 },
    { skill: "NESTJS", img: NestjsLogo, experience: 2 },
    { skill: "DJANGO", img: DjangoLogo, experience: 2 },
    { skill: ".NET", img: NetLogo, experience: 2 },
    { skill: "SPRING", img: SpringLogo, experience: 1 },
  ];
  const dbs: SkillProps[] = [
    { skill: "MYSQL", img: MysqlLogo, experience: 3 },
    { skill: "SQLITE", img: SqliteLogo, experience: 3 },
    { skill: "MONGO", img: MongoLogo, experience: 2 },
    { skill: "POSTGRESQL", img: PostgresqlLogo, experience: 2 },
    { skill: "MARIA", img: MariaLogo, experience: 1 },
  ];
  return (
    <Gap>
      <TitleH1>Skills</TitleH1>

      <LevelSkill />
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
              titre="Front-end"
              listSkill={fronts}
            ></BentoContentSkill>
          </Bento>
        </BentoContainer>
        <BentoContainer>
          <Bento>
            <BentoContentSkill
              titre="Back-end"
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

export default Skills;
