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
  experience: string;
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
          <p>{skill.experience}</p>
        </ContentSkill>
      ))}
    </BentoContentContainer>
  );
};

export default BentoContentSkill;
