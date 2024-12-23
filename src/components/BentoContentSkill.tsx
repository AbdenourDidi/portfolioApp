import styled from "styled-components";
import React, { useEffect, useMemo, useState } from "react";
const BentoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LanguageContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const TitleH1 = styled.h1`
  opacity: 50%;
`;

const LanguageContentContainer = styled.p`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;
const StyledP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <div></div>
      ))}
    </BentoContentContainer>
  );
};

export default BentoContentSkill;
