import styled from "styled-components";

const BentoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 22px;
  @media (max-width: 600px) {
    padding: 2px;
    gap: 16px;
  }
`;

const ContentSkill = styled.div`
  display: flex;
  flex-direction: row;
  gap: 69px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    gap: 25px;
  }
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
  @media (max-width: 600px) {
    gap: 15px;
  }
`;

const StyledImage = styled.img`
  height: 80px;
  width: auto;
  object-fit: contain;
  @media (max-width: 600px) {
    height: 50px;
  }
`;

const TitleBento = styled.h1`
  opacity: 50%;
`;

const TitleSkill = styled.h1`
  @media (max-width: 600px) {
    font-size: 25px;
  }
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

const BentoContentSkill = ({ titre, listSkill }: BentoContentProps) => {
  return (
    <BentoContentContainer>
      <TitleBento>{titre}</TitleBento>
      {listSkill.map((skill) => (
        <ContentSkill>
          <TitleSkill>{skill.skill}</TitleSkill>
          <StyledImage src={skill.img} />
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
