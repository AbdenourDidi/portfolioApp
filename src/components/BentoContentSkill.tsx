import styled from "styled-components";
import React, { useEffect, useMemo, useState } from "react";
const BentoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContentSkill = styled.div`
  display: flex;
  flex-direction: row;
  gap: 69px;
  align-items: center;
`;

const SphereLevel = styled.figure`
  display: block;
  background: black;
  opacity: 50%;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin: 0;
`;

const LevelContainerDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const LanguageContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const TitleH1 = styled.h1`
  opacity: 50%;
`;

interface SkillProps {
  skill: string;
  img: string;
  experience: number;
}

interface BentoContentProps {
  titre: string;
  listSkill: SkillProps[];
}

const BentoContentSkill: React.FC<BentoContentProps> = ({
  titre,
  listSkill,
}) => {
  return (
    <BentoContentContainer>
      <TitleH1>{titre}</TitleH1>
      {listSkill.map((skill) => (
        <ContentSkill>
          <h1>{skill.skill}</h1>
          <img src={skill.img} height={88} width={134} />
          <LevelContainerDetail>
            {Array.from({ length: skill.experience }).map((_, i) => (
              <SphereLevel />
            ))}
          </LevelContainerDetail>
        </ContentSkill>
      ))}
    </BentoContentContainer>
  );
};

export default BentoContentSkill;
